"use client";

import { useEffect, useRef, useState } from "react";
import { dictionaries, type Locale } from "@/lib/i18n";
import "./ProjectArtwork.css";

export function ProjectArtwork({
  artwork,
  name,
  id,
  index,
  locale,
}: {
  artwork: string;
  name: string;
  id: string;
  index: number;
  locale: Locale;
}) {
  const t = dictionaries[locale];
  const element = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const target = element.current;
    if (!target) return;
    let inView = false;
    const update = () => setVisible(inView && !document.hidden);
    // Hidden cards and background tabs should not spend time animating demos.
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        update();
      },
      { threshold: 0.1 },
    );
    observer.observe(target);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <div
      ref={element}
      className={`project-art art-${id} refined-art`}
      data-playing={visible && !paused}
    >
      <span className="art-cross" aria-hidden="true">
        +
      </span>
      {/* Artwork is checked-in synthetic content; repository/API text never becomes HTML. */}
      <div
        className="art-contents"
        role="img"
        aria-label={`${name} ${t.conceptAlt}`}
        dangerouslySetInnerHTML={{ __html: artwork }}
      />
      <span className="art-note">
        {t.concept} / {String(index + 1).padStart(2, "0")}
      </span>
      <button
        className="demo-motion"
        type="button"
        aria-label={`${name}: ${paused ? t.resume : t.pause}`}
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          {paused ? (
            <path d="m5 3 8 5-8 5Z" />
          ) : (
            <path d="M4 3h3v10H4zm5 0h3v10H9z" />
          )}
        </svg>
      </button>
      <span className="demo-cycle" aria-hidden="true">
        <i />
      </span>
    </div>
  );
}
