# Development

The website uses Next.js App Router, React, and TypeScript. Node.js 22 or later is required.

```sh
npm ci --ignore-scripts
npm run dev
```

The development site runs at <http://127.0.0.1:4173>.

```sh
npm run check
npm run build
npm run preview
```

Next.js exports the website to `out/`. The preview command serves those production files; `next start` does not apply to static export mode.

## Project entries

Edit `lib/projects.json` to add a reviewed project. Each entry has an ID, title, category, description, tags, visual color, and verified product and/or public source links. Categories are `desktop`, `web`, `extension`, and `play`.

Counts and category filters use that data. Missing links are omitted. Private repositories must not be linked. Add original illustrations in `lib/illustrations.ts` where appropriate; artwork must remain checked-in source rather than API-provided HTML.

## Deployment

The production domain is <https://agentclub.dev>. Cloudflare Workers Static Assets serves the Next.js export using `wrangler.jsonc`.

```sh
npm run deploy
```

Authenticate using Wrangler's normal login flow. Never commit credentials, local sessions, environment files, or Cloudflare tokens. The deployment uploads `out/` only.

## Design notes

The dark visual hierarchy was informed by Linear and Resend. Agent Club's identity, orbital art, and product illustrations are original. Card illustrations contain synthetic demonstration content; they are not product screenshots. The illustrated calendar is not a holiday schedule and the QR drawing is not a functional code.

The animation respects reduced-motion preferences, supports explicit pause, and stops drawing when hidden or outside the viewport. The website includes no third-party fonts, tracking scripts, or runtime API requests.
