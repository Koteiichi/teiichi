import { UserProfile, Project, Experience, StrengthCard } from "./types";

export const initialProfile: UserProfile = {
  name: "Ramy Mohamed El Amine Baiche",
  nativeName: "رامي محمد الأمين بعيش",
  nativeLanguage: "العربية",
  title: "Product Designer",
  bio: "Product Designer specializing in 0→1 product design, design systems, and crafting intuitive digital experiences. Based in Algeria, working globally.",
  location: "Algiers, Algeria",
  timezone: "Africa/Algiers",
  email: "hello@baicheramy.com",
  resumeUrl: "#",
  githubUrl: "https://github.com/baicheramy",
  linkedinUrl: "https://linkedin.com",
  twitterUrl: "https://twitter.com",
  accentColor: "#D4AF37", // Elegant gold
  theme: "dark",
  aboutParagraphs: [
    "I am a digital product designer with a deep love for systems, code, and high-fidelity aesthetics. My journey started at the junction of design and engineering, where I realized layout shouldn't just look pretty — it must behave logically.",
    "Currently, I focus on building scalable design systems, shipping SaaS platforms, and crafting interactive applications that balance rigorous information hierarchy with playful motion. I believe a great experience lies in micro-details: typography tracking, spring animations, and spatial consistency.",
    "Outside of pushing pixels, you can find me reading architectural design theories, exploring minimal art, or compiling front-end micro-interactions in React and Vite."
  ]
};

export const initialProjects: Project[] = [
  {
    id: "project-1",
    title: "Emplorium",
    subtitle: "Hiring Command Center",
    category: "Fintech & HRTech",
    year: "2024",
    tags: ["B2B SaaS", "Design System", "0-1 Product", "Command Bar"],
    description: "Designed an all-in-one talent acquisition command center, streamlining candidate assessment, pipeline orchestration, and real-time interviewer notes.",
    visualType: "dashboard",
    visualColor: "#8B5CF6", // Purple accent
    projectUrl: "#"
  },
  {
    id: "project-2",
    title: "EleeN",
    subtitle: "Data-Inspired Smart Living",
    category: "IoT & Smart Tech",
    year: "2023",
    tags: ["Consumer App", "Mobile & Web", "Data Visualization", "Telemetry"],
    description: "Structured the dashboard and interaction architecture for smart indoor sensor monitors, transforming environmental micro-telemetry into intuitive, daily home diagnostics.",
    visualType: "data-flow",
    visualColor: "#10B981", // Emerald accent
    projectUrl: "#"
  },
  {
    id: "project-3",
    title: "iewa",
    subtitle: "Context-Aware Knowledge Base",
    category: "AI & Productivity",
    year: "2022",
    tags: ["Knowledge Graph", "Interaction Design", "Canvas UI", "Connected Nodes"],
    description: "An intuitive collaborative document hub with nested context layers, allowing researchers to visualize, cluster, and traverse rich knowledge graphs effortlessly.",
    visualType: "mesh",
    visualColor: "#F59E0B", // Amber accent
    projectUrl: "#"
  }
];

export const initialExperiences: Experience[] = [
  {
    id: "exp-1",
    company: "Emplorium HQ",
    role: "Lead Product Designer",
    period: "2023 - Present",
    location: "Remote / Dubai",
    description: "Leading the end-to-end design strategy, product architecture, and drafting the modular corporate design systems from pitch decks to production-ready React layouts."
  },
  {
    id: "exp-2",
    company: "Algiers Design Bureau",
    role: "Senior Interaction Designer",
    period: "2021 - 2023",
    location: "Algiers, Algeria",
    description: "Spearheaded large-scale UI/UX overhaul of municipal and telecommunication systems, introducing fluid gesture-based animations and responsive widgets."
  },
  {
    id: "exp-3",
    company: "Freelance Consultancy",
    role: "Independent Digital Craftsman",
    period: "2019 - 2021",
    location: "Global",
    description: "Partnered with early-stage founders to map SaaS user journeys, design interactive pitch prototypes, and write clean tailwind css code for production landing pages."
  }
];

export const initialStrengths: StrengthCard[] = [
  {
    id: "strength-1",
    title: "From zero to one",
    subtitle: "Embracing radical product ambiguity",
    description: "Structuring logical directions and workflows where none exist. I specialize in synthesising complex, loosely-defined parameters into clear roadmap flows and highly interactive UI architectures.",
    iconName: "Sparkles"
  },
  {
    id: "strength-2",
    title: "Systems over screens",
    subtitle: "Thinking in languages, not mockups",
    description: "Designing extensive typography scales, responsive layout components, and token variables. I build unified languages that scale across web, mobile, and desktop so engineering teams ship features in record time.",
    iconName: "Layers"
  },
  {
    id: "strength-3",
    title: "Strategy meets craft",
    subtitle: "Meticulous design, business-aware",
    description: "Synthesizing product performance with pure visual refinement. I align technical bounds, user acquisition objectives, and flawless aesthetic details to ensure the final product hits business goals.",
    iconName: "Target"
  },
  {
    id: "strength-4",
    title: "Design speaks code",
    subtitle: "Narrowing the handoff gap entirely",
    description: "Bridging canvas layouts with browser capabilities. My high familiarity with CSS coordinates, React render cycles, and TypeScript structures allows me to commit directly to frontend repositories.",
    iconName: "Code"
  }
];
