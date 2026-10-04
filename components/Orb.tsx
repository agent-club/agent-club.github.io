"use client";
import { useEffect, useRef, useState } from "react";

export function Orb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const toggleRef = useRef<(() => void) | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let stopped = reduced.matches;
    let inView = true;
    let frame = 0;
    let angle = 0;
    let previous = 0;
    let width = 0;
    let height = 0;

    function project(x: number, y: number, z: number, rotation: number) {
      const rx = x * Math.cos(rotation) + z * Math.sin(rotation);
      const rz = -x * Math.sin(rotation) + z * Math.cos(rotation);
      const tilt = -0.38;
      const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
      const depth = y * Math.sin(tilt) + rz * Math.cos(tilt);
      const perspective = 3.5 / (3.5 + depth);
      const scale = Math.min(width, height) * 0.32;
      return {
        x: width * 0.51 + rx * scale * perspective,
        y: height * 0.48 + ry * scale * perspective,
      };
    }

    function draw() {
      if (!ctx || !width || !height) return;
      ctx.clearRect(0, 0, width, height);
      function trace(
        points: { x: number; y: number }[],
        alpha: number,
        lineWidth = 0.65,
      ) {
        if (!ctx) return;
        ctx.beginPath();
        points.forEach((point, index) =>
          index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y),
        );
        ctx.strokeStyle = `rgba(183,239,119,${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
      for (let latitude = 1; latitude < 19; latitude++) {
        const phi = (Math.PI * latitude) / 19;
        const points = Array.from({ length: 91 }, (_, n) => {
          const theta = (Math.PI * 2 * n) / 90;
          const radius =
            1 + 0.095 * Math.cos(theta * 3 + phi * 4 + angle * 0.2);
          return project(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta),
            angle,
          );
        });
        trace(points, 0.31);
      }
      for (let longitude = 0; longitude < 27; longitude++) {
        const theta = (Math.PI * 2 * longitude) / 27;
        const points = Array.from({ length: 65 }, (_, n) => {
          const phi = (Math.PI * n) / 64;
          const radius =
            1 + 0.095 * Math.cos(theta * 3 + phi * 4 + angle * 0.2);
          return project(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta),
            angle,
          );
        });
        trace(points, 0.22);
      }
      for (let ring = 0; ring < 2; ring++) {
        const points = Array.from({ length: 121 }, (_, n) => {
          const theta = (Math.PI * 2 * n) / 120;
          return project(
            1.47 * Math.cos(theta),
            Math.sin(theta) * (ring ? 0.62 : -0.32),
            1.15 * Math.sin(theta),
            angle * 0.2 + ring * 1.2,
          );
        });
        trace(points, 0.34, 0.7);
        const point = points[Math.floor((angle * 12 + ring * 57) % 120)];
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#bcf77b";
        ctx.fill();
      }
      // Stable stars preserve the composition through pause and resize.
      for (let n = 1; n < 40; n++) {
        const x = (((n * 127.3) % 100) / 100) * width;
        const y = (((n * 79.7) % 100) / 100) * height * 0.9;
        ctx.fillStyle = n % 3 ? "#b3d6923b" : "#b3d69288";
        ctx.fillRect(x, y, n % 3 ? 1 : 2, n % 3 ? 1 : 2);
      }
    }

    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      // Decorative motion needs no more than 2× resolution on Retina screens.
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }
    function tick(time: number) {
      angle += Math.min((time - previous) / 1000, 0.05) * 0.12;
      previous = time;
      draw();
      frame = requestAnimationFrame(tick);
    }
    function updateMotion() {
      cancelAnimationFrame(frame);
      document.body.classList.toggle("motion-paused", stopped);
      setPaused(stopped);
      // Pause work when the hero is offscreen or the tab is hidden.
      if (!stopped && !document.hidden && inView) {
        previous = performance.now();
        frame = requestAnimationFrame(tick);
      } else draw();
    }
    toggleRef.current = () => {
      stopped = !stopped;
      updateMotion();
    };
    const preferenceChanged = () => {
      stopped = reduced.matches;
      updateMotion();
    };
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateMotion();
    });
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    reduced.addEventListener("change", preferenceChanged);
    document.addEventListener("visibilitychange", updateMotion);
    resize();
    updateMotion();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reduced.removeEventListener("change", preferenceChanged);
      document.removeEventListener("visibilitychange", updateMotion);
      document.body.classList.remove("motion-paused");
      toggleRef.current = null;
    };
  }, []);

  return (
    <>
      <div className="hero-art" aria-hidden="true">
        <div className="orb-glow" />
        <canvas ref={canvasRef} />
        <span className="orb-cross cross-top">+</span>
        <span className="orb-cross cross-bottom">+</span>
        <span className="orb-label label-top">IDEA → BUILD → REFINE</span>
        <div className="orb-caption">
          <span className="signal" /> POSSIBILITIES IN MOTION <span>001—∞</span>
        </div>
        <span className="orbit-chip chip-one">craft</span>
        <span className="orbit-chip chip-two">curiosity</span>
        <span className="orbit-chip chip-three">code</span>
      </div>
      <button
        type="button"
        className="motion-toggle"
        aria-pressed={paused}
        onClick={() => toggleRef.current?.()}
      >
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
        {paused ? "开启动效" : "暂停动效"}
      </button>
    </>
  );
}
