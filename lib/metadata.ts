import type { Metadata, Viewport } from "next";
import { dictionaries, type Locale } from "./i18n";

export const viewport: Viewport = { themeColor: "#f6f5f2" };
export function localeMetadata(locale: Locale): Metadata {
  const t = dictionaries[locale];
  return {
    metadataBase: new URL("https://agentclub.dev"),
    title: "Agent Club — Small tools. Big possibilities.",
    description: t.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: { en: "/en/", "zh-CN": "/zh/", "x-default": "/en/" },
    },
    icons: { icon: "/favicon.svg" },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "zh_CN",
      alternateLocale: locale === "en" ? "zh_CN" : "en_US",
      title: "Agent Club — Small tools. Big possibilities.",
      description: t.socialDescription,
      url: `/${locale}/`,
      siteName: "Agent Club",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Agent Club — Small tools. Big possibilities.",
        },
      ],
    },
    twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  };
}
