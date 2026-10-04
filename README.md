# Agent Club

Agent Club 官网。深色视觉、动态线框轨道与产品概念插画，展示组织中的工具和交互实验。

线上地址：<https://agent-club.github.io/>

## 本地运行

基于 Next.js App Router、React 和 TypeScript。需要 Node.js 22 或更新版本。

```sh
npm ci --ignore-scripts
npm run dev
```

访问 <http://127.0.0.1:4173>。开发模式支持热更新。

```sh
npm run check
npm run build
```

## 新增项目

编辑 `lib/projects.json`。每条包含 `id`、`name`、`category`、`label`、`headline`、`description`、`tags`、`action`、`color`，以及经核实的 `url` 和／或公开 `repository`。分类为 `desktop`、`web`、`extension`、`play`。

项目数、卡片与筛选结果随数据变化。缺少官网或公开仓库时不生成对应入口。没有专属插画的新项目显示内容卡片；可在 `lib/illustrations.ts` 的 `illustrations` 中增加经过审核的概念插画。不要将私有源码、凭据或用户数据放入公开数据。

## 部署

GitHub Pages 使用 GitHub Actions 构建并发布 `out/`，主分支推送自动更新。仓库 Settings → Pages → Source 为 GitHub Actions。

若使用其他域名，在 `app/layout.tsx` 修改 metadataBase，并同步修改 `app/sitemap.ts` 和 `app/robots.ts` 的 URL。域名与 DNS 配置由维护者管理。

## 设计与内容

- 品牌信息来自组织公开简介；项目介绍来自公开 README 和公开产品页。
- Saylit 仅指向公开产品页，不展示私有仓库。
- 页码目前提供公开源码入口，不承诺商店上架或官网公开访问。
- 卡片中的图形为概念插画与虚构演示文字，不是产品截图；日历数字不表达真实节假日安排，二维码图形不可用于扫码。
- 参考 Linear 官网的内容层级和 Resend 官网的深色光影关系，重新设计 Agent Club 的标识、轨道艺术和产品图形。
- 动效可暂停，遵循系统减少动态效果偏好；主视觉离开视口或标签页隐藏时停止绘制。
- 页面静态生成，无远程字体、追踪脚本或运行时 API 请求。

## 文件

```text
app/page.tsx           官网首页（服务端组件）
app/layout.tsx         布局与 SEO 元数据
app/globals.css        样式与响应式布局
app/robots.ts          搜索引擎规则
app/sitemap.ts         站点地图
components/            React 筛选、移动导航与 Canvas 动效
lib/projects.json      经审核的项目数据
lib/projects.ts        项目类型与数据校验
lib/illustrations.ts   本地概念插画
next.config.ts         静态导出配置
scripts/serve.mjs      生产静态文件预览
public/favicon.svg     品牌图标
.github/workflows/     Pages 构建和发布
```

生产构建输出 `out/`。运行 `npm run preview` 可检查导出产物；`next start` 不适用于静态导出模式。
