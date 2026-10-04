import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://agentclub.dev/" }];
}
export const dynamic = "force-static";
