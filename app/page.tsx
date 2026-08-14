import Image from "next/image";
import { profile, projects, toolkit } from "./data";

export default function Home() {
  return (
    <>
      <header className="masthead">
        <div className="shell masthead-inner">
          <a href="#top" className="monogram" aria-label="Akcel Graça — top of page">
            AG
          </a>
          <nav className="masthead-nav tag" aria-label="Sections">
            <a className="masthead-link" href="#work">
              Work
            </a>
            <a className="masthead-link" href="#toolkit">
              Toolkit
            </a>
            <a className="masthead-link" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero ---------------------------------------------------------- */}
        <section className="shell hero">
          <div className="hero-column">
            <p className="hero-eyebrow tag">
              <span>{profile.role}</span>
              <span className="dash" aria-hidden="true" />
              <span>University of Coimbra, 2027</span>
            </p>

            <h1 className="hero-name">
              <span className="line">
                <span>{profile.first}</span>
              </span>
              <span className="line">
                <span>{profile.last}</span>
              </span>
            </h1>

            <p className="hero-lead">{profile.lead}</p>

            <div className="hero-actions">
              <a className="button" href="#work">
                See the work
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="textlink" href={profile.social.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                className="textlink"
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="plate">
            <figure className="plate-figure">
              <Image
                src="/akcel.jpg"
                alt={`Portrait of ${profile.name}`}
                width={1100}
                height={1320}
                sizes="(min-width: 900px) 24rem, 100vw"
                priority
              />
            </figure>
            <p className="plate-caption tag">
              <span>{profile.place}</span>
            </p>
          </div>
        </section>

        {/* Statement + about --------------------------------------------- */}
        <section className="band" id="about">
          <div className="shell band-inner">
            <div>
              <p className="band-tag tag">The idea I work from</p>
              <blockquote className="band-quote">
                Understanding how a system is built is the first step to{" "}
                <em>understanding how it breaks.</em>
              </blockquote>
            </div>
            <div className="band-about reveal">
              {profile.about.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Work ----------------------------------------------------------- */}
        <section className="slab" id="work">
          <div className="shell">
            <div className="slab-head">
              <h2 className="heading">Selected work</h2>
              <p className="tag">Five projects · systems, data and machine learning</p>
            </div>

            {projects.map((project) => (
              <article className="entry reveal" key={project.title}>
                <p className="entry-course tag">{project.course}</p>

                <div>
                  <h3 className="entry-title">
                    <a
                      className="entry-link"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title}
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="entry-desc">{project.desc}</p>
                </div>

                <ul className="entry-tech tag">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Toolkit -------------------------------------------------------- */}
        <section className="slab slab-mist" id="toolkit">
          <div className="shell">
            <div className="slab-head">
              <h2 className="heading">Toolkit</h2>
              <p className="tag">What I reach for, by job</p>
            </div>

            <dl className="kit">
              {toolkit.map((row) => (
                <div className="kit-row reveal" key={row.group}>
                  <dt className="tag">{row.group}</dt>
                  <dd>
                    {row.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact -------------------------------------------------------- */}
        <section className="contact" id="contact">
          <div className="shell">
            <p className="tag">Open to internships and graduate roles</p>
            <a className="contact-mail" href={`mailto:${profile.social.email}`}>
              {profile.social.email}
            </a>
            <div className="contact-rail">
              <a href={profile.social.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={`mailto:${profile.social.email}`}>Email ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="colophon">
        <div className="shell colophon-inner tag">
          <span>© {new Date().getFullYear()} Akcel Graça</span>
        </div>
      </footer>
    </>
  );
}
