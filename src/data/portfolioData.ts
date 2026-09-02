import { ProfileData, SkillItem, ProjectItem, CapabilityItem, TimelineItem, DeveloperStat } from '../types';

export const DEFAULT_PROFILE: ProfileData = {
  name: "Abdullah Al Mohit",
  nameBn: "আব্দুল্লাহ আল মোহিত",
  titles: [
    "Web Developer",
    "Coder",
    "Young Software Developer",
    "Problem Solver",
    "Technology Enthusiast"
  ],
  titlesBn: [
    "ওয়েব ডেভেলপার",
    "কোডার",
    "তরুণ সফটওয়্যার ডেভেলপার",
    "প্রবলেম সলভার",
    "প্রযুক্তিপ্রেমী"
  ],
  school: "Begum Rabeya Ahmed High School",
  schoolBn: "বেগম রাবেয়া আহমেদ হাই স্কুল",
  classGrade: "Class 8",
  classGradeBn: "৮ম শ্রেণি",
  email: "mouhithgaming@gmail.com",
  phone: "+8801819490588",
  bio: "I am a dedicated student at Begum Rabeya Ahmed High School (Class 8) deeply driven by programming, web development, and digital technology. I enjoy building responsive, functional websites and interactive digital tools using HTML, CSS, JavaScript, and modern developer technologies while constantly learning and refining my skills.",
  bioBn: "আমি বেগম রাবেয়া আহমেদ হাই স্কুলের ৮ম শ্রেণির একজন একনিষ্ঠ শিক্ষার্থী। প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট এবং ডিজিটাল প্রযুক্তির প্রতি আমার রয়েছে গভীর আগ্রহ। এইচটিএমএল, সিএসএস, জাভাস্ক্রিপ্ট এবং আধুনিক প্রযুক্তির সাহায্যে রেসপনসিভ ও ব্যবহারবান্ধব ওয়েবসাইট তৈরি করতে আমি ভালোবাসি এবং প্রতিনিয়ত নতুন দক্ষতা অর্জন করছি।",
  mission: "My ambition is to grow into a highly skilled professional software developer, mastering modern engineering to build real-world digital products that create genuine value.",
  missionBn: "আমার দীর্ঘমেয়াদী স্বপ্ন হলো একজন উচ্চদক্ষ পেশাদার সফটওয়্যার ইঞ্জিনিয়ার হওয়া, আধুনিক প্রযুক্তিতে দক্ষতা অর্জন করা এবং বাস্তব জীবনের উপযোগী কার্যকর ডিজিটাল পণ্য তৈরি করা।",
  avatarUrl: "/profile.jpg",
  location: "Bangladesh",
  locationBn: "বাংলাদেশ",
  statusText: "Active Student & Aspiring Software Engineer",
  statusTextBn: "সক্রিয় শিক্ষার্থী ও ভবিষ্যৎ সফটওয়্যার ইঞ্জিনিয়ার",
  githubUrl: "https://github.com"
};

export const DEFAULT_SKILLS: SkillItem[] = [
  {
    id: "html",
    name: "HTML",
    category: "frontend",
    icon: "FileCode2",
    badge: "Core Foundation",
    description: "Semantic HTML5 architecture, SEO tags, accessible web structures, and clean markup hierarchy.",
    color: "#f97316"
  },
  {
    id: "css",
    name: "CSS",
    category: "frontend",
    icon: "Palette",
    badge: "Styling & Layout",
    description: "Modern CSS3 styling, Flexbox, CSS Grid, custom properties, animations, and transitions.",
    color: "#3b82f6"
  },
  {
    id: "js",
    name: "JavaScript",
    category: "frontend",
    icon: "Cpu",
    badge: "Interactive Logic",
    description: "ES6+ syntax, DOM manipulation, asynchronous programming, event handling, and modern functional JS.",
    color: "#eab308"
  },
  {
    id: "responsive",
    name: "Responsive Web Design",
    category: "frontend",
    icon: "Smartphone",
    badge: "Cross-Device UX",
    description: "Fluid layouts, mobile-first responsive design, media queries, and touch-optimized interfaces.",
    color: "#06b6d4"
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    category: "frontend",
    icon: "Layout",
    badge: "Interface Craft",
    description: "Clean typography pairing, visual hierarchy, aesthetic balance, spacing math, and intuitive ergonomics.",
    color: "#a855f7"
  },
  {
    id: "webdev",
    name: "Web Development",
    category: "frontend",
    icon: "Globe",
    badge: "Full Web Lifecycle",
    description: "End-to-end web construction from concept wireframes to responsive deployment and optimization.",
    color: "#10b981"
  },
  {
    id: "git",
    name: "Git / GitHub",
    category: "tools",
    icon: "GitBranch",
    badge: "Version Control",
    description: "Git commands, branch management, repository collaboration, version commits, and code sharing on GitHub.",
    color: "#f43f5e"
  },
  {
    id: "api",
    name: "API Integration",
    category: "tools",
    icon: "Zap",
    badge: "Dynamic Data",
    description: "Consuming REST APIs with fetch and async/await, parsing JSON payloads, and dynamic UI data updates.",
    color: "#14b8a6"
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "tools",
    icon: "Flame",
    badge: "Cloud Services",
    description: "Cloud Firestore data handling, Firebase Authentication, and real-time database basics.",
    color: "#f59e0b"
  },
  {
    id: "python",
    name: "Python",
    category: "logic",
    icon: "Terminal",
    badge: "General Programming",
    description: "Python fundamentals, logic structures, algorithms, functions, and algorithmic problem solving.",
    color: "#6366f1"
  },
  {
    id: "problemsolving",
    name: "Problem Solving",
    category: "logic",
    icon: "Lightbulb",
    badge: "Analytical Mindset",
    description: "Breaking complex challenges into systematic steps, debugging code errors, and iterative improvement.",
    color: "#ec4899"
  }
];

export const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    codeName: "EDIT_PROJECT_01",
    title: "Interactive School Information & Student Portal",
    description: "A clean, modern, and accessible digital portal designed for school students. Features responsive course notices, student schedules, announcements, and an interactive grade calculator.",
    category: "Web Application",
    technologies: ["HTML5", "Modern CSS", "JavaScript", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    accentColor: "#06b6d4",
    features: ["Responsive Mobile Layout", "Interactive Event Calendar", "Dynamic Grade Calculator", "Local State Persistence"]
  },
  {
    id: "proj-2",
    codeName: "EDIT_PROJECT_02",
    title: "Developer Utility Playground & Code Canvas",
    description: "A lightweight, browser-based developer utility tool for testing CSS animations, generating color palettes, and previewing responsive layouts in real time.",
    category: "Developer Tools",
    technologies: ["JavaScript (ES6+)", "CSS Grid", "Flexbox", "Web APIs"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    accentColor: "#6366f1",
    features: ["Real-time Code Sandbox", "CSS Gradient Generator", "One-Click Syntax Copy", "Zero Dependencies"]
  },
  {
    id: "proj-3",
    codeName: "EDIT_PROJECT_03",
    title: "Dynamic Weather & Location Explorer",
    description: "An API-integrated web dashboard displaying real-time weather, forecast trends, atmospheric conditions, and city search powered by live REST weather endpoints.",
    category: "API Integration",
    technologies: ["REST API", "Fetch / Async JS", "CSS Animations", "JSON"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    accentColor: "#3b82f6",
    features: ["Asynchronous API Fetching", "Dynamic Weather Graphics", "Error State Handling", "Fast Instant Search"]
  },
  {
    id: "proj-4",
    codeName: "EDIT_PROJECT_04",
    title: "Cloud Task Vault & Note Hub",
    description: "A secure, organized digital productivity hub with real-time cloud sync, task prioritization tags, searchable notes, and status categorizations.",
    category: "Firebase Application",
    technologies: ["Firebase", "Firestore", "JavaScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    accentColor: "#f59e0b",
    features: ["Real-time Firestore Sync", "Category & Priority Tags", "Responsive Touch Controls", "Instant Search Filter"]
  },
  {
    id: "proj-5",
    codeName: "EDIT_PROJECT_05",
    title: "Python Algorithm & Logic Solver Suite",
    description: "A collection of algorithmic challenges, mathematical puzzles, and data parsing routines built to strengthen computational thinking and data structures.",
    category: "Programming & Logic",
    technologies: ["Python 3", "Data Structures", "Algorithms", "CLI Tools"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    accentColor: "#8b5cf6",
    features: ["Array & String Algorithms", "Mathematical Sequences", "Interactive CLI Menu", "Optimized Time Complexity"]
  },
  {
    id: "proj-6",
    codeName: "EDIT_PROJECT_06",
    title: "Futuristic Creative Developer Portfolio",
    description: "A cinematic, ultra-polished developer identity platform featuring high-contrast typography, interactive 3D card tilts, custom cursor physics, and full responsive design.",
    category: "Modern Website",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    accentColor: "#10b981",
    features: ["Cinematic Loading Sequence", "Fluid 3D Tilt Cards", "Light/Dark Developer Theme", "Editable State Engine"]
  }
];

export const DEFAULT_CAPABILITIES: CapabilityItem[] = [
  {
    id: "cap-websites",
    title: "Websites",
    subtitle: "Modern Responsive Websites",
    description: "Crafting modern, fast, mobile-first responsive websites with semantic HTML, fluid CSS layouts, and elegant aesthetics that adapt seamlessly to any screen size.",
    technologies: ["HTML5", "CSS3", "Flexbox / Grid", "Responsive Design"],
    icon: "Globe"
  },
  {
    id: "cap-webapps",
    title: "Web Applications",
    subtitle: "Interactive Web Applications",
    description: "Building dynamic, interactive client-side web applications with rich DOM interactions, state handling, instant event feedbacks, and clean UX flows.",
    technologies: ["JavaScript (ES6+)", "Single Page Apps", "State Management", "DOM Engine"],
    icon: "LayoutGrid"
  },
  {
    id: "cap-api",
    title: "API Applications",
    subtitle: "API-Integrated Applications",
    description: "Connecting web interfaces with external RESTful endpoints to fetch, format, and render live dynamic data with robust error handling and loading indicators.",
    technologies: ["REST APIs", "Fetch API", "Async / Await", "JSON Payloads"],
    icon: "Zap"
  },
  {
    id: "cap-firebase",
    title: "Firebase Applications",
    subtitle: "Firebase-Powered Applications",
    description: "Developing web apps integrated with Google Firebase services, including real-time Cloud Firestore databases, security rules, and user auth.",
    technologies: ["Firebase SDK", "Cloud Firestore", "Authentication", "Cloud Sync"],
    icon: "Flame"
  },
  {
    id: "cap-uiux",
    title: "UI/UX Design",
    subtitle: "Modern Interface Design",
    description: "Designing user-centric layouts prioritizing typographic balance, mathematical spacing, contrast accessibility, and subtle motion feedback.",
    technologies: ["Design Systems", "Typography Math", "Color Psychology", "Ergonomics"],
    icon: "Sparkles"
  },
  {
    id: "cap-tools",
    title: "Developer Tools",
    subtitle: "Custom Digital Tools & Utilities",
    description: "Constructing custom utilities, playgrounds, formatters, and productivity scripts that solve specific developer or student problems efficiently.",
    technologies: ["Node.js / Scripts", "Git Workflows", "Automation", "Utilities"],
    icon: "Wrench"
  }
];

export const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    id: "step-1",
    stage: "01",
    title: "Student",
    subtitle: "Begum Rabeya Ahmed High School (Class 8)",
    description: "Nurturing an intense curiosity for computers, technology, and discovering how modern software and websites function behind the screen.",
    status: "completed",
    icon: "GraduationCap"
  },
  {
    id: "step-2",
    stage: "02",
    title: "Learning Coding",
    subtitle: "Foundation of Programming",
    description: "Starting the journey with computer logic, syntax basics, HTML tag structures, and understanding how code translates into visual web elements.",
    status: "completed",
    icon: "BookOpen"
  },
  {
    id: "step-3",
    stage: "03",
    title: "Building Websites",
    subtitle: "HTML, CSS & Modern Layouts",
    description: "Advancing to real responsive web pages, mastering CSS Flexbox, Grid, color harmony, typography pairing, and mobile responsiveness.",
    status: "completed",
    icon: "Layers"
  },
  {
    id: "step-4",
    stage: "04",
    title: "Creating Projects",
    subtitle: "Interactive JavaScript Apps",
    description: "Bringing web interfaces to life with dynamic JavaScript logic, DOM manipulation, interactive utilities, and local data persistence.",
    status: "active",
    icon: "Rocket"
  },
  {
    id: "step-5",
    stage: "05",
    title: "Improving Skills",
    subtitle: "APIs, Firebase, Python & Git",
    description: "Actively expanding technical horizons into version control with Git/GitHub, cloud databases with Firebase, Python programming, and REST APIs.",
    status: "active",
    icon: "TrendingUp"
  },
  {
    id: "step-6",
    stage: "06",
    title: "Future Professional Developer",
    subtitle: "Building Real-World Digital Products",
    description: "Working consistently to become a world-class software engineer capable of architecting impactful, high-scale digital solutions.",
    status: "future",
    icon: "Award"
  }
];

export const DEFAULT_STATS: DeveloperStat[] = [
  {
    id: "stat-1",
    label: "Core Technologies",
    value: "10+",
    description: "HTML, CSS, JS, Git, APIs, Python & more",
    icon: "Code2"
  },
  {
    id: "stat-2",
    label: "Current Academic Stage",
    value: "Class 8",
    description: "Begum Rabeya Ahmed High School",
    icon: "School"
  },
  {
    id: "stat-3",
    label: "Learning Milestones",
    value: "100%",
    description: "Dedicated to daily coding & practice",
    icon: "Target"
  },
  {
    id: "stat-4",
    label: "Built Projects & Blueprints",
    value: "6+",
    description: "Fully editable modular showcase",
    icon: "FolderGit2"
  }
];

const STORAGE_KEYS = {
  PROFILE: 'abdullah_portfolio_profile_v2',
  SKILLS: 'abdullah_portfolio_skills_v2',
  PROJECTS: 'abdullah_portfolio_projects_v2',
  STATS: 'abdullah_portfolio_stats_v2',
  THEME: 'abdullah_portfolio_theme_v1',
  LANG: 'abdullah_portfolio_lang_v1'
};

export function loadLanguage(): 'en' | 'bn' {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    if (saved === 'bn' || saved === 'en') return saved;
  } catch (e) {
    // fallback
  }
  return 'bn'; // Default to Bangla or Bengali as requested by user!
}

export function saveLanguage(lang: 'en' | 'bn') {
  try {
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
  } catch (e) {
    // ignore
  }
}

export function loadProfileData(): ProfileData {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Ensure latest beach portrait is used if old avatar is referenced
      if (!parsed.avatarUrl || parsed.avatarUrl.includes('picsum') || parsed.avatarUrl === '/profile.jpg') {
        parsed.avatarUrl = '/profile.jpg';
      }
      return { ...DEFAULT_PROFILE, ...parsed };
    }
  } catch (e) {
    console.error("Failed to load profile from storage", e);
  }
  return DEFAULT_PROFILE;
}

export function saveProfileData(data: ProfileData) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save profile to storage", e);
  }
}

export function loadSkillsData(): SkillItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SKILLS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load skills from storage", e);
  }
  return DEFAULT_SKILLS;
}

export function saveSkillsData(data: SkillItem[]) {
  try {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save skills to storage", e);
  }
}

export function loadProjectsData(): ProjectItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load projects from storage", e);
  }
  return DEFAULT_PROJECTS;
}

export function saveProjectsData(data: ProjectItem[]) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save projects to storage", e);
  }
}

export function resetAllToDefaults() {
  localStorage.removeItem(STORAGE_KEYS.PROFILE);
  localStorage.removeItem(STORAGE_KEYS.SKILLS);
  localStorage.removeItem(STORAGE_KEYS.PROJECTS);
  localStorage.removeItem(STORAGE_KEYS.STATS);
}
