export const profile = {
  name: "Mahsa Rastegh",
  fullName: "Mahsa Rastegh Ghezelbash",
  title: "Software Developer",
  tagline:
    "Third-year Software Development student building clean, functional software with a focus on backend and thoughtful interface design.",
  location: "Tehran, Iran",
  email: "mahsarastin81@gmail.com",
  cvUrl: "/Mahsa-Rastegh-CV.pdf",
  phones: ["+905314820862", "+909198874237"],
  university: "Yeditepe University",
  degree: "Software Development",
  year: "3rd year · since 2023",
  age: 24,
}

export const aboutText =
  "I am a third-year Software Development student at Yeditepe University with a strong foundation in software engineering principles and backend development. Eager to gain hands-on experience through a professional internship environment."

export const educationText =
  "Throughout my studies, I have completed a range of core courses that have provided me with a strong foundation in both theoretical and practical aspects of software engineering — Data Structures and Algorithms, Database Systems, Object-Oriented Programming, Design Patterns, Structural Programming, Computer Networking, Software Development Process, and web development fundamentals including JavaScript, HTML, and CSS."

export const courses = [
  "Data Structures & Algorithms",
  "Database Systems",
  "Object-Oriented Programming",
  "Design Patterns",
  "Computer Networking",
  "Software Development Process",
  "JavaScript, HTML & CSS",
]

export type Project = {
  title: string
  type: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: "Quiz Game",
    type: "Individual · JavaScript",
    description:
      "Designed and fully implemented a quiz game with categorized questions and answer evaluation logic to control game flow.",
    tags: ["JavaScript", "Game Logic", "UI"],
  },
  {
    title: "Software Development Process",
    type: "Group · Figma",
    description:
      "Contributed to a group project by designing the system structure and creating the UI/UX in Figma, focusing on usability and clean interface design.",
    tags: ["Figma", "UI/UX", "System Design"],
  },
]

export const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "C", "C#", "JavaScript"],
  },
  {
    label: "Web & Backend",
    items: ["HTML", "CSS", "Backend Development", "Networking"],
  },
  {
    label: "Data & Design",
    items: ["Databases", "Figma"],
  },
]

export type Language = {
  name: string
  level: string
}

export const languages: Language[] = [
  { name: "English", level: "Academic certificate" },
  { name: "Turkish", level: "Native" },
  { name: "Persian", level: "Native" },
  { name: "German", level: "A1 · currently studying" },
]

export const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const

export type SectionId = (typeof navItems)[number]["id"]
