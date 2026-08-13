export const profile = {
  name: "Akcel Graça",
  first: "Akcel",
  last: "Graça",
  role: "Computer engineering student",
  place: "Coimbra, Portugal",
  coords: "40.2°N, 8.4°W",
  lead:
    "I build systems that run close to the machine — concurrent processes in C, database-backed services, and the security questions they raise.",
  about: [
    "I'm in my third year of Computer Engineering at the University of Coimbra, graduating in 2027. Most of what I've built so far lives underneath the interface: processes talking over pipes and sockets, schemas that have to stay correct under load, pipelines that turn sensor noise into a prediction.",
    "That's also what pulls me toward security. You can't defend a system you can't take apart, so I spend my time on the taking-apart part — application security and cloud security in particular.",
  ],
  statement:
    "Understanding how a system is built is the first step to understanding how it breaks.",
  social: {
    github: "https://github.com/akcelgraca",
    linkedin: "https://www.linkedin.com/in/akcel-graça-84a948203/",
    email: "gracaakcel@gmail.com",
  },
};

export const projects = [
  {
    course: "Databases",
    title: "Metro Mondego System",
    desc: "A transit network you can actually run: tickets, wallet top-ups, live trip scheduling, fare promotions and admin analytics, on a PostgreSQL core with a Python REST API in front of it.",
    tech: ["PostgreSQL", "Python", "REST API", "JWT", "Docker"],
    repo: "https://github.com/akcelgraca/Data-Bases---Metro-Mondego-System",
  },
  {
    course: "Operating systems",
    title: "Hospital Emergency Simulator",
    desc: "A hospital emergency service simulated in C, where patients, triage and doctors are separate processes. Named pipes, message queues and shared memory carry the traffic; mutexes and condition variables keep it honest.",
    tech: ["C", "Linux / POSIX", "IPC", "Shared memory", "Multithreading"],
    repo: "https://github.com/akcelgraca/ProjetoUrgenciaSO",
  },
  {
    course: "Computer networks",
    title: "Online Class & News Service",
    desc: "A distributed client–server system in C that runs classes and broadcasts news in real time. TCP handles control, UDP handles administration, IP multicast handles the stream, and pthreads keep it all concurrent.",
    tech: ["C", "TCP / UDP", "IP multicast", "Pthreads", "Sockets"],
    repo: "https://github.com/akcelgraca/Redes",
  },
  {
    course: "Object-oriented programming",
    title: "Financial Management System",
    desc: "Invoice and client management in Java, designed from UML upward. The interesting part is the VAT engine — rates change by location and product type, so the rules had to stay separate from the objects that apply them.",
    tech: ["Java", "OOP", "UML", "Design patterns"],
    repo: "https://github.com/akcelgraca/poofinancialservices",
  },
  {
    course: "Machine learning",
    title: "Human Activity Recognition",
    desc: "An end-to-end pipeline that reads inertial sensor data and tells walking from sitting from climbing stairs. Feature engineering first, then PCA to cut the dimensions, then SMOTE to fix what the class balance broke.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    repo: "https://github.com/akcelgraca/ECACficha1",
  },
];

export const toolkit = [
  { group: "Languages", items: ["C", "Java", "Python", "JavaScript", "PHP", "SQL"] },
  {
    group: "Systems",
    items: ["Linux / POSIX", "IPC", "Pthreads", "Sockets", "TCP / UDP", "IP multicast"],
  },
  { group: "Data", items: ["PostgreSQL", "REST APIs", "JWT", "Scikit-Learn", "Pandas", "NumPy"] },
  { group: "Web", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Tools", items: ["Git", "Docker", "UML"] },
];
