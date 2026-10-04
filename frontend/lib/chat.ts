import { experiences, personal, personalStats, profile, projects, technologies } from "./portfolio"

export interface ChatReply {
  text: string
  links?: { label: string; href: string }[]
}

export const quickQuestions = ["What do you work on?", "What are you studying?", "Tell me about your projects", "What tools do you use?", "Do you play games?", "What's your background?"]

const education = `I completed my ${profile.education.bachelors} at ${profile.university} in ${profile.education.bachelorsCompleted}. I’m currently enrolled in the ${profile.education.masters} program there, with graduation expected in ${profile.education.mastersExpected}.`
const projectReply = (id: string): ChatReply => {
  const project = projects.find(item => item.id === id)!
  return {
    text: [project.title + ": " + project.description, ...project.highlights].join("\n\n"),
    links: [
      ...(project.demoUrl ? [{ label: "Watch demo", href: project.demoUrl }] : []),
      ...(project.liveUrl ? [{ label: project.liveLabel || "View project", href: project.liveUrl }] : []),
      ...(project.githubUrl ? [{ label: "Source code", href: project.githubUrl }] : []),
    ],
  }
}

export function getChatReply(question: string): ChatReply {
  const q = question.toLowerCase().replace(/[’']/g, "")
  if (/\b(who built you|who are you|are you (an? )?ai|how (does this|do you|this chat) work)\b/.test(q)) return { text: "This is a preset portfolio guide built by Jeevi with Next.js and React. Answers come from the same profile data as the website; there’s no live language model behind this chat." }
  if (/\b(resume|cv)\b/.test(q)) return { text: "Here’s my current SWE resume.", links: [{ label: "SWE resume (PDF)", href: profile.resumeUrl }] }
  if (/\b(contact|email|reach)\b/.test(q)) return { text: `You can reach me at ${profile.email}.`, links: [{ label: "Email Jeevi", href: `mailto:${profile.email}` }] }
  if (/\b(body|soul|moba|photon)\b/.test(q)) return projectReply("body-and-soul")
  if (/\b(slugrush|occupancy|crowd|gym tracker)\b/.test(q)) return projectReply("slugrush")
  if (/\b(education|studying|study|degree|graduate|graduating|graduation|masters|bachelors|school|university|enrolled|cse|cs)\b/.test(q)) return { text: education }
  if (/\b(uxly|jlabs|ents|dirtviz)\b/.test(q)) {
    const exp = experiences.find(item => /uxly/.test(q) ? item.company.includes("UXLY") : item.company.includes("jLabs"))!
    return { text: `${exp.title} at ${exp.company} (${exp.period}).\n\n${exp.description}` }
  }
  if (/\b(product support|previous role|hotfix|mcp|scraper|unblocking)\b/.test(q)) {
    const previous = experiences[1]
    return { text: `My previous role was ${previous.title} at ${previous.company} (${previous.period}).\n\n${previous.description}\n\nI’m now a ${profile.role} at ${profile.company}.` }
  }
  if (/\b(bright data|work|role|experience|job|production|integration|integrations|api|apis|backend)\b/.test(q)) {
    return { text: `I’m a ${profile.role} at ${profile.company} (${experiences[0].period}).\n\n${experiences[0].description}\n\nPreviously, I was a Product Support Engineer II at Bright Data, a Full Stack Software Developer at jLabs / ENTs Research, and a Software Engineer Intern at UXLY Software.` }
  }
  if (/\b(secure\s?ai|security)\b/.test(q)) return projectReply("secure-ai")
  if (/\b(fitcheck|stylist)\b/.test(q)) return projectReply("fitcheck")
  if (/\b(carla|research|driving)\b/.test(q)) return projectReply("autonomous-driving")
  if (/\b(project|projects|built|build|shipped|product|products)\b/.test(q)) {
    return { text: projects.slice(0, 3).map(project => `${project.title}: ${project.description}`).join("\n\n") + "\n\nAsk about any of these for more details.", links: [{ label: "View projects", href: "#projects" }] }
  }
  if (/\b(league|lol|esports|collegiate|rank)\b/.test(q) && !/valorant/.test(q)) return { text: personal.league }
  if (/\b(valorant|chamber|sova|cypher)\b/.test(q)) return { text: personal.valorant }
  if (/\b(game|games|gaming|unity)\b/.test(q)) return { text: personal.league + "\n\n" + personal.valorant + "\n\nI also build games: Body & Soul is a Unity/C# multiplayer MOBA. My engineering work spans games, backend systems, and full-stack products." }
  if (/\b(ai|ml|llm|chatbot)\b/.test(q)) return { text: "I’ve built with LangChain, LlamaIndex, and RAG at UXLY, and explored AI in Secure AI, FitCheck, and driving simulation research. It’s one part of my broader backend and full-stack work." }
  if (/\b(skills|tools|technologies|stack|languages)\b/.test(q)) return { text: `I work with ${technologies.map(item => item.name).join(", ")}. Some are from my day job, others from web apps, research, and game projects.` }
  if (/\b(background|from|story)\b/.test(q)) return { text: personal.background }
  if (/\b(bench|pr)\b/.test(q)) return { text: `My bench PR from the old profile is ${personalStats.find(stat => stat.id === "bench")!.value}. That was during peak bulk, so I’m keeping it as a personal best rather than a current number.` }
  if (/\b(gym|lifting|boxing|hobbies|basketball|fishing)\b/.test(q)) return { text: personal.hobbies }
  if (/\b(dream|company|companies|riot|career)\b/.test(q)) return { text: "I like working on software that people actually use. Backend systems and full-stack development are my main focus, and I’d love to keep building games too." }
  if (/\b(who|how)\b/.test(q) && /\b(you|chat|works)\b/.test(q)) return { text: "This is a preset portfolio guide built by Jeevi with Next.js and React. Answers come from the same profile data as the website; there’s no live language model behind this chat." }
  if (/^(hi|hello|hey)[!.\s]*$/.test(q)) return { text: "Hey! Ask about my work, school, projects, or games. The quick questions are a good place to start." }
  return { text: "I only have preset answers about Jeevi’s portfolio. Try asking about work, education, Body & Soul, SlugRush, skills, or gaming. For anything else, send me an email.", links: [{ label: "Email Jeevi", href: `mailto:${profile.email}` }] }
}
