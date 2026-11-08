import { assetUrl } from '@/lib/utils';

export const profile = {
  name: 'Efren S. Cabudbud Jr.',
  title: 'Web & Mobile Developer | Virtual Assistant',
  location: 'Bohol, Philippines',
  email: '4r6iee@gmail.com',
  phone: '09609229610',
  summary: 'BSIT graduate focused on building practical technology solutions, supporting digital workflows, and helping businesses stay organized and productive.',
  avatar: assetUrl('/images/profile.png'),
  resume: assetUrl('/Efren-Cabudbud-Resume.pdf'),
  social: {
    github: 'https://github.com/4r6ie',
    linkedin: 'https://linkedin.com/in/efren-cabudbud',
    facebook: 'https://facebook.com/argie.cabudbud.75',
  },
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Trinidad Municipal College',
    status: 'Graduate',
  },
  workExperience: {
    role: 'SPES Beneficiary / Work Experience',
    company: 'LGU Pilar, Bohol',
    description: 'Practical workplace exposure involving administrative tasks, following instructions, teamwork, responsibility, task organization, time management, and professional conduct.',
  },
};

export const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  backend: ['PHP', 'Laravel', 'REST / API Concepts', 'Server-side Development'],
  database: ['MySQL', 'SQLite', 'Database Design', 'CRUD Operations', 'Data Management'],
  tools: ['VS Code', 'Git', 'GitHub', 'Docker', 'Python', 'Laragon', 'Android Studio'],
  mobile: ['React Native', 'Expo', 'Expo Router', 'SQLite', 'Android Development Environment', 'Mobile UI Development'],
  productivity: ['Microsoft Office', 'Google Workspace', 'Data Entry', 'Documentation', 'File Management', 'Administrative Support'],
  design: ['Canva', 'Basic UI/UX', 'Graphic Design', 'Social Media Graphics'],
  technicalSupport: ['Basic Computer Troubleshooting', 'Software Installation', 'Development Environment Setup', 'Database Setup', 'Git/GitHub Troubleshooting', 'Local Development Environment Configuration'],
};

export const services = [
  { title: 'Virtual Assistance', description: 'Provide reliable administrative and digital assistance including data entry, file organization, internet research, document preparation, spreadsheet management, and basic administrative tasks.', icon: 'briefcase' },
  { title: 'Data Entry', description: 'Accurate and organized data entry, spreadsheet management, and digital record organization.', icon: 'database' },
  { title: 'Web Development', description: 'Build responsive websites and web applications using modern frontend and backend technologies.', icon: 'code' },
  { title: 'Mobile App Development', description: 'Develop mobile application interfaces and functional application concepts using React Native and Expo.', icon: 'phone' },
  { title: 'Website Maintenance', description: 'Assist with website updates, content changes, troubleshooting, and basic maintenance.', icon: 'wrench' },
  { title: 'Basic IT Support', description: 'Assist with software installation, development environment setup, troubleshooting, and basic technical issues.', icon: 'monitor' },
  { title: 'Database Management', description: 'Work with MySQL and SQLite for data storage, CRUD operations, and application databases.', icon: 'server' },
  { title: 'Graphic Design', description: 'Create simple professional graphics, layouts, social media materials, and digital content.', icon: 'palette' },
  { title: 'Administrative Support', description: 'Assist with documents, spreadsheets, organization, research, and other digital administrative tasks.', icon: 'clipboard' },
];

// Set `image` to an assetUrl('/images/projects/<file>.png') path once a
// screenshot is available. Until then the card renders its gradient fallback.
export const projects = [
  { id: 1, title: 'Salon Management System', type: 'web', tags: ['Web', 'Database', 'Laravel', 'System Development'], tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Laravel'], desc: 'A management system designed to help salons organize customers, appointments, services, payments, and business records.', visual: 'salon', image: null, features: ['CRUD Operations', 'Database Management', 'Customer Records', 'Appointment Management', 'Service Management', 'Organized Business Records'] },
  { id: 2, title: 'Academic Advising & Student Monitoring System', type: 'web', tags: ['Web', 'React', 'Database', 'Academic', 'System Development'], tech: ['React', 'JavaScript', 'HTML', 'CSS'], desc: 'A system concept designed to help educational institutions organize student advising, academic monitoring, and student records.', visual: 'academic', image: null, features: ['Student Management', 'Academic Monitoring', 'Data Organization', 'User Interface Design', 'Database Integration'] },
  { id: 3, title: 'Campus News App', type: 'mobile', tags: ['Mobile', 'React Native', 'Academic'], tech: ['React Native', 'Expo', 'JavaScript', 'SQLite', 'Expo Router'], desc: 'A mobile application concept designed to provide students with convenient access to campus news, announcements, and updates.', visual: 'news', image: null, features: ['Mobile UI', 'Navigation', 'Local Database', 'News Content', 'Responsive Mobile Interface'] },
  { id: 4, title: 'DisasterAid System', type: 'web', tags: ['Web', 'Database', 'Laravel', 'System Development'], tech: ['Laravel', 'PHP', 'MySQL', 'Docker', 'HTML', 'CSS', 'JavaScript'], desc: 'A disaster assistance system concept designed to organize disaster-related information, assistance requests, and community support activities.', visual: 'aid', image: null, features: ['Information Management', 'Database Operations', 'System Architecture', 'Web Application Development', 'Docker-based Development Environment'] },
  { id: 5, title: 'Mini LLM Development Experiment', type: 'ai', tags: ['Python', 'Academic', 'Learning Project'], tech: ['Python', 'PyTorch', 'Git', 'GitHub'], desc: 'A learning project focused on understanding the fundamentals of training and running a small language model using Python and machine learning libraries.', visual: 'llm', image: null, features: ['Python Development', 'Virtual Environments', 'Machine Learning Experimentation', 'Model Training Concepts', 'Troubleshooting Dependencies', 'Working with Open-source Repositories'] },
];

export const filters = ['All', 'Web', 'Mobile', 'Database', 'Laravel', 'React', 'React Native', 'Academic', 'System Development'];

export const devEnvironments = ['Windows Development', 'VS Code', 'Laragon', 'MySQL', 'Docker', 'WSL', 'Android Studio', 'Git Bash', 'PowerShell', 'Node.js/npm', 'Composer', 'Python Virtual Environments'];

export const designSkills = ['Responsive Web Design', 'Mobile UI Design', 'Clean Interface Layouts', 'Basic UI/UX Principles', 'Canva', 'Graphic Design', 'Social Media Graphics', 'Visual Hierarchy', 'User-friendly Interfaces'];

export const docSkills = ['Project Documentation', 'System Documentation', 'Installation Guides', 'Setup Instructions', 'Technical Notes', 'README Files', 'Project Descriptions', 'User-oriented Instructions'];

export const toolsList = ['VS Code', 'Git', 'GitHub', 'Laravel', 'PHP', 'MySQL', 'SQLite', 'React', 'React Native', 'Expo', 'JavaScript', 'HTML', 'CSS', 'Docker', 'Laragon', 'Android Studio', 'Canva', 'Microsoft Office', 'Google Workspace', 'Windows', 'WSL', 'PowerShell', 'Node.js', 'Composer'];

export const strengths = ['Problem Solving', 'Communication', 'Time Management', 'Organization', 'Attention to Detail', 'Teamwork', 'Independent Learning', 'Adaptability', 'Technical Research', 'Troubleshooting'];

export const whyHireMe = [
  { title: 'Reliable', description: 'Committed to completing assigned tasks responsibly.' },
  { title: 'Fast Learner', description: 'Learns unfamiliar tools through research and hands-on practice.' },
  { title: 'Detail-Oriented', description: 'Focused on accuracy, organization, and quality.' },
  { title: 'Tech-Savvy', description: 'Comfortable with development and productivity tools.' },
  { title: 'Adaptable', description: 'Adjusts to different tasks, technologies, and workflows.' },
  { title: 'Hardworking', description: 'Approaches tasks with consistency and willingness to improve.' },
];
