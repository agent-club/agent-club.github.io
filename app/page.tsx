import { SiteHeader } from "@/components/SiteHeader";
import { Orb } from "@/components/Orb";
import { ProjectGallery } from "@/components/ProjectGallery";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <SiteHeader count={projects.length} />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="signal"></span> INDEPENDENT BUILDER COLLECTIVE{" "}
              <span className="eyebrow-line"></span>
            </div>
            <h1 id="hero-title">
              Small tools.
              <br />
              <span>Big possibilities.</span>
            </h1>
            <p className="hero-lead">
              小而锋利的工具，
              <br className="mobile-break" />
              让想法走进真实生活。
            </p>
            <p className="hero-description">
              这里是 Agent Club。我们围绕智能体与真实工作流，
              <br className="desktop-break" />
              打磨实用工具，也为好奇心留一片实验场。
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                探索我们的作品 <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button-text"
                href="https://github.com/agent-club"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet the club <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-footnote">
              <span className="tiny-cross">+</span> SMALL AGENTS. SHARP TOOLS.
              REAL-WORLD WORKFLOWS.
            </div>
          </div>
          <Orb />
        </section>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>BUILT WITH CURIOSITY</span>
            <i>✳</i>
            <span>DESIGNED FOR REAL LIFE</span>
            <i>✳</i>
            <span>SMALL TOOLS, BIG POSSIBILITIES</span>
            <i>✳</i>
            <span>ALWAYS EXPLORING</span>
            <i>✳</i>
            <span>BUILT WITH CURIOSITY</span>
            <i>✳</i>
            <span>DESIGNED FOR REAL LIFE</span>
            <i>✳</i>
            <span>SMALL TOOLS, BIG POSSIBILITIES</span>
            <i>✳</i>
            <span>ALWAYS EXPLORING</span>
            <i>✳</i>
          </div>
        </div>
        <section
          id="projects"
          className="projects wrap"
          aria-labelledby="projects-title"
        >
          <div className="section-kicker">
            <span>01 / SELECTED WORK</span>
            <span>{projects.length} PROJECTS & COUNTING</span>
          </div>
          <div className="section-heading">
            <div>
              <h2 id="projects-title">
                好想法，<span>正在发生。</span>
              </h2>
              <p>解决一点日常的不顺手，也创造一点意料之外的快乐。</p>
            </div>
            <a
              className="all-repos"
              href="https://github.com/agent-club?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              浏览公开仓库 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ProjectGallery projects={projects} />
          <div className="more-work">
            <span className="mini-dot"></span>
            <p>这个集合，还在生长。</p>
            <a href="#next">
              下一件作品，见 <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          id="about"
          className="about wrap"
          aria-labelledby="about-title"
        >
          <div className="section-kicker">
            <span>02 / THE CLUB MINDSET</span>
            <span>CRAFT OVER HYPE</span>
          </div>
          <div className="about-intro">
            <h2 id="about-title">
              保持好奇。
              <br />
              把东西<span>做好。</span>
            </h2>
            <div>
              <p>
                我们喜欢小工具，也喜欢它们带来的大变化。
                <br />
                从屏幕上的一个操作，到工作流里的一个环节，
                <br />
                好的产品应该让人更轻松、更有掌控感。
              </p>
              <p className="about-secondary">
                Agent Club 是工具与实验的集合，也是持续探索的空间。
                <br />
                实用性是起点，细节是我们愿意多走的那一步。
              </p>
            </div>
          </div>
          <div className="principles">
            <article>
              <span className="principle-index">[ 01 ]</span>
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path d="M7 20h26M20 7v26M11 11l18 18M29 11 11 29" />
              </svg>
              <h3>从真实需求开始</h3>
              <p>
                少一点空泛的概念，多解决一个具体问题。工具够小，价值够清楚。
              </p>
            </article>
            <article>
              <span className="principle-index">[ 02 ]</span>
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <rect x="8" y="8" width="24" height="24" rx="2" />
                <path d="M15 20h10M20 15v10" />
              </svg>
              <h3>让人保持掌控</h3>
              <p>
                关注本地处理与清晰的操作边界，让人知道发生了什么，并决定下一步。
              </p>
            </article>
            <article>
              <span className="principle-index">[ 03 ]</span>
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path d="m8 29 9-18 6 13 9-13M8 32h24" />
              </svg>
              <h3>为长期使用打磨</h3>
              <p>
                让体验经得起每一天的使用。持续验证，也持续修正那些不顺手的细节。
              </p>
            </article>
          </div>
        </section>
        <section id="next" className="next wrap" aria-labelledby="next-title">
          <div className="next-panel">
            <div className="next-top">
              <span>
                <span className="signal"></span> THE NEXT CHAPTER
              </span>
              <span>OPEN ENDED, BY DESIGN</span>
            </div>
            <h2 id="next-title">
              The next idea
              <br />
              could be <em>anything.</em>
              <span className="next-star" aria-hidden="true">
                ✳
              </span>
            </h2>
            <div className="next-bottom">
              <p>
                更多工具，更多实验，更多可能。
                <br />
                下一个好想法，我们一起见证。
              </p>
              <a
                className="button-primary"
                href="https://github.com/agent-club"
                target="_blank"
                rel="noopener noreferrer"
              >
                在 GitHub 关注我们 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div className="footer-top">
          <a className="brand" href="#" aria-label="返回 Agent Club 首页">
            <span>
              agent<span className="brand-light">club</span>
              <span className="brand-dot">.</span>
            </span>
          </a>
          <p>Small agents. Sharp tools. Real-world workflows.</p>
          <a
            href="https://github.com/agent-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a href="#projects">作品集 ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getUTCFullYear()} Agent Club</span>
          <span>MADE WITH CURIOSITY & A LITTLE BIT OF CODE.</span>
          <span>
            KEEP BUILDING <span className="mini-dot"></span>
          </span>
        </div>
      </footer>
    </>
  );
}
