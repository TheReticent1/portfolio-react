export const projectData = [
  {
    name: "Portfolio",
    description:
      "I designed and developed a personal portfolio website to showcase my skills, projects, and provide an introduction about myself. The website demonstrates my ability to create responsive and dynamic user interfaces using React, JavaScript, HTML, and CSS.",
    roles: [
      "Designed and developed the overall layout and UI components of the portfolio website",
      "Built and implemented interactive features using React to enhance user experience",
      "Ensured the website was responsive and optimized for various screen sizes and devices",
      "Wrote clean, maintainable code in JavaScript and styled components with CSS",
      "Integrated sections like About Me, Skills, Projects, and Contact Form",
      "Managed state and routing within the application using React hooks and React Router",
    ],
    skills: [
      { skillName: "React", rating: "7", class: "react" },
      { skillName: "JavaScript", rating: "7", class: "js" },
      { skillName: "HTML", rating: "8", class: "html" },
      { skillName: "CSS", rating: "7", class: "css" },
    ],
    projectDate: "January 2025", // Example: the date when the project was completed
    technologiesUsed: ["React.js", "JavaScript", "HTML", "CSS"], // List of technologies used
    outcome:
      "Successfully built a fully responsive and interactive personal portfolio website that showcases my work, technical skills, and passion for web development.",
    collaboration: "Individual project", // Since you worked on it alone
    challenges:
      "Faced challenges in ensuring smooth responsiveness across multiple devices and implementing dynamic state management with React hooks, which I overcame by researching best practices and applying them.",
    links: {
      repo: "https://github.com/yourusername/portfolio", // Link to GitHub repo (example)
      demo: "https://yourportfolio.com", // Link to live demo (example)
    },
    projectType: "Personal", // It’s a personal project
    duration: "1 month", // Example: time spent working on the project
    toolsUsed: ["VS Code", "Git", "GitHub"], // Example tools you used
  },
];

export const timelineObject = [
  {
    year: "2025 - Persent",
    heading: "Job Hunting",
    description: [
      "Seeking an entry-level React.js developer position in Pune",
      "Aim to utilize skills in JavaScript and React.js",
      "Contribute to dynamic projects",
      "Focus on continuous learning",
      "Desire to grow as part of a collaborative team",
    ],
    skills: [
      { skillName: "Javascript", rating: 7, class: "javascript" },
      { skillName: "HTML5", rating: 7, class: "html" },
      { skillName: "CSS", rating: 7, class: "css" },
      { skillName: "React", rating: 5, class: "react" },
      { skillName: "Github", rating: 6, class: "github" },
      { skillName: "MySql", rating: 7, class: "mysql" },
    ],
    projects: [projectData[0]],
  },
  {
    year: "2024",
    heading: "Internship",
    description: [
      "Passionate Full Stack Developer with hands-on internship experience",
      "Worked with React.js and Java to build dynamic, user-friendly applications",
      "Gained valuable skills in both front-end and back-end development",
      "Focused on creating seamless, responsive interfaces and efficient server-side solutions",
      "Eager to apply technical expertise and continue growing in the development field",
    ],
    skills: [
      { skillName: "Javascript", rating: 7, class: "javascript" },
      { skillName: "HTML5", rating: 7, class: "html" },
      { skillName: "CSS", rating: 7, class: "css" },
      { skillName: "React", rating: 5, class: "react" },
    ],
  },
  {
    year: "2021 - 2024",
    heading: "Engineering",
    description: [
      "Completed Engineering degree in Electronics and Telecommunication with a CGPA of 7.8",
      "Gained a strong foundation in both hardware and software concepts",
      "Developed a particular interest in programming and technology",
      "Equipped with problem-solving skills and a technical mindset",
      "Applying this background to a career in full-stack development",
    ],
    skills: [],
  },
  {
    year: "2018 - 2021",
    heading: "Diploma",
    description: [
      "Completed a Diploma in Information Technology",
      "Developed a solid understanding of computer science fundamentals, programming, and system design",
      "Gained a strong technical foundation through academic experience",
      "Continuing to build upon this foundation in my career as a Full Stack Developer",
      "Focused on both front-end and back-end technologies",
    ],
    skills: [],
  },
  {
    year: "2014 - 2016",
    heading: "HSC",
    description: ["Science student"],
    skills: [],
  },
  {
    year: "2013-2014",
    heading: "SSC",
    description: ["Passout from school"],
    skills: [],
  },
];
