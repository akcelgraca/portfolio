import { profile, projects, skills } from './data';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-200 selection:bg-teal-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24 flex flex-col justify-center min-h-[60vh]">
        <p className="text-teal-400 font-mono mb-4">Olá, o meu nome é</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6">{profile.name}.</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">{(profile as any).role}</h2>
        <p className="max-w-xl text-slate-400 text-lg leading-relaxed mb-10">
          {profile.bio}
        </p>
        <div className="flex gap-4">
          <a href={profile.social.github} target="_blank" className="px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition">
            GitHub
          </a>
          <a href={profile.social.linkedin} target="_blank" className="px-6 py-3 bg-teal-500 text-slate-900 font-bold rounded hover:bg-teal-400 transition">
            LinkedIn
          </a>
        </div>
      </section>

      {/* 2. SKILLS SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
          <span className="text-teal-400 mr-2">01.</span> Tecnologias
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center text-slate-400">
              <span className="text-teal-400 mr-2">▹</span> {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 mb-20">
        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
          <span className="text-teal-400 mr-2">02.</span> Projetos
        </h3>
        
        <div className="grid gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800 transition border border-slate-700 hover:border-teal-500/30 group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition">{proj.title}</h4>
                <div className="flex gap-4 text-slate-400">
                  {proj.repo && <a href={proj.repo} className="hover:text-teal-400">Code</a>}
                  {proj.demo && <a href={proj.demo} className="hover:text-teal-400">Demo</a>}
                </div>
              </div>
              <p className="text-slate-400 mb-6">{proj.desc}</p>
              <ul className="flex flex-wrap gap-3">
                {proj.tech.map((t) => (
                  <li key={t} className="text-xs font-mono text-teal-400 bg-teal-400/10 px-2 py-1 rounded">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>Desenvolvido com Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}