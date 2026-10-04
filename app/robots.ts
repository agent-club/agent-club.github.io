import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://agent-club.github.io/sitemap.xml",
  };
}
export const dynamic = "force-static";
