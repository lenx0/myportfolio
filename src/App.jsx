import { useEffect, useState } from "react";
import { profile, projects, experiences, stack } from "./data";

const nav = [
  ["projetos", "Projetos"],
  ["experiencia", "Experiência"],
  ["sobre", "Sobre"],
  ["contato", "Contato"],
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function Header() {
  const [theme, toggle] = useTheme();
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#" className="logo">tb<span>.</span></a>
        <nav>
          {nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          <button onClick={toggle} aria-label="Alternar tema" className="theme-btn">
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="wrap hero">
      <div>
        <p className="mono muted">{profile.location}</p>
        <h1>Olá, sou o Thiago.<br /><span className="muted">{profile.role}.</span></h1>
        <p className="lead">{profile.intro}</p>
        <div className="actions">
          <a className="btn primary" href="#projetos">Ver projetos</a>
          <a className="btn" href={profile.links.cv} download>Baixar currículo</a>
          <a className="text-link" href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="text-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <img className="avatar" src={profile.photo} alt={profile.name} />
    </section>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="wrap section">
      <p className="mono accent">{label}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Gallery({ project, onClose }) {
  const [i, setI] = useState(0);
  const n = project.images.length;
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((v) => (v + 1) % n);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + n) % n);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [n, onClose]);
  return (
    <div className="lightbox" onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={project.images[i]} alt={`${project.title} — imagem ${i + 1}`} />
        <figcaption>
          <span>{project.title} <span className="muted">{i + 1}/{n}</span></span>
          <span className="lb-controls">
            {n > 1 && <button onClick={() => setI((i - 1 + n) % n)}>←</button>}
            {n > 1 && <button onClick={() => setI((i + 1) % n)}>→</button>}
            <button onClick={onClose}>Fechar</button>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

function Projects() {
  const [open, setOpen] = useState(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <Section id="projetos" label="01 — Projetos" title="Trabalhos selecionados">
      <div className="grid">
        {featured.map((p) => (
          <article key={p.title} className={p.wide ? "card wide" : "card"}>
            <button className="thumb" onClick={() => setOpen(p)} aria-label={`Ampliar imagens de ${p.title}`}>
              <img src={p.images[0]} alt="" loading="lazy" />
              {p.images.length > 1 && <span className="count mono">{p.images.length} imagens</span>}
            </button>
            <div className="card-body">
              <div className="row">
                <h3>{p.title}</h3>
                <span className="mono muted small">{p.year}</span>
              </div>
              <p>{p.description}</p>
              {p.parts && (
                <dl className="parts">
                  {p.parts.map((x) => (
                    <div key={x.name}>
                      <dt>{x.name}</dt>
                      <dd>{x.text}</dd>
                      <dd className="mono muted small">{x.stack}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {p.stack.length > 0 && <p className="mono muted small">{p.stack.join(" · ")}</p>}
              <a className="text-link" href={p.url} target="_blank" rel="noreferrer">{p.parts ? "Conhecer o produto ↗" : "Abrir projeto ↗"}</a>
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead">Outros projetos</h3>
      <ul className="list">
        {others.map((p) => (
          <li key={p.title}>
            <button className="mini-thumb" onClick={() => setOpen(p)} aria-label={`Ampliar imagens de ${p.title}`}>
              <img src={p.images[0]} alt="" loading="lazy" />
            </button>
            <div className="list-main">
              <a href={p.url} target="_blank" rel="noreferrer"><strong>{p.title}</strong> ↗</a>
              <p className="muted">{p.description}</p>
            </div>
            <span className="mono muted small list-meta">{p.stack.join(" · ")}</span>
          </li>
        ))}
      </ul>
      {open && <Gallery project={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experiencia" label="02 — Experiência" title="Onde trabalhei">
      <ol className="timeline">
        {experiences.map((e) => (
          <li key={e.role + e.company}>
            <span className="mono muted small">{e.period}</span>
            <div>
              <h3>{e.role} <span className="accent">@ {e.company}</span></h3>
              <p>{e.description}</p>
              <ul className="tags">{e.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function About() {
  return (
    <Section id="sobre" label="03 — Sobre" title="Um pouco mais">
      <div className="about">
        <div>{profile.about.map((t) => <p key={t}>{t}</p>)}</div>
        <dl className="stack">
          {stack.map((g) => (
            <div key={g.group}>
              <dt className="mono small accent">{g.group}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contato" label="04 — Contato" title="Vamos conversar?">
      <p className="lead">Estou aberto a novas oportunidades e a projetos freelance. A forma mais rápida de falar comigo é por e-mail.</p>
      <a className="big-link" href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </span>
      </footer>
    </>
  );
}
