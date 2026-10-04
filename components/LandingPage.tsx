import { SiteHeader } from "@/components/SiteHeader";
import { Orb } from "@/components/Orb";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getProjects } from "@/lib/projects";
import { dictionaries, type Locale } from "@/lib/i18n";

export function LandingPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const projects = getProjects(locale);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <SiteHeader count={projects.length} locale={locale} />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="signal"></span> {t.eyebrow}{" "}
              <span className="eyebrow-line"></span>
            </div>
            <h1 id="hero-title">
              {t.title[0]}
              <br />
              <span>{t.title[1]}</span>
            </h1>
            <p className="hero-lead">{t.lead}</p>
            <p className="hero-description">{t.heroDescription}</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                {t.explore} <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button-text"
                href="https://github.com/agent-club"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.meet} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-footnote">
              <span className="tiny-cross">+</span> {t.footnote}
            </div>
          </div>
          <Orb locale={locale} />
        </section>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...t.ticker, ...t.ticker].map((label, index) => (
              <span className="ticker-item" key={index}>
                {label}
                <i>✳</i>
              </span>
            ))}
          </div>
        </div>
        <section
          id="projects"
          className="projects wrap"
          aria-labelledby="projects-title"
        >
          <div className="section-kicker">
            <span>{t.selected}</span>
            <span>
              {projects.length} {t.counting}
            </span>
          </div>
          <div className="section-heading">
            <div>
              <h2 id="projects-title">
                {t.workTitle[0]} <span>{t.workTitle[1]}</span>
              </h2>
              <p>{t.workDescription}</p>
            </div>
            <a
              className="all-repos"
              href="https://github.com/agent-club?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.repositories} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ProjectGallery projects={projects} locale={locale} />
          <div className="more-work">
            <span className="mini-dot"></span>
            <p>{t.more}</p>
            <a href="#next">
              {t.nextProject} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          id="about"
          className="about wrap"
          aria-labelledby="about-title"
        >
          <div className="section-kicker">
            <span>{t.mindset}</span>
            <span>{t.craftOverHype}</span>
          </div>
          <div className="about-intro">
            <h2 id="about-title">
              {t.aboutTitle[0]}
              <br />
              {t.aboutTitle[1]} <span>{t.aboutTitle[2]}</span>
            </h2>
            <div>
              <p>{t.aboutBody}</p>
              <p className="about-secondary">{t.aboutSecondary}</p>
            </div>
          </div>
          <div className="principles">
            <article>
              <span className="principle-index">[ 01 ]</span>
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path d="M7 20h26M20 7v26M11 11l18 18M29 11 11 29" />
              </svg>
              <h3>{t.principles[0].title}</h3>
              <p>{t.principles[0].body}</p>
            </article>
            <article>
              <span className="principle-index">[ 02 ]</span>
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <rect x="8" y="8" width="24" height="24" rx="2" />
                <path d="M15 20h10M20 15v10" />
              </svg>
              <h3>{t.principles[1].title}</h3>
              <p>{t.principles[1].body}</p>
            </article>
            <article>
              <span className="principle-index">[ 03 ]</span>
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path d="m8 29 9-18 6 13 9-13M8 32h24" />
              </svg>
              <h3>{t.principles[2].title}</h3>
              <p>{t.principles[2].body}</p>
            </article>
          </div>
        </section>
        <section id="next" className="next wrap" aria-labelledby="next-title">
          <div className="next-panel">
            <div className="next-top">
              <span>
                <span className="signal"></span> {t.nextKicker}
              </span>
              <span>{t.openEnded}</span>
            </div>
            <h2 id="next-title">
              {t.nextTitle[0]}
              <br />
              {t.nextTitle[1]} <em>{t.nextTitle[2]}</em>
              <span className="next-star" aria-hidden="true">
                ✳
              </span>
            </h2>
            <div className="next-bottom">
              <p>
                {t.nextBody[0]}
                <br />
                {t.nextBody[1]}
              </p>
              <a
                className="button-primary"
                href="https://github.com/agent-club"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.follow} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div className="footer-top">
          <a className="brand" href="#" aria-label={t.home}>
            <span>
              agent<span className="brand-light">club</span>
              <span className="brand-dot">.</span>
            </span>
          </a>
          <p>{t.footnote}</p>
          <a
            href="https://github.com/agent-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a href="#projects">{t.backToWork} ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getUTCFullYear()} Agent Club</span>
          <span>{t.madeWith}</span>
          <span>
            {t.keepBuilding} <span className="mini-dot"></span>
          </span>
        </div>
      </footer>
    </>
  );
}
