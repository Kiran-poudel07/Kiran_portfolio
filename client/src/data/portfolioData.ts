export interface Project {
  id: string;
  title: string;
  category: 'all' | 'live' | 'university' | 'mern' | 'research';
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  surveyHighlight?: string;
  impactMetrics?: string[];
  architectureDetails?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  metrics?: string;
}

export interface SportsItem {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  achievements: string[];
  takeaways: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  description: string;
  highlights: string[];
  image?: string;
  necCertImage?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  iconType: 'nec' | 'mern' | 'degree' | 'ml';
  image?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  relationship: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Kiran Poudel',
    title: 'ASP.NET Core & Full Stack MERN Engineer',
    roleTagline: 'Engineering Enterprise Backend Solutions, Data-Driven Research & AI/ML Systems',
    status: 'ASP.NET Engineer at Uranus Tech Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    email: 'erkiranpoudel08@gmail.com',
    headshotImage: '/kiran_headshot.jpg',
    graduationImage: '/kiran_graduation.jpg',
    necCertificateImage: '/nec_certificate.jpg',
    bio: 'Registered Computer Engineer (Nepal Engineering Council) & ASP.NET / MERN Stack Engineer at Uranus Tech Pvt. Ltd. Graduated with a 3.34 CGPA from Pokhara University (Everest Engineering College). Deeply experienced in building enterprise web applications using ASP.NET Core, C#, SQL Server, IIS, and modern MERN stack. Passionate about applying Data Science, Machine Learning, and AI to solve real-world national problems in Nepal.',
    motto: 'Engineering Scalable Enterprise Systems, Driven by Sports Discipline & National AI Innovation.',
    resumePdfUrl: '/resume.pdf',
    socials: {
      github: 'https://github.com/Kiran-poudel07',
      linkedin: 'http://www.linkedin.com/in/kiran-poudel-6420a8389',
      facebook: 'https://www.facebook.com/share/19bsrJSTsi/',
      instagram: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=k9d95oy',
      gmail: 'mailto:erkiranpoudel08@gmail.com',
    },
    keyMetrics: [
      { label: 'Academic Standing', value: '3.34 CGPA', subText: 'Pokhara University B.E. Computer' },
      { label: 'Engineering License', value: 'NEC Registered', subText: 'Nepal Engineering Council' },
      { label: 'Field Research Scope', value: '10+ Colleges', subText: 'Surveys & Empirical AI Modeling' },
      { label: 'Enterprise Experience', value: 'Uranus Tech', subText: 'ASP.NET Core & SQL Server' },
    ],
  },

  languagesAndTech: {
    programmingLanguages: ['C# / .NET Core', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'C / C++', 'PHP', 'SQL / T-SQL'],
    backend: ['ASP.NET Core', 'Node.js', 'Express.js', 'C# Web API', 'IIS Server Networking', 'RESTful Services'],
    frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'HTML5/CSS3'],
    database: ['Microsoft SQL Server', 'MongoDB Atlas', 'PostgreSQL', 'Mongoose ORM', 'XAMPP / MySQL'],
    dataScienceAI: ['Machine Learning (Scikit-Learn)', 'Data Analytics & SEM', 'Random Forest & Decision Trees', 'NLP Email Classification'],
  },

  skillCategories: [
    {
      title: 'Backend & Enterprise Engineering',
      skills: [
        { name: 'ASP.NET Core & C# Web API', level: 92, highlight: true },
        { name: 'Node.js & Express.js APIs', level: 88, highlight: true },
        { name: 'Microsoft SQL Server & T-SQL', level: 90, highlight: true },
        { name: 'IIS Server & Network Setup', level: 85 },
        { name: 'RESTful Architecture & Security', level: 92 },
      ],
    },
    {
      title: 'Full Stack Frontend & UI',
      skills: [
        { name: 'React.js & TypeScript', level: 90, highlight: true },
        { name: 'Tailwind CSS & Modern UI', level: 90 },
        { name: 'Redux & Context State', level: 85 },
        { name: 'HTML5 / CSS3 Responsive Layouts', level: 95 },
      ],
    },
    {
      title: 'Data Science, ML & Research',
      skills: [
        { name: 'Python ML (Scikit-Learn, Pandas)', level: 86, highlight: true },
        { name: 'Random Forest & Decision Trees', level: 85 },
        { name: 'Field Survey & Empirical Research', level: 90, highlight: true },
        { name: 'NLP & Text Classification', level: 82 },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'proj-skilllink',
      title: 'SkillLink Nepal - Freelance & Skill Marketplace',
      category: 'mern',
      description: 'Pure MERN stack web platform connecting skilled professionals, craftsmen, and tech freelancers with clients across Nepal.',
      longDescription: 'Engineered a complete skill-sharing and freelancing marketplace platform using MongoDB Atlas, Express.js, React.js, and Node.js. Features user authentication, service discovery catalog, client booking workflows, and responsive modern dashboard design.',
      tags: ['Pure MERN', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Nepal Tech'],
      liveUrl: 'https://github.com/Kiran-poudel07',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: true,
      surveyHighlight: '🇳🇵 Built specifically for connecting Nepal skilled talent with local enterprise & client opportunities.',
      impactMetrics: [
        'Engineered full-stack MERN marketplace platform connecting skilled professionals with local clients',
        'Built responsive service discovery dashboard with category filters & client booking workflows',
        'Secured authentication routing & database schemas in MongoDB Atlas',
      ],
      architectureDetails: [
        'Frontend: React 18, TypeScript, Tailwind CSS, Responsive Components',
        'Backend: Node.js, Express.js REST API, JWT Authentication',
        'Database: MongoDB Atlas (Mongoose Schemas for Services, Users, Proposals)',
      ],
    },
    {
      id: 'proj-waste',
      title: 'Demand-Based Waste Management & Routing System',
      category: 'university',
      description: 'Integrated platform with efficient vehicle routing algorithms & reward-based citizen incentives. Conducted field surveys across multiple Kathmandu government municipal offices.',
      longDescription: 'Engineered to solve urban waste collection bottlenecks in Kathmandu. Conducted extensive field research across government offices to model waste collection delays, designing dynamic vehicle routing algorithms and citizen reward incentive systems.',
      tags: ['Data Science', 'Algorithm Optimization', 'Government Survey', 'Web App', 'Kathmandu Impact'],
      liveUrl: '',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: true,
      surveyHighlight: '🏛️ Visited Multiple Government & Municipal Offices across Kathmandu for empirical data gathering.',
      impactMetrics: [
        'Analyzed Kathmandu municipal waste bottlenecks via government field visits',
        'Engineered dynamic vehicle route optimization algorithm reducing mileage',
        'Implemented reward-based civic participation system for waste reporting',
      ],
      architectureDetails: [
        'Frontend: Responsive Web Dashboard for Citizens & Drivers',
        'Backend: Route Optimization Engine & Reward Calculation APIs',
        'Database: Relational Database Schema for Municipal Zones & Pickup Logs',
      ],
    },
    {
      id: 'proj-fomo',
      title: 'FOMO PNA Network & Machine Learning Analysis',
      category: 'research',
      description: 'Data science research modeling student event engagement & social media FOMO. Conducted empirical field surveys across 10+ Engineering Colleges in Nepal.',
      longDescription: 'Applied Machine Learning models (Random Forest, Decision Trees, Structural Equation Modeling) to analyze social media usage & event participation patterns among engineering students across Nepal.',
      tags: ['Machine Learning', 'Random Forest', 'Decision Trees', '10+ Engineering Colleges Survey', 'Python'],
      liveUrl: '',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: true,
      surveyHighlight: '🎓 Conducted Field Survey across 10+ Engineering Colleges in Nepal.',
      impactMetrics: [
        'Gathered empirical survey data from 500+ engineering students across 10+ colleges in Nepal',
        'Trained Random Forest & Decision Tree models evaluating student FOMO triggers',
        'Constructed Structural Equation Models (SEM) analyzing digital engagement',
      ],
      architectureDetails: [
        'Data Collection: Multi-College In-Person & Digital Empirical Survey',
        'Modeling Stack: Python (Pandas, Scikit-Learn), Random Forest, Decision Tree Classifiers',
        'Statistical Analytics: SEM (Structural Equation Modeling) & Network Centrality Graphs',
      ],
    },
    {
      id: 'proj-asp',
      title: 'ASP.NET Core Enterprise API & IIS Infrastructure',
      category: 'live',
      description: 'Production backend architecture developed at Uranus Tech Pvt. Ltd. using ASP.NET Core, C#, Microsoft SQL Server, and IIS networking.',
      longDescription: 'Enterprise backend powering business operations with secure database stored procedures, role-based JWT authorization, and IIS web server hosting.',
      tags: ['ASP.NET Core', 'C#', 'SQL Server', 'IIS Server', 'Enterprise API'],
      liveUrl: 'http://localhost:5000/api/v1/health',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: true,
      impactMetrics: [
        'Developed production-grade C# ASP.NET Core Web APIs for business modules',
        'Configured IIS web server hosting, endpoint routing, and security protocols',
        'Optimized Microsoft SQL Server database queries and stored procedures',
      ],
      architectureDetails: [
        'Backend: ASP.NET Core 8 Web API, C#, JWT Authentication',
        'Database: Microsoft SQL Server (T-SQL, Stored Procedures)',
        'Server Infra: IIS (Internet Information Services) Web Server & Network Setup',
      ],
    },
    {
      id: 'proj-spam',
      title: 'Machine Learning Email Spam Detection System',
      category: 'university',
      description: '6th semester computer engineering project utilizing Natural Language Processing (NLP) and machine learning classifiers for automated email spam detection.',
      longDescription: 'Designed and trained text classification models using Python and Scikit-Learn to detect malicious email spam with high precision.',
      tags: ['Python', 'NLP', 'Machine Learning', 'Scikit-Learn', '6th Sem Minor Project'],
      liveUrl: '',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: false,
      impactMetrics: [
        'Trained NLP text classification model on email text datasets',
        'Applied Naive Bayes and SVM algorithms for high classification accuracy',
      ],
      architectureDetails: [
        'Language: Python',
        'Libraries: Scikit-Learn, NLTK, Pandas',
      ],
    },
  ] as Project[],

  certifications: [
    {
      id: 'cert-1',
      title: 'Registered Computer Engineer License',
      issuer: 'Nepal Engineering Council (NEC)',
      date: 'Official Engineering Registration',
      description: 'Authorized registered Computer Engineer under the Nepal Engineering Council (NEC), certified for professional computer engineering practice.',
      iconType: 'nec',
      image: '/nec_certificate.jpg',
    },
    {
      id: 'cert-2',
      title: 'Bachelor of Computer Engineering Degree',
      issuer: 'Pokhara University (Everest Engineering College)',
      date: 'CGPA: 3.34 / 4.00',
      description: 'Undergraduate Computer Engineering degree specializing in Software Engineering, MERN, ASP.NET Core, Database Systems, and Machine Learning.',
      iconType: 'degree',
      image: '/kiran_graduation.jpg',
    },
    {
      id: 'cert-3',
      title: 'Full Stack MERN Developer Certification',
      issuer: 'MERN Stack Training & Research',
      date: '3-Month Intensive Certification',
      description: 'Mastery in building full-stack web applications using MongoDB Atlas, Express.js, React.js, Node.js, and TypeScript.',
      iconType: 'mern',
    },
    {
      id: 'cert-4',
      title: 'Data Science & Machine Learning Research Certificate',
      issuer: 'Academic Research & Survey Projects',
      date: 'Empirical AI Analytics',
      description: 'Conducted field surveys across 10+ Engineering Colleges & Government Offices in Kathmandu, modeling Random Forest & SEM algorithms.',
      iconType: 'ml',
    },
  ] as CertificationItem[],

  testimonials: [
    {
      id: 'test-1',
      name: 'Everest Engineering College Faculty & Peer Body',
      role: 'Student Representative Body',
      organization: 'Everest Engineering College (Pokhara University)',
      quote: 'Kiran served as an outstanding Class Representative and Event Management Lead. His leadership in organizing technical hackathons, managing student affairs, and maintaining academic excellence (3.34 CGPA) was exemplary.',
      relationship: 'Academic & Event Leadership Endorsement',
    },
    {
      id: 'test-2',
      name: 'Uranus Tech Engineering Team',
      role: 'Software Development Division',
      organization: 'Uranus Tech Pvt. Ltd.',
      quote: 'Kiran has demonstrated strong expertise in ASP.NET Core, C#, and SQL Server. He approaches complex enterprise backend problems with high discipline, delivering reliable, long-lasting software solutions.',
      relationship: 'Enterprise Engineering Team Endorsement',
    },
  ] as TestimonialItem[],

  faqs: [
    {
      question: 'What is your primary software engineering stack?',
      answer: 'My primary stack is ASP.NET Core & C# (Web APIs, SQL Server, IIS) combined with Full-Stack MERN (MongoDB, Express, React, Node.js, TypeScript). I also work with Python for Machine Learning & Data Science analytics.',
    },
    {
      question: 'Are you available for full-time remote engineering roles?',
      answer: 'Yes! While currently working as an ASP.NET Developer at Uranus Tech Pvt. Ltd., I am actively seeking full-time remote software engineering opportunities with global tech companies and enterprise teams.',
    },
    {
      question: 'What empirical field research have you conducted?',
      answer: 'I conducted two major field research projects: (1) Demand-Based Waste Routing System visiting Kathmandu Government & Municipal Offices, and (2) FOMO PNA Network AI Survey visiting over 10+ Engineering Colleges across Nepal to train Random Forest & SEM machine learning models.',
    },
    {
      question: 'Are you officially licensed by the Nepal Engineering Council (NEC)?',
      answer: 'Yes, I am a Registered Computer Engineer under the Nepal Engineering Council (NEC), officially certified for professional computer engineering practice.',
    },
  ] as FaqItem[],

  experience: [
    {
      id: 'exp-1',
      role: 'ASP.NET Developer (Junior)',
      company: 'Uranus Tech Pvt. Ltd.',
      period: 'Jan 2024 - Present',
      location: 'Kathmandu, Nepal (Full Time / Contract)',
      description: [
        'Engineering enterprise backend services and web applications using ASP.NET Core, C#, and Microsoft SQL Server.',
        'Managing IIS web server configurations, networking protocols, and stored procedure database optimizations.',
        'Solving complex business requirements with robust, long-lasting software architecture under tight deadlines.',
      ],
      skills: ['ASP.NET Core', 'C#', 'SQL Server', 'IIS Server', 'REST APIs', 'Networking'],
      metrics: 'Core Backend Contributor • Enterprise Production Systems',
    },
    {
      id: 'exp-2',
      role: 'Full Stack MERN Developer Trainee',
      company: 'MERN Certification & Research',
      period: '3 Months Intensive',
      location: 'Kathmandu, Nepal',
      description: [
        'Mastered modern MERN stack development: MongoDB Atlas, Express.js, React.js, Node.js, and TypeScript.',
        'Developed full-stack web applications with state management, REST API integration, and Tailwind CSS.',
      ],
      skills: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS'],
      metrics: 'Certified MERN Full-Stack Developer',
    },
  ] as ExperienceItem[],

  sportsBackground: [
    {
      id: 'sport-1',
      title: 'Multi-Sport & Esports Competitor',
      category: 'Football, Futsal, Cricket, Basketball & Esports (PUBG, Free Fire, eFootball PES)',
      period: 'Active Discipline',
      description: 'Active multi-sport player involved in Football, Futsal, Cricket, Basketball, and competitive Esports. Driven to maintain high physical energy, focus under pressure, and active leadership.',
      achievements: [
        'Active participant in regional Football, Futsal, and Cricket tournaments',
        'Competitive Esports player in PUBG, Free Fire, and eFootball PES',
        'Demonstrates team leadership, rapid tactical execution, and athletic endurance',
      ],
      takeaways: 'Physical sports and esports taught me that rapid decision-making under high pressure and seamless team communication are essential—both on the sports ground and in solving complex software bugs.',
    },
  ] as SportsItem[],

  education: [
    {
      id: 'edu-nec',
      degree: 'Registered Computer Engineer',
      institution: 'Nepal Engineering Council (NEC)',
      period: 'Official License / Certification',
      location: 'Kathmandu, Nepal',
      description: 'Officially certified and registered Computer Engineer under the Nepal Engineering Council (NEC), authorized for professional engineering practice in Nepal.',
      highlights: [
        'NEC Registered Computer Engineer Certification',
        'Authorized Engineering Practitioner in Nepal',
      ],
      necCertImage: '/nec_certificate.jpg',
    },
    {
      id: 'edu-1',
      degree: 'Bachelor of Computer Engineering (B.E. Computer)',
      institution: 'Everest Engineering College (Pokhara University)',
      period: 'Graduated • CGPA: 3.34',
      location: 'Kathmandu, Nepal',
      description: 'Graduated with a 3.34 CGPA from Pokhara University. Served as Class Representative and Key Management Member & Event Voluntary Lead for college hackathons and cultural expos.',
      highlights: [
        'CGPA: 3.34 / 4.00 (Pokhara University)',
        'Class Representative & Student Leadership',
        'Key Management Member & Event Voluntary Lead',
      ],
      image: '/kiran_graduation.jpg',
    },
    {
      id: 'edu-2',
      degree: '+2 Science (Higher Secondary)',
      institution: 'Gyanodaya Secondary School',
      period: 'Completed • GPA: 3.61',
      location: 'Kathmandu, Nepal',
      description: 'Completed Higher Secondary (+2 Science) with distinction marks in Physics, Chemistry, and Mathematics.',
      highlights: ['GPA: 3.61 / 4.00', 'Science & Mathematics Stream'],
    },
    {
      id: 'edu-3',
      degree: '10th Standard (SEE)',
      institution: 'Gyanodaya Higher Secondary School',
      period: 'Completed • GPA: 3.50',
      location: 'Kathmandu, Nepal',
      description: 'Completed Secondary Education Examination (SEE) with top distinction honors.',
      highlights: ['GPA: 3.50 / 4.00', 'Secondary Distinction Honors'],
    },
  ] as EducationItem[],

  goals: {
    headline: 'Solving National Problems in Nepal Through AI, Machine Learning & Enterprise Engineering',
    shortTerm: 'Deliver robust ASP.NET Core & MERN enterprise software at Uranus Tech, advance Machine Learning models in Python, and solve real client challenges with long-lasting solutions.',
    longTerm: 'Lead AI & Data Science initiatives addressing critical national infrastructure problems in Nepal (such as smart waste management, urban transportation, and predictive data systems), while taking on global enterprise software roles.',
    coreValues: [
      'Clean Code & Resilient Enterprise Architecture',
      'Data Science & AI/ML Driven Problem Solving',
      'Solving National Infrastructure Challenges in Nepal',
      'Sports Discipline & Athletic Endurance',
    ],
  },
};
