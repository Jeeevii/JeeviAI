// Shared, verified portfolio facts. Update these before changing page or chat copy.
export const profile = {
  name: "Jeevithan Mahenthran",
  nickname: "Jeevi",
  role: "Technical Solutions Engineer",
  company: "Bright Data",
  university: "UC Santa Cruz",
  education: {
    bachelors: "B.S. in Computer Science and Game Design",
    bachelorsCompleted: "June 2025",
    masters: "M.S. in Computer Science and Engineering",
    mastersExpected: "June 2028",
  },
  siteUrl: "https://jeevithanmahenthran.com",
  email: "jeevithanmahenth@gmail.com",
  resumeUrl: "/docs/Jeevithan_Mahenthran_Resume%5BFALL%202026%5D.pdf",
  description: "Currently a Technical Solutions Engineer at Bright Data. I love building backend systems, API integrations, full-stack products, and multiplayer games.",
  socials: [
    { name: "GitHub", url: "https://github.com/jeeevii", image: "/icons/github.png" },
    { name: "LinkedIn", url: "https://linkedin.com/in/jeevithan-mahenthran", image: "/icons/linkedin.png" },
    { name: "Medium", url: "https://medium.com/@jeevithanmahenthran", image: "/icons/medium.png" },
  ],
} as const

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  icon: string
}

export const experiences: Experience[] = [
  {
    title: profile.role,
    company: profile.company,
    period: "Jun 2026 – Present",
    description: "Work with a major enterprise customer on Python and JavaScript integrations, REST APIs, and web data pipelines. Debug live production issues and work with Product and R&D to make those workflows more reliable and handle growth.",
    technologies: ["Python", "JavaScript", "Node.js", "REST APIs", "Data pipelines"],
    icon: "/icons/brightdata.jpg",
  },
  {
    title: "Product Support Engineer II",
    company: profile.company,
    period: "Sep 2025 – Jun 2026",
    description: "Debugged APIs, integrations, and web collection pipelines. Made collector hotfixes, scraper changes, and MCP fixes to get production workflows running again. Worked with engineering on reproducing bugs and fixing the underlying problems.",
    technologies: ["Python", "JavaScript", "C#", "REST APIs", "MCP"],
    icon: "/icons/brightdata.jpg",
  },
  {
    title: "Full Stack Software Developer",
    company: "jLabs / ENTs Research · UC Santa Cruz",
    period: "May 2025 – Aug 2025",
    description: "Built full-stack features for DirtViz, a platform for visualizing agricultural IoT sensor data. Worked across React/MUI interfaces, Flask REST APIs, database changes, and Docker-based deployment and testing.",
    technologies: ["React", "Flask", "Python", "PostgreSQL", "Docker"],
    icon: "/icons/ucsc.png",
  },
  {
    title: "Software Engineer Intern",
    company: "UXLY Software",
    period: "Jan 2025 – Jun 2025",
    description: "Built e-commerce tools for product search, cart and order management, and authenticated user sessions. Integrated a LangChain-based assistant with input/output guardrails and wrote unit and benchmark tests.",
    technologies: ["Python", "React", "LangChain", "PostgreSQL", "Docker"],
    icon: "/icons/uxly.jpg",
  },
]

export const earlierExperiences: Experience[] = [
  { title: "UI/UX Web Designer Intern", company: "Laney Community College", period: "Aug 2024 – Nov 2024", description: "Designed and built a career and counseling website, incorporating feedback to improve usability and accessibility.", technologies: ["Figma", "Wix"], icon: "/icons/laney.png" },
  { title: "Frontend Developer Intern", company: "UCSC Tech4Good", period: "Mar 2023 – Feb 2024", description: "Built responsive web interfaces from Figma mockups, collaborating through code review and production handoffs.", technologies: ["Angular", "HTML/CSS", "Git"], icon: "/icons/t4g.png" },
  { title: "Learning Technology Consultant", company: "UCSC ITS Department", period: "Aug 2021 – Sep 2022", description: "Helped students, faculty, and professors troubleshoot hardware, software, and campus learning tools.", technologies: ["Windows", "macOS", "Learning platforms"], icon: "/icons/ucsc.png" },
]

export interface Project {
  id: string
  title: string
  category: string
  description: string
  highlights: string[]
  techStack: string[]
  githubUrl: string | null
  liveUrl: string | null
  liveLabel?: string
  demoUrl: string | null
  image: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: "body-and-soul",
    title: "Body & Soul",
    category: "Real-time multiplayer · Team project",
    description: "A 2v2 online top-down MOBA where tethered teammates win through positioning and coordination. Inspired in part by League of Legends’ Arena mode.",
    highlights: ["Implemented C# champion abilities, cooldowns, hit detection, and scaling stats.", "Built modular progression and upgrades with real-time multiplayer synchronization.", "Coordinated team development as Scrum Master."],
    techStack: ["Unity 6", "C#", "Photon"],
    githubUrl: "https://github.com/171-Team-25",
    liveUrl: "https://drive.google.com/file/d/13yVBUx2IcxoUuTJVpGvCxYbKIJIukH2q/view",
    liveLabel: "Game build",
    demoUrl: "https://www.youtube.com/watch?v=Vz5GJUwyOkE",
    image: "/projects/body&soul.png",
    imageAlt: "Body & Soul multiplayer arena gameplay",
  },
  {
    id: "slugrush",
    title: "SlugRush",
    category: "Deployed product · 5,000+ users",
    description: "Built a gym tracker so UCSC students can check how busy it is before heading over. Reached 5,000+ users after launch.",
    highlights: ["Real-time occupancy and historical crowd trends.", "Built the FastAPI backend, scheduled collection, and PostgreSQL storage pipeline.", "Led development and project management from build to launch."],
    techStack: ["Next.js / React", "FastAPI", "PostgreSQL", "Supabase", "Docker"],
    githubUrl: "https://github.com/Jeeevii/SlugRush",
    liveUrl: "https://slugrush.vercel.app",
    liveLabel: "Visit site",
    demoUrl: null,
    image: "/projects/slugrush.png",
    imageAlt: "SlugRush gym occupancy dashboard",
  },
  {
    id: "autonomous-driving",
    title: "Testing Autonomous Driving Stacks",
    category: "Systems research",
    description: "Tested driving scenarios in CARLA to find out where autonomous driving stacks fail, with targeted safety tests and simulation analysis.",
    highlights: ["Used ChatScene to generate Scenic scripts for targeted safety tests."],
    techStack: ["Python", "CARLA", "Scenic", "VerifAI", "ChatScene"],
    githubUrl: "https://github.com/Jeeevii/cse233_acc_verifai",
    liveUrl: "/docs/cse233_final_report.pdf",
    liveLabel: "Read report",
    demoUrl: "https://www.youtube.com/watch?v=yFxkvYchXbo",
    image: "/projects/cse233.png",
    imageAlt: "Autonomous driving safety test simulation",
  },
  {
    id: "secure-ai",
    title: "Secure AI",
    category: "Developer tooling",
    description: "A tool that scans public GitHub repositories for potential security vulnerabilities, outdated dependencies, and malicious binaries, then explains findings and suggested fixes.",
    highlights: [],
    techStack: ["Python", "FastAPI", "Next.js", "LangChain", "Gemini"],
    // Previous URL (github.com/Jeeevii/SecureAI) returned 404 during the link audit.
    githubUrl: null,
    liveUrl: null,
    demoUrl: "https://www.youtube.com/watch?v=f1LCjcX3dho",
    image: "/projects/secureai.png",
    imageAlt: "Secure AI repository analysis interface",
  },
  {
    id: "fitcheck",
    title: "FitCheck AI",
    category: "Product experiment",
    description: "A virtual stylist that takes an outfit photo and occasion, then provides a style rating, outfit suggestions, a generated visual, and voice feedback.",
    highlights: [],
    techStack: ["Next.js", "Python", "Gemini", "Replicate", "Chatterbox"],
    githubUrl: "https://github.com/Jeeevii/FitCheck",
    liveUrl: null,
    demoUrl: "https://www.youtube.com/watch?v=Melo3dYctjM",
    image: "/projects/fitcheck.png",
    imageAlt: "FitCheck AI outfit feedback interface",
  },
]

export interface Technology { name: string; image?: string; monogram?: string }
export const technologies: Technology[] = [
  { name: "C++", image: "/icons/skills/cc.svg" },
  { name: "C#", monogram: "C#" },
  { name: "Python", image: "/icons/skills/python.svg" },
  { name: "Java", monogram: "Java" },
  { name: "JavaScript", monogram: "JS" },
  { name: "TypeScript", image: "/icons/skills/typescript.svg" },
  { name: "Node.js", image: "/icons/skills/nodejs.svg" },
  { name: "Unity", image: "/icons/skills/unity.svg" },
  { name: "React", image: "/icons/skills/react.svg" },
  { name: "Next.js", image: "/icons/skills/nextjs.svg" },
  { name: "FastAPI", image: "/icons/skills/fastapi.svg" },
  { name: "Flask", image: "/icons/skills/flask.svg" },
  { name: "PostgreSQL", image: "/icons/skills/postgresql.svg" },
  { name: "Docker", image: "/icons/skills/docker.svg" },
  { name: "Git", image: "/icons/skills/git.svg" },
]

export const personal = {
  league: "I started playing League in middle school, peaked at Diamond II, and played collegiate League for UCSC’s White team. ADC was my main role.",
  valorant: "My old profile had me at Platinum I in Valorant. Usually on Chamber, Sova, or Cypher, mostly playing with friends.",
  background: "I was born in Sri Lanka, lived in Thailand for a while, and moved to the US in the 2010s. Making my family proud and building things people use keep me motivated.",
  hobbies: "When I’m not coding, you’ll probably catch me catching fish, on the court, or playing games with friends.",
} as const

// Original profile values, preserved as historical stats rather than current claims.
export const personalStats = [
  { id: "league", emoji: "😭", label: "league_peak", value: '"Diamond II"', comment: "// peaked a while ago.." },
  { id: "valorant", emoji: "💀", label: "valorant_rank", value: '"Diamond I"', comment: "// consistent every blue moon" },
  { id: "bench", emoji: "💪", label: "bench_pr", value: "245lb", comment: "// working towards 315 squad.." },
  // { id: "monster", emoji: "☕", label: "monster_intake", value: '"~150 cans"', comment: "// lifetime achievement..?" },
  // { id: "ai", emoji: "🤖", label: "ai_projects", value: "7", comment: "// including this" },
] as const
