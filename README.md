# Jeevi.M

Personal software engineering portfolio for Jeevithan Mahenthran.

The site gives recruiters and collaborators a quick view of Jeevi's professional work, education, engineering interests, and projects. It keeps a general software engineering focus while making room for multiplayer game development, systems research, and personal interests.

## Goals

- Present Jeevi as a software engineer with real production experience.
- Highlight backend systems, APIs, integrations, debugging, and full-stack delivery.
- Show the path from a B.S. in Computer Science and Game Design to an M.S. in Computer Science and Engineering at UC Santa Cruz.
- Make substantial projects easy to discover within a short visit.
- Keep the writing personal, direct, and grounded in supported experience.
- Work well on desktop and mobile with clear keyboard and reduced-motion support.

## Featured work

### Body & Soul

2v2 online top-down MOBA built with Unity 6, C#, and Photon. The project demonstrates champion abilities, cooldowns, hit detection, progression systems, real-time synchronization, and team-based Scrum development.

### SlugRush

Deployed gym occupancy product built with Next.js, React, FastAPI, PostgreSQL, Supabase, and Docker. It supports real-time occupancy, historical crowd trends, scheduled data collection, and has reached more than 5,000 users.

### Testing Autonomous Driving Stacks

Systems research project using Python, CARLA, Scenic, VerifAI, and ChatScene to test driving scenarios and generate targeted safety cases.

Additional projects include Secure AI and FitCheck AI, with links to demos, reports, builds, and source code where available.

## Site features

- Full-screen hero with the Jeevi.M identity, current role, education, and primary calls to action.
- Scroll-revealed navigation for About, Experience, Skills, Projects, and Gmail Contact.
- Resume, GitHub, LinkedIn, and Medium links using the original local icon treatment.
- About section with education, engineering background, personal stats, gaming history, and hobbies.
- Experience section covering Bright Data, UXLY Software, and jLabs / ENTs Research.
- Rolling technology stack focused on demonstrated languages, frameworks, infrastructure, and tools.
- Featured project cards with previews, technology references, demos, builds, reports, code, and expandable engineering details.
- Deterministic portfolio guide with preset answers sourced from the same shared profile data as the page.
- Original black cat icon retained in the portfolio guide.
- Responsive layout, visible focus states, accessible labels, external-link cues, and reduced-motion behavior.

## References and inspiration

The original visual direction drew inspiration from [Jacob Fu](https://www.jacobfu.com/) and [v0](https://v0.dev/chat). The current portfolio preserves that dark, playful developer-portfolio character while adapting the content to Jeevi's experience and projects.

The interface uses Lucide icons, existing local technology and social assets, shadcn/ui and Radix primitives where applicable, and a Next.js App Router foundation.

## Content source of truth

Shared profile, education, experience, project, technology, social, and resume references live in `frontend/lib/portfolio.ts`. The portfolio guide answers are in `frontend/lib/chat.ts`; the visible guide is preset and does not claim to be a live language model.
