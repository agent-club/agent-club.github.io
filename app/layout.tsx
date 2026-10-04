import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentclub.dev"),
  title: "Agent Club — Small tools. Big possibilities.",
  description:
    "小而锋利的工具，真实有用的工作流。探索 Agent Club 的截图、写作、日历、浏览器扩展与交互实验。",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "Agent Club — Small tools. Big possibilities.",
    description: "从一个好奇的想法，到一个真正好用的产品。",
    url: "/",
    siteName: "Agent Club",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0b0e0c" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
