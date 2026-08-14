export const profile = {
  name: "Akcel Graça",
  first: "Akcel",
  last: "Graça",
  role: "Full-stack developer",
  place: "Coimbra, Portugal",
  lead:
    "I work across the whole stack — the database underneath, the API in the middle, and the screens people actually tap. Most recently on iOS and Android.",
  about: [
    "I'm in my third year of Computer Engineering at the University of Coimbra, graduating in 2027. I build on both sides of the API: PostgreSQL schemas and REST services on one end, React and mobile screens on the other, and I move between them in the same afternoon.",
    "The work below covers most of that range — a social fitness app shipping on iOS and Android, a transit system on a PostgreSQL core, concurrent services in C, and a machine-learning pipeline. Different layers, same habit: get the data model right, then make it feel obvious on screen.",
  ],
  statement:
    "A feature isn't finished at the API. It's finished when someone taps it on their phone and it just works.",
  social: {
    github: "https://github.com/akcelgraca",
    linkedin: "https://www.linkedin.com/in/akcel-graça-84a948203/",
    email: "gracaakcel@gmail.com",
  },
};

export const projects = [
  {
    course: "Personal project",
    title: "Cadence Club",
    desc: "A social fitness app for iOS and Android: live GPS tracking with pace, splits and elevation, weekly training plans generated from each runner's goal, a community feed, and route building on Mapbox. Supabase carries auth, data and storage; activities sync to Apple Health and Health Connect, and queue on the device when the signal drops.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Mapbox", "Zustand"],
    // repositório privado — pôr o URL aqui quando ficar público
    repo: "",
  },
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
    // repositório privado — pôr o URL aqui quando ficar público
    repo: "",
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
  { group: "Front-end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Mobile", items: ["React Native", "Expo", "Expo Router", "Mapbox"] },
  { group: "Back-end", items: ["Python", "Java", "PHP", "REST APIs", "Supabase", "JWT"] },
  { group: "Data", items: ["PostgreSQL", "SQL", "Pandas", "NumPy", "Scikit-Learn"] },
  { group: "Systems", items: ["C", "Linux / POSIX", "IPC", "Pthreads", "Sockets", "TCP / UDP"] },
  { group: "Tools", items: ["Git", "Docker", "Jest", "UML"] },
];
