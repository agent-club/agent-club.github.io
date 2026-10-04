import type { Locale } from "./i18n";

const paths = {
  crop: "M4 1v12a3 3 0 0 0 3 3h12M1 4h12a3 3 0 0 1 3 3v12",
  pen: "m3 14 11-11 3 3L6 17l-4 1Z",
  pin: "m6 3 9 2-3 4v4l-5-1-3 3m3-3-3-5Z",
  check: "m4 10 4 4 8-8",
  search: "M9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3m5 11 4 4",
  copy: "M7 7h10v11H7ZM3 13V3h10",
  arrow: "M3 10h14m-5-5 5 5-5 5",
  calendar: "M3 5h14v13H3ZM6 2v5m8-5v5M3 9h14",
  shield: "m10 2 7 3v5c0 4-7 8-7 8S3 14 3 10V5Z",
};
function icon(key: keyof typeof paths) {
  return `<svg class="demo-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="${paths[key]}"/></svg>`;
}
const cursor = `<svg class="demo-cursor" viewBox="0 0 24 28"><path d="m3 2 17 15-8 1 3 7-4 2-3-8-5 5Z" fill="#1c2d4b" stroke="white" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
const chrome = (name: string, detail: string) =>
  `<div class="demo-chrome"><span class="demo-traffic"><i></i><i></i><i></i></span><span>${name}</span><small>${detail}</small></div>`;
const landscape = `<svg class="demo-landscape" viewBox="0 0 300 138" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="demo-sky" x2="0" y2="1"><stop stop-color="#dae9ff"/><stop offset="1" stop-color="#f6e6df"/></linearGradient><linearGradient id="demo-water" x2="0" y2="1"><stop stop-color="#89acbf"/><stop offset="1" stop-color="#b8d2d9"/></linearGradient></defs><path fill="url(#demo-sky)" d="M0 0h300v138H0Z"/><circle cx="228" cy="35" r="17" fill="#fff0cd"/><path d="M0 104 43 48 72 79 113 26 158 83 184 62 234 111Z" fill="#9ab2c8"/><path d="m78 70 35-44 26 34-20-9-9 4-11-4Z" fill="#eef2f4"/><path d="m15 109 48-29 47 31 64-59 60 54 33-34 33 33v33H0Z" fill="#648f9d"/><path d="M0 106q80 13 159 2t141 1v29H0Z" fill="url(#demo-water)"/><path d="M26 119h70m79 5h94m-157 8h60" stroke="#deeaec" opacity=".6"/><path d="m18 79-9 23h18Zm14 9-9 24h18Zm242-4-10 28h20Zm14 11-8 22h16Z" fill="#436e78"/><path d="M21 30q9-5 18 0m5-6q9-5 18 0" fill="none" stroke="#829bb6" stroke-width="1.2"/></svg>`;

// This deterministic decorative matrix illustrates QR styling, without encoding user data.
const qrCells = Array.from({ length: 441 }, (_, i) => {
  const x = i % 21,
    y = Math.floor(i / 21);
  if ((x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12)) return "";
  return (x * 17 + y * 23 + x * y * 7) % 11 < 6
    ? `<rect x="${x}" y="${y}" width="1" height="1" rx=".12"/>`
    : "";
}).join("");
const qr = `<svg class="demo-qr-code" viewBox="-2 -2 25 25"><g fill="currentColor">${qrCells}</g>${[
  [0, 0],
  [14, 0],
  [0, 14],
]
  .map(
    ([x, y]) =>
      `<g transform="translate(${x} ${y})"><rect width="7" height="7" rx="1.1" fill="currentColor"/><rect x="1" y="1" width="5" height="5" rx=".4" fill="white"/><rect x="2" y="2" width="3" height="3" rx=".25" fill="currentColor"/></g>`,
  )
  .join("")}</svg>`;

function artworks(locale: Locale): Record<string, string> {
  const en = locale === "en";
  const words = en
    ? {
        capture: "Lake study · 640 × 400",
        pin: "Pin capture",
        pinned: "Pinned to your screen",
        edit: "Write",
        preview: "Live preview",
        title: "A little room<br>for good ideas.",
        markdown: "# A little room for good ideas",
        subtitle: "A note on the art of slowing down.",
        paper: "Leave space for the things<br>that make the everyday better.",
        copy: "Copy article",
        copied: "Ready for WeChat",
        month: "OCTOBER 2026",
        calendar: "Subscribed calendar",
        day: "A day to remember",
        solar: "Solar term",
        allday: "All day",
        synced: "In your calendar",
        search: "example.org",
        grouped: "Grouped by website",
        selected: "3 selected",
        matches: "3 matching records",
        rows: [
          "A finished search",
          "An old project page",
          "Yesterday’s reference",
        ],
        privacy: "On-device processing",
        clear: "Review & clear",
        cleared: "3 records cleared",
        customize: "Customize",
        link: "Page link",
        color: "Color palette",
        export: "Export",
        ready: "Your link, ready to go",
        offline: "Generated offline",
      }
    : {
        capture: "湖畔灵感 · 640 × 400",
        pin: "贴在屏幕上",
        pinned: "已贴在屏幕上",
        edit: "写作",
        preview: "实时预览",
        title: "给好想法<br>留一点空间。",
        markdown: "# 给好想法留一点空间",
        subtitle: "一篇关于放慢脚步的随笔。",
        paper: "为日常里美好的小事，<br>留一点可以呼吸的空间。",
        copy: "复制文章",
        copied: "已准备好公众号排版",
        month: "2026 年 10 月",
        calendar: "已订阅日历",
        day: "值得记住的日子",
        solar: "节气",
        allday: "全天",
        synced: "已同步到日历",
        search: "example.org",
        grouped: "按网站分组",
        selected: "已选 3 项",
        matches: "3 条匹配记录",
        rows: ["已完成的搜索", "不再需要的旧页面", "昨天的临时参考"],
        privacy: "本机处理",
        clear: "审阅后清理",
        cleared: "已清理 3 条记录",
        customize: "自定义",
        link: "页面链接",
        color: "配色方案",
        export: "导出",
        ready: "你的链接，随时分享",
        offline: "离线生成",
      };
  const weekdays = en
    ? ["M", "T", "W", "T", "F", "S", "S"]
    : ["一", "二", "三", "四", "五", "六", "日"];
  return {
    pinboardshot: `<div class="demo-pin-stack"></div><div class="demo-window demo-pin">${chrome("PinboardShot", "⌘ ⇧ A")}<div class="demo-capture">${landscape}<div class="demo-crop"><i></i><i></i><i></i><i></i><span>640 × 400</span></div><svg class="demo-annotation" viewBox="0 0 100 50"><path d="M5 40q35-40 80-22m-13-9 13 9-17 10" pathLength="100"/></svg></div>${cursor}<div class="demo-pin-toolbar"><span>${icon("crop")}${icon("pen")}<b>T</b></span><b class="demo-action">${icon("pin")}${words.pin}</b></div></div><div class="demo-caption"><span class="demo-live-dot"></span>${words.capture}</div><div class="demo-toast demo-pin-toast">${icon("check")}${words.pinned}</div>`,
    saylit: `<div class="demo-window demo-saylit">${chrome("Saylit", "Aa")}<div class="demo-writing"><div class="demo-editor"><div class="demo-panel-label">${icon("pen")}${words.edit}<small>MD</small></div><div class="demo-type-title">${words.markdown}</div><p>${words.subtitle}</p><div class="demo-text-lines"><i></i><i></i><i></i><i></i><i></i></div><span class="demo-editor-foot">Markdown <b>↗</b></span></div><div class="demo-preview"><div class="demo-panel-label"><i></i>${words.preview}</div><div class="demo-paper"><small>${en ? "THE EVERYDAY / 01" : "日常随笔 / 01"}</small><h4>${words.title}</h4><div class="demo-paper-rule"></div><p>${words.paper}</p><div class="demo-paper-lines"><i></i><i></i><i></i></div><span>❧</span></div></div></div><div class="demo-writing-bottom"><span class="demo-theme-dots"><i></i><i></i><i></i></span><b class="demo-action">${icon("copy")}${words.copy}</b></div></div><div class="demo-toast demo-saylit-toast">${icon("check")}${words.copied}</div>`,
    daymark: `<div class="demo-calendar-sheet"></div><div class="demo-window demo-calendar">${chrome("Daymark", "↗")}<div class="demo-month"><span>${words.month}</span><span>‹ &nbsp; ›</span></div><div class="demo-calendar-grid">${weekdays.map((n) => `<span class="demo-weekday">${n}</span>`).join("")}${Array.from(
      { length: 35 },
      (_, i) => {
        const day = i - 2;
        return `<span class="${day < 1 || day > 31 ? "demo-adjacent" : day === 8 ? "demo-selected" : day === 23 ? "demo-term" : ""}">${day < 1 ? day + 30 : day > 31 ? day - 31 : day}${day === 8 ? "<i></i>" : ""}</span>`;
      },
    ).join(
      "",
    )}</div><div class="demo-calendar-events"><div><i></i><span>${words.day}<small>${words.allday}</small></span><b>08</b></div><div><i></i><span>${words.solar}<small>${en ? "23 OCT" : "10 月 23 日"}</small></span><b>☀</b></div></div></div><div class="demo-calendar-seal">${icon("calendar")}<span>10<br><small>DAYMARK</small></span></div><div class="demo-toast demo-calendar-toast">${icon("check")}${words.synced}</div>`,
    "history-sweep": `<div class="demo-window demo-sweep">${chrome("History Sweep", "⌘ K")}<div class="demo-search">${icon("search")}<span>${words.search}</span><kbd>↵</kbd></div><div class="demo-sweep-heading"><span>${words.grouped}</span><b>${words.selected}</b></div><div class="demo-site-row"><i class="demo-check">✓</i><span class="demo-favicon">a</span><span>example.org<small>${words.matches}</small></span><b>⌄</b></div><div class="demo-records">${words.rows.map((n, i) => `<div class="demo-record"><i class="demo-check">✓</i><span>${n}</span><small>${["14:32", "12:08", "09:41"][i]}</small></div>`).join("")}</div><div class="demo-sweep-bottom"><span>${icon("shield")}${words.privacy}</span><b class="demo-action">${words.clear}${icon("arrow")}</b></div>${cursor}<div class="demo-clean-state">${icon("check")}<span>${words.cleared}</span></div></div>`,
    "page-qr": `<div class="demo-window demo-qr">${chrome("Page QR", "↗")}<div class="demo-qr-body"><div class="demo-qr-preview"><div class="demo-qr-frame">${qr}<span class="demo-scan-line"></span></div><span>${words.offline}</span></div><div class="demo-qr-settings"><span class="demo-panel-label">${words.customize}</span><small>${words.link}</small><div class="demo-link-input">agentclub.dev <span>↗</span></div><small>${words.color}</small><div class="demo-swatches"><i></i><i></i><i></i><i></i></div><small>${words.export}</small><div class="demo-export-options"><b>SVG</b><span>PNG</span></div></div></div><div class="demo-qr-bottom">${icon("check")}<span>${words.ready}</span><b>1024 px</b></div></div>`,
  };
}
const illustrations = { en: artworks("en"), zh: artworks("zh") };
export function getIllustrations(locale: Locale): Record<string, string> {
  return illustrations[locale];
}
