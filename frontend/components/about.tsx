import { personal, personalStats, profile } from "@/lib/portfolio"

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-shell">
      <h2 id="about-title" className="section-title"><span className="text-orange-400">ABOUT</span> ME</h2>
      <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-5 sm:p-6 md:p-9">
        <div className="grid gap-9 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="min-w-0 space-y-4 text-base leading-relaxed text-gray-300">
            <p>
              I’m a software engineer and {profile.role} at {profile.company}.
              Most of my work is around backend systems, APIs, and figuring out why something broke in production.
            </p>
            <p>
              I like building things from scratch and seeing people actually use them.
              That includes a gym tracker for UCSC students, backend tools, and a multiplayer game built with Unity and C#.
            </p>
            <p>
              {personal.hobbies} I also played collegiate League for UCSC’s White team.
            </p>
          </div>
          <div className="min-w-0">
            <h3 className="font-mono text-xl font-bold tracking-wide text-orange-400">SYSTEM.STATS</h3>
            <p className="mb-5 mt-2 text-xs leading-relaxed text-gray-400">Personal bests and older stats. Keeping these here for the memories.</p>
            <dl className="space-y-4 font-mono text-sm">
              {personalStats.map(stat => (
                <div key={stat.id} className="relative border-l-2 border-orange-500 pl-10">
                  <dt className="inline text-purple-300">
                    <span aria-hidden="true" className="absolute left-3 top-0 text-lg">{stat.emoji}</span>
                    {stat.label}: </dt>
                  <dd className="inline text-gray-200">
                    <span className="inline-block">{stat.value}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-gray-400">{stat.comment}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-9 border-t border-gray-800 pt-7">
          <h3 className="mb-4 font-mono text-sm font-semibold tracking-wider text-purple-300">EDUCATION</h3>
          <dl className="grid gap-6 md:grid-cols-2">
            <div>
              <dt className="font-semibold leading-relaxed text-white">{profile.education.masters}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-gray-300">{profile.university} · Currently enrolled<br />Expected {profile.education.mastersExpected}</dd>
            </div>
            <div>
              <dt className="font-semibold leading-relaxed text-white">{profile.education.bachelors}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-gray-300">{profile.university}<br />Completed {profile.education.bachelorsCompleted}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
