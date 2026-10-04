"use client";
import { useEffect, useRef, useState } from "react";

export function SiteHeader({ count }: { count: number }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        !event.target.closest(".site-header")
      )
        setOpen(false);
    };
    const media = matchMedia("(max-width:700px)");
    const close = () => setOpen(false);
    document.addEventListener("keydown", escape);
    document.addEventListener("click", outside);
    media.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("click", outside);
      media.removeEventListener("change", close);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#" aria-label="Agent Club 首页">
          <svg className="brand-icon" viewBox="0 0 40 40" aria-hidden="true">
            <path
              d="m4 30 13-24h9L13 30zm18 0L35 6h5L27 30z"
              fill="currentColor"
            />
            <path d="M13 25h18" stroke="currentColor" strokeWidth="4" />
          </svg>
          <span>
            agent<span className="brand-light">club</span>
            <span className="brand-dot">.</span>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="navigation"
          aria-label="主导航"
          data-open={open}
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a"))
              setOpen(false);
          }}
        >
          <a href="#projects">
            作品集 <span className="nav-count">{count}</span>
          </a>
          <a href="#about">关于我们</a>
          <a href="#next">
            下一站 <span className="mini-dot" />
          </a>
          <a
            className="github-nav"
            href="https://github.com/agent-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
