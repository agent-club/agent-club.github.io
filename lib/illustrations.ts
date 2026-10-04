function spiral() {
  const points = Array.from({ length: 1401 }, (_, index) => {
    const angle = (index / 1400) * Math.PI * 14;
    const x = 150 + 77 * Math.cos(angle) + 40 * Math.cos((13 / 7) * angle);
    const y = 150 + 77 * Math.sin(angle) - 40 * Math.sin((13 / 7) * angle);
    return `${index ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg viewBox="0 0 300 300" class="spiral-flower"><defs><linearGradient id="flower-gradient"><stop stop-color="#fd9be2"/><stop offset=".5" stop-color="#a091ff"/><stop offset="1" stop-color="#8de5fb"/></linearGradient></defs><path d="${points}" fill="none" stroke="url(#flower-gradient)" stroke-width="1.1"/></svg>`;
}

export const illustrations: Record<string, string> = {
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
  spiral:
    spiral() +
    '<span class="spiral-label">SPIRAL BLOOM / ARCADE</span><span class="spiral-rpm">∞ <small>POSSIBLE PATTERNS</small></span>',
};
