const { test } = require("node:test")
const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")
const ts = require("typescript")

// Use the project's existing TypeScript compiler; no test runner dependency.
require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8")
  const result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } })
  module._compile(result.outputText, filename)
}
const { getChatReply, quickQuestions } = require("../lib/chat.ts")
const { profile, projects, technologies, experiences } = require("../lib/portfolio.ts")

test("quick questions resolve to relevant answers, not the fallback", () => {
  for (const question of quickQuestions) assert.doesNotMatch(getChatReply(question).text, /only have preset answers/)
})
test("education questions use current completed and expected dates", () => {
  for (const question of ["What are you studying?", "When do you graduate?", "What's your CS degree?", "masters"]) {
    const reply = getChatReply(question).text
    assert.match(reply, /June 2025/)
    assert.match(reply, /June 2028/)
    assert.match(reply, /currently enrolled/)
    assert.doesNotMatch(reply, /2027|this fall/)
  }
})
test("current and former roles are distinguished accurately", () => {
  assert.match(getChatReply("What do you work on?").text, /Technical Solutions Engineer/)
  assert.match(getChatReply("previous role").text, /Product Support Engineer II/)
  assert.equal(experiences[0].period, "Jun 2026 – Present")
  assert.equal(experiences[1].period, "Sep 2025 – Jun 2026")
})
test("project intent is not accidentally matched as a gym PR", () => {
  assert.match(getChatReply("Tell me about your projects").text, /Body & Soul/)
  assert.match(getChatReply("production workflows").text, /Bright Data/)
})
test("specific project answers include actual demos, code, and product links", () => {
  for (const project of projects.slice(0, 2)) {
    const reply = getChatReply(project.title)
    assert.match(reply.text, new RegExp(project.title))
    assert.ok(reply.links.some(link => link.href === project.githubUrl))
    assert.ok(reply.links.some(link => link.href === project.liveUrl))
  }
})
test("unknown questions fall back honestly without fabricating facts", () => {
  assert.match(getChatReply("What is your salary?").text, /only have preset answers/)
  assert.match(getChatReply("How do you work?").text, /no live language model/)
  assert.match(getChatReply("Who are you?").text, /no live language model/)
  assert.match(getChatReply("Who built you?").text, /no live language model/)
  assert.match(getChatReply("Are you AI?").text, /no live language model/)
})
test("all local project, company, technology, and resume assets exist", () => {
  const assets = [profile.resumeUrl, ...projects.flatMap(p => [p.image, p.liveUrl].filter(url => url?.startsWith("/"))), ...technologies.flatMap(t => t.image ? [t.image] : []), ...experiences.map(e => e.icon)]
  for (const asset of assets) assert.ok(fs.existsSync(path.join(__dirname, "../public", decodeURIComponent(asset))), asset)
})
test("resume and contact use the single shared current targets", () => {
  assert.equal(getChatReply("resume").links[0].href, profile.resumeUrl)
  assert.match(decodeURIComponent(profile.resumeUrl), /FALL 2026/)
  assert.equal(getChatReply("email").links[0].href, "mailto:jeevithanmahenth@gmail.com")
})
test("gaming answers preserve the supported League history without conflicting Valorant ranks", () => {
  assert.match(getChatReply("league rank").text, /Diamond II/)
  assert.match(getChatReply("league rank").text, /collegiate/)
  assert.match(getChatReply("valorant rank").text, /old profile.*Platinum I/)
  assert.doesNotMatch(getChatReply("valorant rank").text, /Plat 2|Platinum II/)
})
test("unavailable source repositories are omitted from project answers", () => {
  const reply = getChatReply("Secure AI")
  assert.ok(reply.links.some(link => link.label === "Watch demo"))
  assert.ok(!reply.links.some(link => link.label === "Source code"))
})
