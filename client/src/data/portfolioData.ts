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
  iconType: 'nec' | 'mern' | 'degree';
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
    title: 'ASP.NET Core & Full Stack MERN Developer',
    roleTagline: 'Building Enterprise Backend Systems, Web Apps & AI/ML Solutions',
    status: 'ASP.NET Developer at Uranus Tech | Open for Remote Roles',
    location: 'Kathmandu, Nepal',
    email: 'erkiranpoudel08@gmail.com',
    headshotImage: '/kiran_headshot.jpg',
    graduationImage: '/kiran_graduation.jpg',
    necCertificateImage: '/nec_certificate.jpg',
    bio: 'I am a Registered Computer Engineer (Nepal Engineering Council) and ASP.NET Developer at Uranus Tech Pvt. Ltd. I graduated with a 3.34 CGPA in Computer Engineering from Everest Engineering College (Pokhara University). I build real-world enterprise web applications using ASP.NET Core, C#, SQL Server, IIS, and full-stack MERN (MongoDB, Express, React, Node.js). I am enthusiastic about problem solving, data science, and applying AI and machine learning to build practical tech solutions for Nepal.',
    motto: 'Engineering Reliable Software, Driven by Discipline & Dedicated to Solving Real Problems.',
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
      { label: 'Field Research Scope', value: '10+ Colleges', subText: 'Empirical Surveys & AI Modeling' },
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
      description: 'A full-stack MERN application built to connect skilled individuals, local craftsmen, and tech freelancers with clients in Nepal.',
      longDescription: 'Developed a complete skill-sharing marketplace platform using MongoDB Atlas, Express.js, React.js, and Node.js. It features user authentication, service discovery, client booking workflows, and a clean responsive dashboard.',
      tags: ['Pure MERN', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Nepal Tech'],
      liveUrl: 'https://github.com/Kiran-poudel07',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: true,
      surveyHighlight: '🇳🇵 Built to connect Nepal skilled talent with local enterprise & client opportunities.',
      impactMetrics: [
        'Built full-stack MERN marketplace platform connecting local talent with clients',
        'Designed service discovery dashboard with category filters & booking workflows',
        'Implemented authentication and database schemas in MongoDB Atlas',
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
      description: 'An integrated waste management system with vehicle routing optimization and citizen reward incentives. Based on field visits across Kathmandu municipal offices.',
      longDescription: 'Created to address waste collection challenges in Kathmandu. We conducted field research across government municipal offices to analyze collection delays, and built route optimization logic alongside reward incentives for citizen reports.',
      tags: ['Data Science', 'Algorithm Optimization', 'Government Survey', 'Web App', 'Kathmandu Impact'],
      liveUrl: '',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: true,
      surveyHighlight: '🏛️ Visited Multiple Government Municipal Offices in Kathmandu for field research.',
      impactMetrics: [
        'Analyzed Kathmandu municipal waste collection challenges via office visits',
        'Designed vehicle route optimization logic for garbage collection',
        'Created reward incentive features for citizen waste reporting',
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
      description: 'A data analysis research project evaluating student event engagement and social media habits across 10+ Engineering Colleges in Nepal.',
      longDescription: 'Applied Machine Learning models (Random Forest, Decision Trees, Structural Equation Modeling) to study social media usage and event participation patterns among engineering students across Nepal.',
      tags: ['Machine Learning', 'Random Forest', 'Decision Trees', '10+ Engineering Colleges Survey', 'Python'],
      liveUrl: '',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: true,
      surveyHighlight: '🎓 Conducted Field Survey across 10+ Engineering Colleges in Nepal.',
      impactMetrics: [
        'Collected field survey data from students across 10+ engineering colleges in Nepal',
        'Trained Random Forest & Decision Tree models evaluating student event engagement',
        'Built Structural Equation Models (SEM) analyzing digital platform usage',
      ],
      architectureDetails: [
        'Data Collection: Multi-College In-Person & Digital Field Survey',
        'Modeling Stack: Python (Pandas, Scikit-Learn), Random Forest, Decision Tree Classifiers',
        'Statistical Analytics: SEM (Structural Equation Modeling) & Network Centrality Graphs',
      ],
    },
    {
      id: 'proj-asp',
      title: 'ASP.NET Core Enterprise API & IIS Infrastructure',
      category: 'live',
      description: 'Enterprise backend APIs developed at Uranus Tech Pvt. Ltd. using ASP.NET Core, C#, SQL Server, and IIS networking.',
      longDescription: 'Production backend software supporting enterprise business workflows with stored procedures, role-based JWT authorization, and IIS web hosting.',
      tags: ['ASP.NET Core', 'C#', 'SQL Server', 'IIS Server', 'Enterprise API'],
      liveUrl: 'http://localhost:5000/api/v1/health',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: true,
      impactMetrics: [
        'Developed C# ASP.NET Core Web APIs for production business operations',
        'Configured IIS web hosting, route configurations, and security middleware',
        'Wrote and optimized Microsoft SQL Server queries and stored procedures',
      ],
      architectureDetails: [
        'Backend: ASP.NET Core Web API, C#, JWT Authentication',
        'Database: Microsoft SQL Server (T-SQL, Stored Procedures)',
        'Server Infra: IIS (Internet Information Services) Web Hosting & Network Setup',
      ],
    },
    {
      id: 'proj-spam',
      title: 'Machine Learning Email Spam Detection System',
      category: 'university',
      description: '6th semester computer engineering project utilizing Natural Language Processing (NLP) classifiers for automated spam detection.',
      longDescription: 'Built and trained text classification models in Python using Scikit-Learn to detect spam emails accurately.',
      tags: ['Python', 'NLP', 'Machine Learning', 'Scikit-Learn', '6th Sem Minor Project'],
      liveUrl: '',
      githubUrl: 'https://github.com/Kiran-poudel07',
      featured: false,
      impactMetrics: [
        'Trained NLP text classification model on email text datasets',
        'Applied Machine Learning classifiers for spam email detection',
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
      date: 'Official Registration',
      description: 'Officially certified and registered Computer Engineer under the Nepal Engineering Council (NEC).',
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
      issuer: 'MERN Stack Training',
      date: '3-Month Certification',
      description: 'Completed intensive training in building full-stack web applications using MongoDB, Express, React, and Node.js.',
      iconType: 'mern',
    },
  ] as CertificationItem[],

  testimonials: [
    {
      id: 'test-1',
      name: 'Everest Engineering College Community',
      role: 'Student Leadership',
      organization: 'Everest Engineering College (Pokhara University)',
      quote: 'Kiran served as Class Representative and Event Management Lead. He demonstrated strong dedication in organizing technical expos and student activities while maintaining a 3.34 CGPA.',
      relationship: 'Academic & Event Leadership',
    },
    {
      id: 'test-2',
      name: 'Uranus Tech Engineering Team',
      role: 'Software Development Division',
      organization: 'Uranus Tech Pvt. Ltd.',
      quote: 'Kiran works effectively on ASP.NET Core, C#, and SQL Server modules. He is disciplined, focused on problem solving, and delivers solid software for business needs.',
      relationship: 'Software Engineering Team',
    },
  ] as TestimonialItem[],

  faqs: [
    {
      question: 'What is your primary software development stack?',
      answer: 'My main focus is ASP.NET Core & C# (Web APIs, SQL Server, IIS) alongside full-stack MERN (MongoDB, Express, React, Node.js, TypeScript). I also use Python for Machine Learning and Data Science projects.',
    },
    {
      question: 'Are you open to full-time remote engineering jobs?',
      answer: 'Yes, I am currently working as an ASP.NET Developer at Uranus Tech Pvt. Ltd., and I am actively open for remote software engineering roles with tech teams worldwide.',
    },
    {
      question: 'What field research projects have you completed?',
      answer: 'I completed two major research projects: (1) Demand-Based Waste Management visiting government municipal offices in Kathmandu, and (2) FOMO AI Research visiting 10+ engineering colleges in Nepal to collect survey data and build Machine Learning models.',
    },
    {
      question: 'Are you registered with the Nepal Engineering Council (NEC)?',
      answer: 'Yes, I am an officially registered Computer Engineer under the Nepal Engineering Council (NEC).',
    },
  ] as FaqItem[],

  experience: [
    {
      id: 'exp-1',
      role: 'ASP.NET Developer (Junior)',
      company: 'Uranus Tech Pvt. Ltd.',
      period: 'Jan 2026 - Present',
      location: 'Kathmandu, Nepal (Full Time / Contract)',
      description: [
        'Developing enterprise backend APIs and web applications using ASP.NET Core, C#, and Microsoft SQL Server.',
        'Working with IIS web server hosting, database stored procedures, and backend route optimizations.',
        'Collaborating with the software team to build clean and long-lasting application features for client needs.',
      ],
      skills: ['ASP.NET Core', 'C#', 'SQL Server', 'IIS Server', 'REST APIs', 'Networking'],
      metrics: 'ASP.NET Developer • Enterprise Backend Software',
    },
    {
      id: 'exp-2',
      role: 'Full Stack MERN Developer Trainee',
      company: 'MERN Certification & Training',
      period: '3 Months Intensive',
      location: 'Kathmandu, Nepal',
      description: [
        'Trained in modern MERN stack development: MongoDB Atlas, Express.js, React.js, Node.js, and TypeScript.',
        'Built web application modules with state management, REST APIs, and responsive design.',
      ],
      skills: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS'],
      metrics: 'Certified MERN Full-Stack Developer',
    },
  ] as ExperienceItem[],

  sportsBackground: [
    {
      id: 'sport-1',
      title: 'Physical Sports & Esports Competitor',
      category: 'Football, Futsal, Cricket, Basketball & Esports (PUBG, Free Fire, eFootball PES)',
      period: 'Active Lifestyle',
      description: 'I enjoy staying physically active and playing Football, Futsal, Cricket, Basketball, as well as competitive Esports (PUBG, Free Fire, eFootball PES). It keeps me energetic, disciplined, and focused.',
      achievements: [
        'Active player in local Football, Futsal, and Cricket matches',
        'Esports player in PUBG, Free Fire, and eFootball PES',
        'Develops teamwork, quick thinking, and physical stamina',
      ],
      takeaways: 'Sports teach me that consistency, teamwork under pressure, and active focus are just as important on a playing field as they are in software engineering.',
    },
  ] as SportsItem[],

  education: [
    {
      id: 'edu-nec',
      degree: 'Registered Computer Engineer',
      institution: 'Nepal Engineering Council (NEC)',
      period: 'Official License',
      location: 'Kathmandu, Nepal',
      description: 'Certified and registered Computer Engineer under the Nepal Engineering Council (NEC).',
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
      description: 'Graduated with a 3.34 CGPA from Pokhara University. Served as Class Representative and Event Management Lead for college Expos, hackathons, and activities.',
      highlights: [
        'CGPA: 3.34 / 4.00 (Pokhara University)',
        'Class Representative',
        'Event Management Lead',
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
      description: 'Completed Secondary Education Examination (SEE) with distinction honors.',
      highlights: ['GPA: 3.50 / 4.00', 'Secondary Distinction Honors'],
    },
  ] as EducationItem[],

  goals: {
    headline: 'Building Tech & AI Solutions to Support Nepal’s Economy & Real Needs',
    shortTerm: 'I am an enthusiastic problem solver currently working as an ASP.NET Developer at Uranus Tech Pvt. Ltd., actively seeking remote software engineering jobs worldwide to deliver clean, scalable solutions.',
    longTerm: 'My core mission is to contribute to Nepal’s national economy and solve real-world problems in Nepal through AI, Machine Learning, and enterprise coding, building intelligent systems that create lasting positive impact for the nation.',
    coreValues: [
      'Clean Code & Scalable Backend Engineering',
      'Data Science & AI/ML Driven Problem Solving',
      'Contributing to Nepal’s Tech Economy',
      'Active Lifestyle & Team Collaboration',
    ],
  },
};
