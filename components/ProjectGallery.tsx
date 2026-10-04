"use client";
import { useState, type CSSProperties } from "react";
import type { Category, Project } from "@/lib/projects";
import { illustrations } from "@/lib/illustrations";

const filters: { value: "all" | Category; label: string }[] = [
  { value: "all", label: "全部作品" },
  { value: "desktop", label: "桌面应用" },
  { value: "web", label: "Web 工具" },
  { value: "extension", label: "浏览器扩展" },
  { value: "play", label: "交互实验" },
];
const Arrow = () => <span aria-hidden="true">↗</span>;

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const visibleFilters = filters.filter(
    (item) =>
      item.value === "all" ||
      projects.some((project) => project.category === item.value),
  );
  const count = projects.filter(
    (project) => filter === "all" || project.category === filter,
  ).length;
  return (
    <>
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label="按项目类型筛选">
          {visibleFilters.map((item) => (
            <button
              key={item.value}
              type="button"
              data-filter={item.value}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
              {item.value === "all" && <span>{projects.length}</span>}
            </button>
          ))}
        </div>
        <span
          className="results-count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {count} 件作品
        </span>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            data-category={project.category}
            hidden={filter !== "all" && project.category !== filter}
            style={{ "--project-color": project.color } as CSSProperties}
          >
            {illustrations[project.id] && (
              <div
                className={`project-art art-${project.id}`}
                role="img"
                aria-label={`${project.name} 概念插画，并非产品截图`}
              >
                <span className="art-cross">+</span>
                {/* Only checked-in artwork is allowed here; repository/API content never becomes HTML. */}
                <div
                  className="art-contents"
                  dangerouslySetInnerHTML={{
                    __html: illustrations[project.id],
                  }}
                />
                <span className="art-note">
                  CONCEPT / {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            )}
            <div className="project-info">
              <div className="project-meta">
                <span>{project.label}</span>
                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {project.id.toUpperCase()}
                </span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-headline">{project.headline}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags" aria-label="项目特点">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.action}
                    <Arrow />
                  </a>
                )}
                {project.repository && (
                  <a
                    className={project.url ? "source-link" : undefined}
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      project.url ? `${project.name} GitHub 仓库` : undefined
                    }
                  >
                    {project.url ? "GitHub" : project.action}
                    <Arrow />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {count === 0 && (
        <p className="empty-projects">
          这个分类的作品还在路上，先看看其他作品吧。
        </p>
      )}
    </>
  );
}
