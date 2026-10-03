// Single source of truth for portfolio content.

export const profile = {
  name: "Usman Umar",
  role: "Full-Stack Software Engineer",
  focus: "AI Integration & Technical Review",
  email: "codewithuumar@gmail.com",
  handle: "codewithusman",
  location: "Kwara State, Nigeria",
  timezone: "GMT+1 (WAT)",
  availability: "Open to remote roles",
  // Put the PDF in /public and set this (e.g. "/Umar-Usman-Resume.pdf") to show the CV buttons.
  resumeUrl: "" as string,
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/uh-sman" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ùsman-umar-37777223a" },
  { label: "Twitter X", href: "https://x.com/UsmanUm58956112_" },
  { label: "Instagram", href: "https://www.instagram.com/_sturdyman/" },
] as const;

export const skills = [
  { imgSrc: "/images/nextjs.png", label: "Next.js", desc: "React framework" },
  { imgSrc: "/images/react.svg", label: "React", desc: "UI library" },
  { imgSrc: "/images/typescript.png", label: "TypeScript", desc: "Type safety" },
  { imgSrc: "/images/javascript.svg", label: "JavaScript", desc: "Interaction" },
  { imgSrc: "/images/python.svg", label: "Python", desc: "AI & backend" },
  { imgSrc: "/images/nodejs.svg", label: "Node.js", desc: "Web server" },
  { imgSrc: "/images/expressjs.svg", label: "Express", desc: "Node framework" },
  { imgSrc: "/images/fastapi.svg", label: "FastAPI", desc: "Python APIs" },
  { imgSrc: "/images/php.svg", label: "PHP", desc: "Backend APIs" },
  { imgSrc: "/images/graphql.svg", label: "GraphQL", desc: "API layer" },
  { imgSrc: "/images/redux.png", label: "Redux", desc: "State management" },
  { imgSrc: "/images/tailwindcss.svg", label: "Tailwind CSS", desc: "Styling" },
  { imgSrc: "/images/postgresql.png", label: "PostgreSQL", desc: "Relational database" },
  { imgSrc: "/images/mongodb.svg", label: "MongoDB", desc: "Document database" },
  { imgSrc: "/images/supabase.svg", label: "Supabase", desc: "Backend platform" },
  { imgSrc: "/images/prisma-orm.png", label: "Prisma", desc: "Database ORM" },
  { imgSrc: "/images/jest.svg", label: "Jest", desc: "Testing" },
  { imgSrc: "/images/sentry.svg", label: "Sentry", desc: "Error monitoring" },
  { imgSrc: "/images/github.png", label: "Git & GitHub", desc: "Version control" },
  { imgSrc: "/images/figma.svg", label: "Figma", desc: "Design handoff" },
];

// Grouped capabilities from the resume's core skills.
export const capabilities = [
  {
    title: "AI Integration & Evaluation",
    highlight: true,
    items: [
      "AI tutor agents",
      "Conversational AI & support chat",
      "AI product recommendations",
      "Quick-reply systems",
      "Prompt design",
      "Testing AI responses for accuracy & tone",
    ],
  },
  {
    title: "Platform & SaaS",
    items: [
      "Auth & session tracking",
      "Role-based access control",
      "Subscriptions & payments",
      "Onboarding flows",
      "Admin dashboards",
    ],
  },
  {
    title: "APIs & Real-time",
    items: ["REST", "GraphQL", "WebSockets", "React Query", "Zod", "Third-party integrations"],
  },
  {
    title: "Data",
    items: ["SQL", "Schema design", "Indexing", "Migrations & backups", "IPFS & Ceramic storage"],
  },
  {
    title: "Quality Assurance",
    items: ["Unit, integration & E2E tests", "Code review", "Bug triage", "Chrome DevTools debugging"],
  },
  {
    title: "Ways of working",
    items: ["CI/CD", "Jira", "Agile / Scrum", "Remote & async", "Spec & design handoff"],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Berger Paint E-Commerce Platform",
    period: "Mar 2026 — Present",
    meta: "Equity / Profit-share · Remote",
    current: true,
    points: [
      "Building a complete e-commerce platform for a premium paint retailer — marketplace, admin dashboard and public website. The MVP is done and in pre-launch testing.",
      "Built the AI features: product recommendations, an AI customer-service assistant and AI quick-reply support, tested against realistic customer questions before release.",
      "Frontend in Next.js, Tailwind CSS, Mantine, React Query and Zod; contributed to a PHP backend API using WebSockets for real-time notifications, live chat and order tracking.",
    ],
    stack: ["Next.js", "React Query", "Zod", "Mantine", "PHP", "WebSockets", "AI"],
    note: "Also working on two additional client projects under NDA.",
  },
  {
    role: "Full-Stack Developer",
    company: "Converso",
    period: "Feb 2026 — May 2026",
    meta: "Remote",
    points: [
      "Built a full SaaS learning platform where students learn from personal AI assistants, with a separate AI tutor agent for each course.",
      "Added a test after every class so students can check what they have learned and track their progress.",
      "Implemented authentication, session tracking, personalization and subscription billing so the product could run as a paid SaaS.",
    ],
    stack: ["Next.js", "AI Agents", "Supabase", "Clerk", "Billing"],
  },
  {
    role: "Frontend Developer",
    company: "Fellor",
    period: "2024 — 2025",
    meta: "Contract",
    points: [
      "Integrated third-party APIs and shipped end-to-end features with over 95% on-time sprint delivery, cutting manual workflows by 30%.",
      "Reworked React component architecture and Redux state management — 25% fewer critical bugs and 35% faster page loads.",
      "Turned high-fidelity designs into responsive production interfaces alongside product, design and QA.",
    ],
    stack: ["React", "Redux", "REST APIs"],
  },
  {
    role: "Back End Developer",
    company: "My-Web3Pal",
    period: "Jul 2024 — Sep 2024",
    meta: "Remote",
    points: [
      "Designed and maintained REST and GraphQL APIs for web, mobile and third-party integrations, connecting traditional and Web3 services.",
      "Designed schemas in PostgreSQL, MongoDB and Supabase, and integrated decentralized storage (Ceramic, IPFS).",
      "Implemented secure auth, session tracking and admin tools with rate limiting and caching; wrote unit, integration and E2E tests and contributed to CI/CD.",
    ],
    stack: ["GraphQL", "PostgreSQL", "MongoDB", "Supabase", "IPFS"],
  },
  {
    role: "MERN Stack Developer",
    company: "Freelance",
    period: "2023 — 2025",
    meta: "Sole developer",
    points: [
      "Built and maintained full-stack features on MongoDB, Express, React and Node.js, owning delivery from requirements to deployment.",
      "Optimized algorithms, frontend code and MongoDB data models, improving query performance by 20%.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    role: "Full-Stack Developer (MERN)",
    company: "DCAN Real Estate LLC",
    period: "Feb 2023 — Jul 2023",
    meta: "Contract, revenue share · Remote",
    points: [
      "Built a platform that takes a property from listing to sale, rental or investment online, including payments and land-acquisition planning for investors.",
      "Developed the verification flow with paid, secure access to original Certificate of Occupancy documents.",
      "Implemented role-based access for Super Admin, Admin, Landlord and Investor accounts, plus subscription tiers and pay-per-view access — the platform's main revenue stream.",
    ],
    stack: ["MERN", "RBAC", "Payments"],
  },
  {
    role: "Frontend Developer",
    company: "DoWell Research Institute",
    period: "May 2022 — Nov 2022",
    meta: "Contract",
    points: [
      "Built responsive, pixel-perfect interfaces from Figma and Adobe XD designs with accessibility in mind.",
      "Used Next.js SSR, SSG and API routes to improve performance and SEO; integrated Supabase and Prisma/Postgres APIs.",
    ],
    stack: ["Next.js", "Redux", "Supabase", "Prisma"],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Kwara State University, Malete",
  period: "2022 — 2026 (expected)",
};

export const works = [
  {
    imgSrc: "/images/converso_image.png",
    title: "Converso",
    subtitle: "SaaS learning platform with an AI tutor for every course",
    tags: ["AI Agents", "SaaS", "Next.js", "Clerk", "Supabase"],
    projectLink: "https://github.com/uh-sman/Converso-Saas-App",
    liveLink: "https://converso-saas-app-9r2p.vercel.app/",
  },
  {
    imgSrc: "/images/voice-ai-agent.png",
    title: "Voice AI Agent",
    subtitle: "Conversational voice assistant",
    tags: ["AI", "LLM", "Voice"],
    projectLink: "https://github.com/uh-sman/ai-voice-app",
    liveLink: "https://ai-voice-app-tau.vercel.app/",
  },
  {
    imgSrc: "/images/carepulse-image.png",
    title: "CarePulse",
    subtitle: "Healthcare patient management",
    tags: ["Healthcare", "Full-stack", "Appwrite"],
    projectLink: "https://github.com/uh-sman/carepulse",
    liveLink: "https://carepulse-ten-gules.vercel.app/",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Musify",
    subtitle: "Full-stack music streaming app",
    tags: ["API", "MVC"],
    projectLink: "https://musify-5al0.onrender.com/",
    liveLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "PixStock",
    subtitle: "Free stock photo platform",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
    liveLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/youtubeclone-image.png",
    title: "YouTube Clone",
    subtitle: "Video streaming interface",
    tags: ["Entertainment", "Clone"],
    projectLink: "https://github.com/uh-sman/YoutubeClone",
    liveLink: "https://youtube-clone-u.netlify.app/",
  },
  {
    imgSrc: "/images/tesla-clone-img.png",
    title: "Tesla Clone",
    subtitle: "Responsive landing experience",
    tags: ["Responsive", "Clone"],
    projectLink: "https://github.com/uh-sman/Tesla-clone-App.git",
    liveLink: "https://incandescent-piroshki-0d87d0.netlify.app/#",
  },
];

export const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: "/images/people-2.jpg",
    company: "NexaWave",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    imgSrc: "/images/people-3.jpg",
    company: "CodeCraft",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Noah Williams",
    imgSrc: "/images/people-4.jpg",
    company: "BrightWeb",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: "/images/people-5.jpg",
    company: "TechMosaic",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
  },
];
