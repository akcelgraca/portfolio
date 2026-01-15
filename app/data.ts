// src/app/data.ts

export const profile = {
  name: "Akcel da Graça",
  bio: "Motivated Informatics Engineering student at the University of Coimbra with a strong foundation in software development and data science. Experienced in building Java applications, distributed systems in C, and implementing Machine Learning pipelines in Python.",
  social: {
    github: "https://github.com/akcelgraca",
    linkedin: "https://www.linkedin.com/in/akcel-graça-84a948203/",
    email: "mailto:akceldagraca@gmail.com" 
  }
};

export const projects = [
  { 
    title: "Hospital Emergency Simulator",
    desc: "Robust simulation of a hospital emergency service developed in C. Utilizes advanced IPC mechanisms (Named Pipes, Message Queues, Shared Memory) and synchronization (Mutexes, Condition Variables) to manage concurrent Patient, Triage, and Doctor processes in a Linux/POSIX environment.",
    tech: ["C", "Linux/POSIX", "IPC", "Multithreading", "Shared Memory"],
    repo: "https://github.com/akcelgraca/ProjetoUrgenciaSO", // ⚠️ Atualiza com o link para o repositório de Sistemas Operativos
    demo: null
  },
  {
    title: "Online Class & News Service",
    desc: "Distributed Client-Server system in C for class management and real-time news broadcasting. Implements a hybrid architecture (TCP for control, UDP for administration, IP Multicast for streaming) and uses Pthreads for concurrent processing.",
    tech: ["C", "TCP/UDP", "IP Multicast", "Pthreads", "Socket API"],
    repo: "https://github.com/akcelgraca/Redes",
    demo: null
  },
  {
    title: "Financial Management System (POOFS)",
    desc: "Java-based application for invoice and client management following OOP principles. Includes complex logic for dynamic VAT calculation (variable rates by location) and architecture designed with UML.",
    tech: ["Java", "OOP", "UML", "Design Patterns"],
    repo: "https://github.com/akcelgraca/poofinancialservices",
    demo: null
  },
  {
    title: "Human Activity Recognition (HAR) Pipeline",
    desc: "End-to-end Machine Learning pipeline to classify human activities (e.g., walking, sitting) using inertial sensor data. Includes Feature Engineering, PCA, and data balancing with SMOTE.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    repo: "https://github.com/akcelgraca/ECACficha1",
    demo: null
  }
];

export const skills = [
  "C",
  "Java", 
  "System Programming",
  "Python", 
  "Network Programming",
  "SQL", 
  "React", 
  "PHP",
  "Docker", 
  "Linux", 
  "Git",
  "Tailwind CSS",
  "Scikit-Learn",
  "JavaScript",
  "CSS",
  "HTML"
];