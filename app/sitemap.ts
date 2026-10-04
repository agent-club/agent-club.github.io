import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `https://agentclub.dev/${locale}/`,
    alternates: {
      languages: {
        en: "https://agentclub.dev/en/",
        "zh-CN": "https://agentclub.dev/zh/",
      },
    },
  }));
}
export const dynamic = "force-static";
