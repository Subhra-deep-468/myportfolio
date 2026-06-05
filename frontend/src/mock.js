export const portfolioData = {
  personalInfo: {
    name: "Subhradeep Chakraborty",
    title: "Aspiring Full Stack Developer & AI Enthusiast",
    tagline: "Computer Science Engineering undergraduate (Fresher) specializing in Full Stack Development, Software Engineering, and AI Applications. Open to opportunities!",
    email: "subhradeepchakraborty738@gmail.com",
    phone: "7679636849",
    location: "Kolkata, West Bengal",
    github: "https://github.com/Subhra-deep-468",
    linkedin: "https://linkedin.com/in/subhradeep-chakraborty-7a6a18394",
    resumeUrl: "/resume.pdf",
    avatar: "/profile.jpg"
  },

  about: {
    description: "Passionate Computer Science undergraduate (Fresher) with hands-on internship experience and a strong drive to build scalable full-stack applications and AI-powered solutions. I love solving complex problems and creating innovative digital experiences. Actively seeking entry-level opportunities to contribute and grow.",
    highlights: [
      "Published NPM package for React components",
      "Built 5+ AI-powered applications during internship & projects",
      "25% performance improvement achieved during internship",
      "Active learner & open-source contributor"
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Authentication", level: 85 }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Database Design", level: 85 },
        { name: "Database Optimization", level: 75 }
      ]
    },
    {
      category: "AI & Generative AI",
      items: [
        { name: "LangChain", level: 85 },
        { name: "OpenAI API", level: 90 },
        { name: "Gemini API", level: 85 },
        { name: "Prompt Engineering", level: 90 },
        { name: "LLMs", level: 85 },
        { name: "Vector Databases", level: 75 }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI Powered React UI Library",
      description: "Architected and expanded a scalable AI-powered React component library and NPM package. Integrated AI APIs for dynamic UI generation from natural language prompts. Built a SaaS platform with authentication, RBAC, and payment integration.",
      category: "AI + SaaS",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "AI APIs", "MongoDB", "Razorpay"],
      github: "https://github.com/Subhra-deep-468/AI-Powered-ReactUI-Library",
      demo: "https://reactuilibraryfrontend.onrender.com/",
      features: [
        "Dynamic UI generation from natural language",
        "Published NPM package",
        "Role-based access control",
        "Payment gateway integration"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "AI Voice Assistant for Websites",
      description: "Built and deployed an AI-powered voice assistant platform with Speech-to-Text, Text-to-Speech, and Gemini API integration for context-aware conversations. Developed scalable full-stack architecture with responsive UI.",
      category: "AI Application",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "STT", "TTS", "Gemini API"],
      github: "https://github.com/Subhra-deep-468/AIvoice-assistant",
      demo: "https://aivoice-assistant-1.onrender.com/login",
      features: [
        "Real-time voice interaction",
        "Context-aware AI responses",
        "Multi-language support",
        "Cloud deployment"
      ],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "Ai Interview Agent",
      description: "Built a collaborative AI based Interview preparation  tool with real-time updates, team collaboration features, and advanced filtering capabilities for productivity teams.",
      category: "Productivity Tool",
      technologies: ["React.js", "Next.js", "MongoDB", "WebSocket"],
      github: "https://github.com/Subhra-deep-468/ai_interviewagent",
      demo: "https://ai-interviewagent6.onrender.com/",
      features: [
        "Real-time collaboration",
        "Advanced task filtering",
        "Team management",
        "Progress tracking"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
    },
    {
      id: 5,
      title: "AI Chatbot with RAG System",
      description: "Developed an intelligent chatbot using Retrieval Augmented Generation (RAG) with vector databases. Implemented context-aware conversations with document understanding capabilities.",
      category: "AI + RAG",
      technologies: ["Python", "LangChain", "OpenAI API", "Vector Databases", "FastAPI", "React.js"],
      github: "https://github.com/Subhra-deep-468/realtime_chatapplication1",
      demo: "https://realtime-chatapplication1frontend.onrender.com/login",
      features: [
        "Document understanding & QA",
        "Vector-based semantic search",
        "Multi-turn conversations",
        "Custom knowledge base integration"
      ],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Euphoria GenX",
      duration: "2026 (Internship)",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Developed and optimized 5+ full-stack features using React.js, Node.js, and REST APIs",
        "Improved application performance and scalability by 25%",
        "Collaborated with cross-functional teams in Agile environment",
        "Contributed to backend development, database management, and code reviews",
        "Implemented debugging solutions and participated in Agile-based software delivery"
      ],
      technologies: ["React.js", "Node.js", "REST APIs", "MongoDB", "Agile", "AI", "Machine Learning","Rest Apis"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech - Computer Science Engineering",
      institution: "Heritage Institute Of Technology",
      duration: "2023 - 2027",
      cgpa: "7.92",
      highlights: [
        "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
        "Active participant in hackathons and coding competitions",
        "Event coordinator for technical and cultural events"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary (12th)",
      institution: "Dabcha Nabakola High School",
      duration: "2022",
      cgpa: "81.4%",
      highlights: ["WBCHSE Board"]
    },
    {
      id: 3,
      degree: "Madhyamik (10th)",
      institution: "Dabcha Nabakola High School",
      duration: "2020",
      cgpa: "88.71%",
      highlights: ["WBBSE Board"]
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Cloud Computing with AWS",
      issuer: "AWS",
      description: "Completed AWS Cloud Computing Training covering EC2, S3, IAM, VPC",
      date: "2026"
    },
    {
      id: 2,
      name: "Generative AI",
      issuer: "Industry Certification",
      description: "Certified in LLMs, prompt engineering, and building production-ready AI applications",
      date: "2026"
    },
    {
      id: 3,
      name: "Full Stack Web Development",
      issuer: "Industry Certification",
      description: "Certified in React.js, Node.js, REST APIs, and MongoDB for building scalable full-stack applications",
      date: "2026"
    },
    {
      id: 4,
      name: "Vibe Coding",
      issuer: "Industry Certification",
      description: "Certified in AI-assisted development workflows using modern tools to accelerate software delivery",
      date: "2026"
    }
  ],

  softSkills: [
    { name: "Problem Solving", icon: "Lightbulb", description: "Analytical approach to complex challenges" },
    { name: "Team Collaboration", icon: "Users", description: "Working effectively in cross-functional teams" },
    { name: "Effective Communication", icon: "MessageSquare", description: "Clear technical & non-technical communication" },
    { name: "Analytical Thinking", icon: "Brain", description: "Data-driven decision making" },
    { name: "Adaptability", icon: "Zap", description: "Quick to learn new technologies & frameworks" },
    { name: "Continuous Learning", icon: "BookOpen", description: "Always exploring new tech & best practices" },
    { name: "Time Management", icon: "Clock", description: "Efficient task prioritization & delivery" },
    { name: "Leadership", icon: "Target", description: "Leading projects & mentoring peers" },
    { name: "Critical Thinking", icon: "Search", description: "Evaluating solutions from multiple angles" },
    { name: "Creativity", icon: "Sparkles", description: "Innovative approach to building solutions" }
  ],

  languages: [
    { name: "English", level: "Professional", proficiency: 90 },
    { name: "Hindi", level: "Native", proficiency: 100 }
  ],

  achievements: [
    "Published a reusable React component library as an NPM package",
    "Enhanced 4+ AI-powered and full-stack applications using Generative AI and cloud tech",
    "Engaged in hackathons and collaborative software development",
    "Coordinated and managed college events (technical & cultural)",
    "Volunteered in college events and academic activities",
    "Improved application performance by 25% during internship at Euphoria GenX"
  ]
};
