const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 20, suffix: "+", label: "GitHub Repositories" },
  { value: 2, suffix: "", label: "Internships Completed" },
  { value: 5, suffix: "+", label: "Technical Blog Posts" },
  { value: 1500, suffix: "+", label: "Hours of Coding Practice" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 15, suffix: "+", label: "Technologies Used" },
];


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "The fellowship at NxtWave has accelerated my learning in full-stack web development. The hands-on projects and real-time feedback helped me grow as a developer.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "MERN Developer",
    date: "Sep 2024 - Present",
    responsibilities: [
      "Learning and applying MERN stack technologies through project-based training.",
      "Built responsive web apps using React, Node.js, Express, and MongoDB.",
      "Practiced version control with Git and collaborated via GitHub.",
      "Completed capstone projects simulating real-world client requirements.",
    ],
  },
  {
    review: "My internship at Varcons Technologies gave me real-world experience in building scalable full-stack applications. I worked closely with the dev team and contributed to key modules.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer Intern",
    date: "Sep 2023 – Nov 2023",
    responsibilities: [
      "Assisted in developing full-stack web applications using React.js, Node.js, and MongoDB.",
      "Collaborated with senior developers on API integration and UI development.",
      "Tested and debugged front-end components to ensure performance and responsiveness.",
      "Participated in daily stand-ups, code reviews, and deployment tasks.",
    ],
  },
  // {
  //   review: "This project showcases my skills in interactive UI design and modern web development. Built from scratch to reflect my personality and technical abilities.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "Personal Portfolio Website",
  //   date: "Feb 2025 – Present",
  //   responsibilities: [
  //     "Designed and developed a 3D interactive portfolio using React.js and Three.js.",
  //     "Implemented smooth animations and transitions for a dynamic user experience.",
  //     "Ensured responsive design and cross-browser compatibility.",
  //     "Deployed the application using Netlify (or Vercel/GitHub Pages).",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "NXTWave",
    mentions: "@nxtwave",
    review:
      "Bhanukiran has demonstrated exceptional curiosity and a drive to learn full-stack development using technologies like React, Node.js, and Express. His ability to grasp new concepts quickly and implement them in real-world projects truly stands out.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Vaishnavi Bagewadi",
    mentions: "@vaishnavi",
    review:
      "Bhanukiran was the backbone of our final year project. He took charge of backend development, database integration, and helped the team stay organized. He’s a reliable, focused, and technically strong teammate to work with.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Darshan Tawari",
    mentions: "@darshan",
    review:
      "I’ve seen Bhanukiran consistently improve his development skills through practice and personal projects. He’s always experimenting with new tools, collaborating on ideas, and refining his work. His passion for coding is truly inspiring.",
    imgPath: "/images/client2.png",
  },
  {
    name: "varcons",
    mentions: "@varcons",
    review:
      "During his summer internship, Bhanukiran showed great professionalism and a strong problem-solving mindset. He contributed meaningfully to our ongoing projects, took feedback positively, and consistently met deadlines. A promising developer with a bright future ahead.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Srinivas",
    mentions: "@srinivas",
    review:
      "Bhanukiran is a dedicated and talented developer. He has a knack for understanding complex problems and breaking them down into manageable tasks. His attention to detail and commitment to quality make him a valuable asset to any team.",
    imgPath: "/images/client4.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    path:"https://www.linkedin.com/in/bhanukiran-reddy889",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    path:"https://www.linkedin.com/in/bhanukiran-reddy889",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    path:"https://www.linkedin.com/in/bhanukiran-reddy889",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    path:"https://www.linkedin.com/in/bhanukiran-reddy889",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
