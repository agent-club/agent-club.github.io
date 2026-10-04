import { localeMetadata } from "@/lib/metadata";
import "../globals.css";
export const metadata = localeMetadata("en");
export { viewport } from "@/lib/metadata";

export default function EntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
