import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    capabilities: string;
    journey: string;
    contact: string;
    editProfile: string;
    packageApp: string;
    tagline: string;
    languageName: string;
  };
  hero: {
    activeBadge: string;
    classGrade: string;
    iam: string;
    studentAt: string;
    viewWork: string;
    aboutMe: string;
    contactMe: string;
    copied: string;
    copyEmail: string;
    callPhone: string;
    cardTag: string;
    cardBadge: string;
    editBtn: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    edit: string;
    values: string[];
    missionTitle: string;
    missionBadge: string;
    missionDesc: string;
    academicTitle: string;
    institution: string;
    currentGrade: string;
    location: string;
    status: string;
    statusValue: string;
    metricsTitle: string;
    metricsSubtitle: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    edit: string;
    all: string;
    frontend: string;
    tools: string;
    logic: string;
    verifiedNote: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    edit: string;
    all: string;
    inspectCode: string;
    liveDemo: string;
    githubRepo: string;
    keyFeatures: string;
    codeName: string;
    close: string;
  };
  capabilities: {
    badge: string;
    title: string;
    subtitle: string;
    ctaHeading: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    completed: string;
    inProgress: string;
    futureVision: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directTitle: string;
    directSubtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    schoolLabel: string;
    fastResponse: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successMsg: string;
    privacyNote: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    legal: string;
    copyright: string;
    schoolMention: string;
    backToTop: string;
  };
  packaging: {
    title: string;
    subtitle: string;
    androidTab: string;
    windowsTab: string;
    close: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      capabilities: "What I Build",
      journey: "Journey",
      contact: "Contact",
      editProfile: "Edit Profile",
      packageApp: "Package App",
      tagline: "Student Developer • Class 8",
      languageName: "বাংলা"
    },
    hero: {
      activeBadge: "Active Student Developer",
      classGrade: "Class 8",
      iam: "I am a",
      studentAt: "Student at",
      viewWork: "View My Work",
      aboutMe: "About Me",
      contactMe: "Contact Me",
      copied: "Copied!",
      copyEmail: "Click to copy email",
      callPhone: "Click to call",
      cardTag: "Abdullah Al Mohit • Official Portrait",
      cardBadge: "Class 8 Developer",
      editBtn: "Edit"
    },
    about: {
      badge: "Developer Background",
      title: "About Abdullah Al Mohit",
      subtitle: "Student • Begum Rabeya Ahmed High School • Class 8 • Dedicated to continuous programming mastery",
      storyTitle: "Student & Tech Enthusiast",
      edit: "Edit",
      values: [
        "100% Genuine, Zero Fake Claims",
        "HTML5 & Modern CSS3 Layouts",
        "Vanilla JavaScript & Modern ES6+",
        "Responsive Mobile-First Interfaces",
        "Daily Coding & Algorithmic Practice",
        "Long-term Software Engineering Goal"
      ],
      missionTitle: "The Long-Term Mission",
      missionBadge: "Vision & Aspiration",
      missionDesc: "Aiming to build real-world, production-ready software solutions, contribute meaningfully to open-source developer communities, and solve practical challenges through code.",
      academicTitle: "Academic Anchor",
      institution: "Institution",
      currentGrade: "Current Grade",
      location: "Location",
      status: "Status",
      statusValue: "Active Learner & Builder",
      metricsTitle: "Developer Journey Metrics (Real & Authentic)",
      metricsSubtitle: "*All figures represent verifiable learning milestones"
    },
    skills: {
      badge: "Technical Foundation",
      title: "Technical Skills & Competencies",
      subtitle: "Clean foundation in web fundamentals, modern developer tooling, and structured programmatic thinking.",
      edit: "Edit Skills",
      all: "All Skills",
      frontend: "Frontend Core",
      tools: "Tools & Cloud",
      logic: "Logic & Problem Solving",
      verifiedNote: "Skill ratings reflect hands-on project implementations and daily coding problem solving."
    },
    projects: {
      badge: "Built With Purpose",
      title: "Featured Projects & Implementations",
      subtitle: "Fully responsive, clean-code web applications built to showcase real functionality and problem solving.",
      edit: "Edit Projects",
      all: "All Projects",
      inspectCode: "Inspect Architecture",
      liveDemo: "Live Demo",
      githubRepo: "GitHub Source",
      keyFeatures: "Key Architecture & Features",
      codeName: "Internal Spec",
      close: "Close"
    },
    capabilities: {
      badge: "Capabilities & Offerings",
      title: "What I Can Build & Deliver",
      subtitle: "Modern, high-performance, and responsive solutions crafted with discipline and care.",
      ctaHeading: "Need a dedicated, passionate developer for your next web project?",
      ctaDesc: "Let's collaborate on building clean, fast, and responsive digital experiences with modern web standards.",
      ctaBtn: "Start A Conversation"
    },
    journey: {
      badge: "Progression Roadmap",
      title: "Interactive Developer Journey",
      subtitle: "The deliberate progression from classroom student to accomplished modern software creator.",
      completed: "Completed",
      inProgress: "In Progress",
      futureVision: "Future Vision"
    },
    contact: {
      badge: "Direct Communication",
      title: "Get In Touch",
      subtitle: "Have a project, opportunity, or feedback? I welcome thoughtful inquiries.",
      directTitle: "Direct Contact Information",
      directSubtitle: "Reach out directly via email, phone call, or messaging.",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      locationLabel: "Location",
      schoolLabel: "School",
      fastResponse: "Quick Response Guaranteed • Always Open to Learning Opportunities",
      formTitle: "Send a Message",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "your.email@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What would you like to discuss?",
      messageLabel: "Your Message",
      messagePlaceholder: "Write your message, project idea or question here...",
      sendBtn: "Send Message",
      sendingBtn: "Sending Message...",
      successMsg: "Thank you! Your message has been received. I will reply to you as soon as possible.",
      privacyNote: "Your contact information is protected and will only be used to reply to your inquiry."
    },
    footer: {
      desc: "Young software developer and student at Begum Rabeya Ahmed High School (Class 8). Focused on mastering web technologies, computer programming, and building real digital solutions.",
      quickLinks: "Navigation",
      legal: "Developer Portfolio • Built with React, TypeScript & Tailwind CSS",
      copyright: "All rights reserved. Built with passion and integrity.",
      schoolMention: "Begum Rabeya Ahmed High School • Class 8",
      backToTop: "Back to top"
    },
    packaging: {
      title: "Multi-Platform Packaging Hub",
      subtitle: "Generate native Android APK and Windows Desktop executable builds from this portfolio application.",
      androidTab: "Android APK (Capacitor)",
      windowsTab: "Windows EXE (Electron)",
      close: "Close"
    }
  },
  bn: {
    nav: {
      home: "হোম",
      about: "পরিচিতি",
      skills: "স্কিলস",
      projects: "প্রজেক্ট",
      capabilities: "সেবাসমূহ",
      journey: "পথচলা",
      contact: "যোগাযোগ",
      editProfile: "প্রোফাইল এডিট",
      packageApp: "প্যাকেজ অ্যাপ",
      tagline: "শিক্ষার্থী ডেভেলপার • ৮ম শ্রেণি",
      languageName: "English"
    },
    hero: {
      activeBadge: "সক্রিয় শিক্ষার্থী ডেভেলপার",
      classGrade: "৮ম শ্রেণি",
      iam: "আমি একজন",
      studentAt: "শিক্ষার্থী -",
      viewWork: "আমার কাজ দেখুন",
      aboutMe: "আমার পরিচিতি",
      contactMe: "যোগাযোগ করুন",
      copied: "কপি হয়েছে!",
      copyEmail: "ইমেইল কপি করতে ক্লিক করুন",
      callPhone: "কল করতে ক্লিক করুন",
      cardTag: "আব্দুল্লাহ আল মোহিত • অফিসিয়াল পোর্ট্রেট",
      cardBadge: "৮ম শ্রেণির ডেভেলপার",
      editBtn: "এডিট"
    },
    about: {
      badge: "ডেভেলপার পরিচিতি",
      title: "আব্দুল্লাহ আল মোহিত সম্পর্কে",
      subtitle: "শিক্ষার্থী • বেগম রাবেয়া আহমেদ হাই স্কুল • ৮ম শ্রেণি • প্রোগ্রামিং দক্ষতা অর্জনে একনিষ্ঠ",
      storyTitle: "শিক্ষার্থী ও প্রযুক্তিপ্রেমী",
      edit: "এডিট",
      values: [
        "১০০% বাস্তব, কোনো অসত্য দাবি নেই",
        "এইচটিএমএল৫ ও আধুনিক সিএসএস৩ লেআউট",
        "ভ্যানিলা জাভাস্ক্রিপ্ট ও আধুনিক ইএস৬+",
        "রেসপনসিভ মোবাইল-ফার্স্ট ইন্টারফেস",
        "দৈনিক কোডিং ও অ্যালগরিদম অনুশীলন",
        "দীর্ঘমেয়াদী সফটওয়্যার ইঞ্জিনিয়ারিং লক্ষ্য"
      ],
      missionTitle: "দীর্ঘমেয়াদী লক্ষ্য",
      missionBadge: "দূরদর্শিতা ও উচ্চাশা",
      missionDesc: "বাস্তবধর্মী ও মানসম্পন্ন সফটওয়্যার তৈরি করা, ওপেন সোর্স ডেভেলপার কমিউনিটিতে অবদান রাখা এবং কোডিংয়ের মাধ্যমে বাস্তব জীবনের সমস্যা সমাধান করাই আমার লক্ষ্য।",
      academicTitle: "শিক্ষা প্রতিষ্ঠান",
      institution: "প্রতিষ্ঠান",
      currentGrade: "বর্তমান শ্রেণি",
      location: "অবস্থান",
      status: "অবস্থা",
      statusValue: "সক্রিয় শিক্ষার্থী ও ক্রিয়েটর",
      metricsTitle: "ডেভেলপার পথচলার মেট্রিকস (বাস্তব ও প্রামাণ্য)",
      metricsSubtitle: "*প্রতিটি তথ্য যাচাইযোগ্য শেখার অর্জন প্রকাশ করে"
    },
    skills: {
      badge: "কারিগরি দক্ষতা",
      title: "টেকনিক্যাল স্কিলস ও দক্ষতা",
      subtitle: "ওয়েবের মূল ভিত্তি, আধুনিক ডেভেলপার টুলস এবং সুনির্দিষ্ট প্রোগ্রামিং চিন্তাভাবনার সমন্বয়।",
      edit: "স্কিলস এডিট",
      all: "সবগুলো স্কিল",
      frontend: "ফ্রন্টএন্ড কোর",
      tools: "টুলস ও ক্লাউড",
      logic: "লজিক ও প্রবলেম সলভিং",
      verifiedNote: "স্কিলের মান বাস্তব প্রজেক্ট বাস্তবায়ন এবং প্রতিদিনের সমস্যা সমাধানের অভিজ্ঞতার ওপর ভিত্তি করে নির্ধারিত।"
    },
    projects: {
      badge: "উদ্দেশ্যমূলক প্রজেক্ট",
      title: "নির্বাচিত প্রজেক্ট ও বাস্তবায়ন",
      subtitle: "বাস্তব কার্যক্ষমতা এবং সমস্যা সমাধানের দক্ষতা প্রদর্শনের জন্য নির্মিত রেসপনসিভ ও পরিচ্ছন্ন ওয়েব অ্যাপ্লিকেশন।",
      edit: "প্রজেক্ট এডিট",
      all: "সব প্রজেক্ট",
      inspectCode: "আর্কিটেকচার দেখুন",
      liveDemo: "লাইভ ডেমো",
      githubRepo: "গিটহাব সোর্স",
      keyFeatures: "মূল বৈশিষ্ট্য ও স্থাপত্য",
      codeName: "অভ্যন্তরীণ স্পেক",
      close: "বন্ধ করুন"
    },
    capabilities: {
      badge: "দক্ষতা ও সেবা",
      title: "আমি কী কী তৈরি করতে পারি",
      subtitle: "নিয়মানুবর্তিতা ও যত্নের সাথে তৈরি করা আধুনিক, উচ্চগতির এবং ব্যবহারবান্ধব ওয়েব সল্যুশন।",
      ctaHeading: "আপনার ওয়েব প্রজেক্টের জন্য একজন একনিষ্ঠ ডেভেলপার প্রয়োজন?",
      ctaDesc: "চলুন আধুনিক ওয়েব স্ট্যান্ডার্ড বজায় রেখে দ্রুত, দৃষ্টিনন্দন এবং রেসপনসিভ ডিজিটাল অভিজ্ঞতা তৈরি করি।",
      ctaBtn: "কথা শুরু করুন"
    },
    journey: {
      badge: "অগ্রগতির রোডম্যাপ",
      title: "ইন্টারেক্টিভ ডেভেলপার পথচলা",
      subtitle: "বিদ্যালয়ের শিক্ষার্থী থেকে একজন দক্ষ আধুনিক সফটওয়্যার নির্মাতা হয়ে ওঠার ধারাবাহিক পথচলা।",
      completed: "সম্পন্ন",
      inProgress: "চলমান",
      futureVision: "ভবিষ্যত রূপকল্প"
    },
    contact: {
      badge: "সরাসরি যোগাযোগ",
      title: "যোগাযোগ করুন",
      subtitle: "কোনো প্রজেক্ট, কাজের সুযোগ বা পরামর্শ থাকলে নির্দ্বিধায় যোগাযোগ করতে পারেন।",
      directTitle: "সরাসরি যোগাযোগের ঠিকানা",
      directSubtitle: "ইমেইল, ফোন কল বা বার্তার মাধ্যমে সরাসরি যোগাযোগ করতে পারেন।",
      emailLabel: "ইমেইল অ্যাড্রেস",
      phoneLabel: "ফোন নম্বর",
      locationLabel: "অবস্থান",
      schoolLabel: "স্কুল",
      fastResponse: "দ্রুত উত্তরের নিশ্চয়তা • নতুন কিছু শেখার সুযোগে সর্বদা আগ্রহী",
      formTitle: "বার্তা পাঠান",
      nameLabel: "আপনার নাম",
      namePlaceholder: "আপনার পূর্ণ নাম লিখুন",
      emailPlaceholder: "your.email@example.com",
      subjectLabel: "বিষয়",
      subjectPlaceholder: "কী বিষয়ে আলোচনা করতে চান?",
      messageLabel: "আপনার বার্তা",
      messagePlaceholder: "আপনার বার্তা, প্রজেক্ট আইডিয়া বা প্রশ্ন এখানে লিখুন...",
      sendBtn: "বার্তা পাঠান",
      sendingBtn: "বার্তা পাঠানো হচ্ছে...",
      successMsg: "ধন্যবাদ! আপনার বার্তাটি পৌঁছেছে। আমি যত দ্রুত সম্ভব উত্তর দেব।",
      privacyNote: "আপনার তথ্যের গোপনীয়তা সুরক্ষিত থাকবে এবং শুধুমাত্র যোগাযোগের উত্তর দিতে ব্যবহৃত হবে।"
    },
    footer: {
      desc: "তরুণ সফটওয়্যার ডেভেলপার এবং বেগম রাবেয়া আহমেদ হাই স্কুলের ৮ম শ্রেণির শিক্ষার্থী। ওয়েব টেকনোলজি, কম্পিউটার প্রোগ্রামিং এবং বাস্তব ডিজিটাল সল্যুশন নির্মাণে নিবেদিত।",
      quickLinks: "নেভিগেশন",
      legal: "ডেভেলপার পোর্টফোলিও • রিঅ্যাক্ট, টাইপস্ক্রিপ্ট ও টেইলউইন্ড সিএসএস দিয়ে নির্মিত",
      copyright: "সর্বস্বত্ব সংরক্ষিত। সততা ও নিষ্ঠার সাথে নির্মিত।",
      schoolMention: "বেগম রাবেয়া আহমেদ হাই স্কুল • ৮ম শ্রেণি",
      backToTop: "উপরে যান"
    },
    packaging: {
      title: "মাল্টি-প্ল্যাটফর্ম প্যাকেজিং হাব",
      subtitle: "এই পোর্টফোলিও অ্যাপ্লিকেশন থেকে সরাসরি নেটিভ অ্যান্ড্রয়েড এপিকে (APK) এবং উইন্ডোজ ডেস্কটপ এক্সিকিউটেবল বিল্ড তৈরি করুন।",
      androidTab: "অ্যান্ড্রয়েড এপিকে (Capacitor)",
      windowsTab: "উইন্ডোজ ইএক্সই (Electron)",
      close: "বন্ধ করুন"
    }
  }
};
