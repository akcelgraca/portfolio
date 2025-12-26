// src/app/data.ts

export const profile = {
  name: "Akcel Soares da Graça",
  role: "Estudante de Eng. Informática | Full Stack Dev",
  bio: "Apaixonado por código limpo, arquitetura de software e resolver problemas complexos.",
  social: {
    github: "https://github.com/akcelgraca",
    linkedin: "https://www.linkedin.com/in/akcel-graça-84a948203/",
    email: "akceldagraca@gmail.com"
  }
};

export const projects = [
  {
    title: "Sistema de Gestão Escolar",
    desc: "Plataforma web para gestão de notas e alunos usando arquitetura MVC.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    repo: "https://github.com/...",
    demo: "https://demo-link..."
  },
  {
    title: "Algoritmo de Pathfinding",
    desc: "Visualizador de algoritmos de busca (A*, Dijkstra) em tempo real.",
    tech: ["Python", "PyGame", "Algoritmos"],
    repo: "https://github.com/...",
    demo: null // Projeto sem live demo
  },
  // Adiciona mais projetos aqui
];

export const skills = ["JavaScript/TypeScript", "React", "Node.js", "C++", "SQL", "Git", "Docker"];