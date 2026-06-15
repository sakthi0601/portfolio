// ============================================================
// PORTFOLIO CONSTANTS - SAKTHI P
// Color Theme: Bold Red + Clean White
// ============================================================

export const COLORS = {
  // Primary backgrounds
  bgPrimary: '#FFFFFF',
  bgSecondary: '#FFF5F5',
  bgCard: '#FFFFFF',
  bgCardHover: '#FFF0F0',

  // Accent colors - RED theme
  accentGold: '#DC2626',         // Primary red
  accentGoldLight: '#EF4444',    // Light red
  accentGoldDark: '#B91C1C',     // Dark red
  accentBlue: '#DC2626',
  accentTeal: '#EF4444',
  accentPink: '#DC2626',
  accentPinkLight: '#EF4444',

  // Text colors
  textPrimary: '#111111',
  textSecondary: '#333333',
  textMuted: '#666666',

  // Borders & dividers
  border: '#F0E0E0',
  borderGold: '#DC262640',

  // Gradient strings
  gradientGold: 'linear-gradient(135deg, #DC2626, #EF4444)',
  gradientHero: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
  gradientCard: 'linear-gradient(145deg, #FFFFFF, #FFF5F5)',
};

// ============================================================
// PERSONAL INFO
// ============================================================
export const PERSONAL_INFO = {
  name: 'Sakthi P',
  title: 'Senior Software Engineer',
  subtitle: 'Full Stack Developer',
  tagline: 'Building scalable MERN stack solutions that power real businesses.',
  email: 'sakthipalani28573@gmail.com',
  phone: '7695982064',
  location: 'Chennai, Tamil Nadu, India',
  resumeFileName: 'Sakthi_P_Resume.pdf',
};

// ============================================================
// NAVIGATION LINKS
// ============================================================
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// ============================================================
// SKILLS DATA
// ============================================================
export const SKILLS = {
  Frontend: [
    { name: 'React.js', level: 92 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'HTML5 / CSS3', level: 92 },
    { name: 'Redux / Redux Toolkit', level: 80 },
    { name: 'Bootstrap', level: 82 },
  ],
  Backend: [
    { name: 'Node.js', level: 82 },
    { name: 'Express.js', level: 80 },
    { name: 'RESTful APIs', level: 85 },
  ],
  Database: [
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'SQL', level: 72 },
  ],
  'Cloud & Tools': [
    { name: 'AWS S3', level: 78 },
    { name: 'Git / GitHub', level: 85 },
    { name: 'Postman', level: 82 },
    { name: 'Mailjet', level: 75 },
    { name: 'Jira', level: 72 },
    { name: 'BrowserStack', level: 70 },
  ],
};

// ============================================================
// EXPERIENCE DATA
// ============================================================
export const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Yoho Technologies Pvt. Ltd.',
    location: 'Chennai, Tamil Nadu, India',
    period: 'September 2025 – Present',
    type: 'Full-time',
    highlights: [
      'Develop and maintain full stack web applications using React.js and the MERN stack across multiple live production projects',
      'Collaborate with the development team to design, implement, and test new features based on business requirements',
      'Integrate third-party services including AWS S3 for file storage and Mailjet for email and OTP workflows',
      'Participate in code reviews, debugging, and performance optimization to ensure high-quality, maintainable codebases',
      'Contribute to the development and regular maintenance of enterprise HR, recruitment, and operations platforms',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AWS S3', 'Mailjet'],
  },
];

// ============================================================
// PROJECTS DATA
// ============================================================
export const PROJECTS = [
  {
    id: 1,
    title: 'Job Career Portal',
    subtitle: 'Internal Recruitment Platform',
    description:
      'A full-cycle recruitment portal managing job postings, candidate applications, interview scheduling, and offer letter delivery.',
    highlights: [
      'Built MERN stack application covering job listings, candidate flows, and interview management',
      'Integrated AWS S3 for secure document uploads and Mailjet for automated notifications',
      'Actively involved in regular maintenance and updates of the live production system',
    ],
    tech: ['MERN Stack', 'AWS S3', 'Mailjet', 'RESTful APIs'],
    type: 'Enterprise',
    color: '#DC2626',
    icon: '💼',
  },
  {
    id: 2,
    title: 'Employee User Portal',
    subtitle: 'HR & Operations Management System',
    description:
      'A comprehensive internal HR portal covering the full employee lifecycle — from onboarding to exit documentation.',
    highlights: [
      'Worked on modules: document verification, onboarding, asset management, leave & permission, ticketing, announcements, task management',
      'Integrated AWS S3 for document storage and Mailjet for workflow notifications',
      'Actively involved in ongoing feature enhancements and maintenance in production',
    ],
    tech: ['MERN Stack', 'AWS S3', 'Mailjet', 'MongoDB'],
    type: 'Enterprise',
    color: '#B91C1C',
    icon: '👥',
  },
  {
    id: 3,
    title: 'Company Blog Portal',
    subtitle: 'Content Management System',
    description:
      'Official public-facing blog portal for the company website to manage and publish content dynamically.',
    highlights: [
      'Developed dynamic blog features in React.js with MySQL for content management',
      'Integrated AWS S3 for media storage',
      'Contributed to deployment and maintenance of the live production portal',
    ],
    tech: ['React.js', 'MySQL', 'AWS S3'],
    type: 'Web App',
    color: '#EF4444',
    icon: '📝',
  },
  {
    id: 4,
    title: '3 Corporate Static Websites',
    subtitle: 'Responsive Marketing Sites',
    description:
      'Performance-optimized, fully responsive marketing websites developed for three separate client companies.',
    highlights: [
      'Built performance-optimized, fully responsive React.js websites for three distinct companies',
      'Handled development from UI implementation to deployment',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Responsive Design'],
    type: 'Client Work',
    color: '#991B1B',
    icon: '🌐',
  },
];

// ============================================================
// SOCIAL LINKS
// ============================================================
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:sakthipalani28573@gmail.com',
    icon: 'mail',
  },
];
