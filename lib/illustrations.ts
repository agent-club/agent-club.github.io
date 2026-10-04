import type { Locale } from "./i18n";

const chineseIllustrations: Record<string, string> = {
  pinboardshot:
    '<div class="pin-window"><div class="window-dots"><i></i><i></i><i></i><span>Capture something good.</span></div><div class="pin-landscape"><div class="landscape-sun"></div><div class="landscape-hill"></div><div class="landscape-hill second"></div><div class="crop-frame"><i></i><i></i><i></i><i></i><span>640 × 400</span></div><svg class="annotation-arrow" viewBox="0 0 100 60"><path d="M5 50Q40 5 85 22m-15-13 15 13-20 10"/></svg></div><div class="pin-tools">↖ <span>□</span> ○ <span>↗</span> T <b>贴在屏幕上 ↗</b></div></div><span class="floating-badge">⌘ ⇧ A <i></i> Capture. Annotate. Pin.</span>',
  saylit:
    '<div class="saylit-window"><div class="saylit-editor"><span class="art-overline">SAYLIT / MARKDOWN</span><div><i>#</i> 把灵感，写成文章</div><p>记录一个好想法。<br>让文字自己发光。</p><span class="editor-line"></span><span class="editor-line short"></span><div class="editor-bottom">Markdown <span>→</span></div></div><div class="saylit-paper"><span>THE ART OF EXPRESSION</span><h4>给想法<br>一点空间。</h4><div class="paper-rule"></div><p>先把想说的话写下来，<br>再给它一个舒服的样子。</p><i>Less noise. More meaning.</i></div></div>',
  daymark:
    '<div class="calendar-card"><div class="calendar-top"><span>DAYMARK / 日历</span><span>‹ &nbsp; ›</span></div><h4>一个好日子<span>每一天，都值得标记</span></h4><div class="calendar-grid">' +
    [
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "日",
      ...Array.from({ length: 28 }, (_, i) => i + 1),
    ]
      .map(
        (n, i) =>
          `<span class="${i < 7 ? "weekday" : i === 17 ? "marked" : ""}">${n}</span>`,
      )
      .join("") +
    '</div><div class="calendar-event"><i></i> 重要的日子 <span>全天</span></div></div><span class="calendar-orbit">☀</span>',
  "history-sweep":
    '<div class="sweep-window"><div class="sweep-search"><span>⌕</span> 搜索你想清理的记录 <span>↵</span></div><div class="sweep-heading"><span>按网站分组</span><span>已选 3 项</span></div><div class="sweep-row"><i>✓</i><span class="sweep-site">a</span><div>example.org<small>3 条匹配记录</small></div><span>⌄</span></div><div class="sweep-subrow"><i>✓</i><span>一个已经完成的搜索</span></div><div class="sweep-subrow"><i>✓</i><span>不再需要的旧页面</span></div><div class="sweep-subrow"><i>✓</i><span>昨天的临时参考</span></div><div class="sweep-footer"><span>你的历史，留在本机。</span><b>审阅后清理 →</b></div></div>',
  "page-qr":
    '<div class="qr-illustration"><div class="qr-symbol"><i></i><i></i><i></i><div class="qr-pixels"></div></div><div class="qr-swatch"><i></i><i></i><i></i><i></i><span>YOUR LINK.<br>YOUR STYLE.</span></div></div><div class="qr-export"><span>PNG ↗</span><span>SVG ↗</span><span>离线生成</span></div>',
};

const translations = {
  "贴在屏幕上 ↗": "Pin to screen ↗",
  "把灵感，写成文章": "Make ideas into stories",
  "记录一个好想法。<br>让文字自己发光。":
    "Capture a good idea.<br>Let your words shine.",
  "给想法<br>一点空间。": "Space for<br>your ideas.",
  "先把想说的话写下来，<br>再给它一个舒服的样子。":
    "Write what you mean.<br>Give it room to breathe.",
  "DAYMARK / 日历": "DAYMARK / CALENDAR",
  一个好日子: "A good day",
  "每一天，都值得标记": "Make every day count",
  ">一</span>": ">M</span>",
  ">二</span>": ">T</span>",
  ">三</span>": ">W</span>",
  ">四</span>": ">T</span>",
  ">五</span>": ">F</span>",
  ">六</span>": ">S</span>",
  ">日</span>": ">S</span>",
  重要的日子: "A day to remember",
  全天: "All day",
  搜索你想清理的记录: "Search your history",
  按网站分组: "Grouped by website",
  "已选 3 项": "3 selected",
  "3 条匹配记录": "3 matching records",
  一个已经完成的搜索: "A search that is complete",
  不再需要的旧页面: "A page no longer needed",
  昨天的临时参考: "A temporary reference",
  "你的历史，留在本机。": "Your history stays local.",
  "审阅后清理 →": "Review & clear →",
  离线生成: "Works offline",
};

const englishIllustrations = Object.fromEntries(
  Object.entries(chineseIllustrations).map(([id, artwork]) => [
    id,
    Object.entries(translations).reduce(
      (html, [from, to]) => html.replaceAll(from, to),
      artwork,
    ),
  ]),
);
export function getIllustrations(locale: Locale): Record<string, string> {
  return locale === "en" ? englishIllustrations : chineseIllustrations;
}
