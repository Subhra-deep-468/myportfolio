export const portfolioData = {
  personalInfo: {
    name: "Subhradeep Chakraborty",
    title: "Full-Stack Developer | AI/ML • GenAI • LLMs • RAG | React.js • Express.js • C++ • Python | AWS | Ex-Intern @ Tata Steel Ltd. & Techno Exponent",
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
      "Built 5+ AI-powered applications during internship & projects"
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 75 }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 90 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      category: "AI & Generative AI",
      items: [
        { name: "OpenAI API", level: 90 },
        { name: "Gemini API", level: 85 },
        { name: "Prompt Engineering", level: 90 },
        { name: "LLMs", level: 85 }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 },
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
      id: 7,
      title: "AI Website Builder",
      description: "Built an AI-powered website builder that turns natural-language ideas into complete, responsive websites with editable code, live preview, and deployment-ready output.",
      category: "AI Web Builder",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "OpenAI API"],
      github: "https://github.com/Subhra-deep-468/AI_building_website",
      features: [
        "Natural-language website generation",
        "Editable generated code",
        "Live website preview",
        "Download and deployment workflow"
      ],
      image: "https://opengraph.githubassets.com/1/Subhra-deep-468/AI_building_website"
    },
    {
      id: 8,
      title: "AI DIGITAL PRODUCT SELLING WEBSITE",
      description: "A digital products marketplace built with a React frontend and an Express and MongoDB backend.",
      category: "Digital Marketplace",
      technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Redis", "Firebase"],
      github: "https://github.com/Subhra-deep-468/Digital-Product-Selling-Website",
      image: "https://opengraph.githubassets.com/1/Subhra-deep-468/Digital-Product-Selling-Website"
    },
  ],

  experience: [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Techno Exponent",
      duration: "2026 (Internship)",
      type: "Internship",
      responsibilities: [
        "Built a doctor appointment booking platform using React.js, Node.js, Express.js, and MongoDB, with patient, doctor, and admin dashboards.",
        "Developed secure REST APIs with JWT authentication and role-based access for patients, doctors, and admins.",
        "Developed and optimized 5+ full-stack features using React.js, Node.js, Express.js, and REST APIs improving application functionality and performance.",
        "Integrated AI features to assist patients in finding the right doctor and booking faster."
      ],
      technologies: ["React.js", "Node.js", "REST APIs", "MongoDB", "Agile", "AI", "Machine Learning","Rest Apis"]
    },
    {
      id: 2,
      role: "Intern",
      company: "Tata Steel Limited",
      duration: "2026 (Internship)",
      location: "India",
      type: "Internship",
      responsibilities: [
        "Built SelloraAI, a digital products marketplace using React, Node.js, Express.js, MongoDB, and Razorpay, implementing order processing and server-side payment signature verification to reject invalid payments.",
        "Developed product management features for creating, editing, deleting, and publicly listing products, with unique slug-based URLs and ownership checks.",
        "Developed AI-powered sales insights to summarize creators’ order data and generate charts.",
        "Implemented Google login with server-side token verification and cookie-based sessions to protect creator and admin pages."
      ],
      technologies: ["Professional Experience"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech - Computer Science Engineering",
      institution: "Heritage Institute Of Technology",
      duration: "2023 - 2027",
      cgpa: "7.88",
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
      date: "2026",
      certificate: "/certificates/aws-cloud.jpg"
    },
    {
      id: 2,
      name: "Generative AI",
      issuer: "Industry Certification",
      description: "Certified in LLMs, prompt engineering, and building production-ready AI applications",
      date: "2026",
      certificate: "/certificates/generative-ai.jpg"
    },
    {
      id: 3,
      name: "Full Stack Web Development",
      issuer: "Industry Certification",
      description: "Certified in React.js, Node.js, REST APIs, and MongoDB for building scalable full-stack applications",
      date: "2026",
      certificate: "",
      certificateUrl: "https://trainings.internshala.com/s/v/3943189/861426a7"
    },
    {
      id: 4,
      name: "Artificial Intelligence & Machine Learning",
      issuer: "Industry Certification",
      description: "Certified in AI-assisted development workflows using modern tools to accelerate software delivery",
      date: "2026",
      certificate: "",
      certificateUrl: "https://trainings.internshala.com/s/v/3841640/3a676e73"
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
    { name: "English", level: "Professional", proficiency: 100 },
    { name: "Hindi", level: "Native", proficiency: 90 }
  ],

  achievements: [
    "Published a reusable React component library as an NPM package",
    "Enhanced 4+ AI-powered and full-stack applications using Generative AI and cloud tech",
    "Engaged in hackathons and collaborative software development",
    "Coordinated and managed college events (technical & cultural)",
    "Volunteered in college events and academic activities"
  ]
};
