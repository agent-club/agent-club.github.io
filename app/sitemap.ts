import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://agent-club.github.io/" }];
}
export const dynamic = "force-static";
