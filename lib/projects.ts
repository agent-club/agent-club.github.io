import entries from "./projects.json";

export type Category = "desktop" | "web" | "extension" | "play";
export interface Project {
  id: string;
  name: string;
  category: Category;
  label: string;
  headline: string;
  description: string;
  tags: string[];
  url?: string;
  repository?: string;
  action: string;
  color: string;
}

function validate(entry: (typeof entries)[number]): Project {
  if (!["desktop", "web", "extension", "play"].includes(entry.category))
    throw new Error(`Invalid category: ${entry.id}`);
  if (!/^#[a-f\d]{6}$/i.test(entry.color))
    throw new Error(`Invalid color: ${entry.id}`);
  if (!/^[a-z0-9-]+$/.test(entry.id))
    throw new Error(`Invalid ID: ${entry.id}`);
  if (!entry.url && !entry.repository)
    throw new Error(`Missing destination: ${entry.id}`);
  for (const url of [entry.url, entry.repository]) {
    if (url && new URL(url).protocol !== "https:")
      throw new Error(`Invalid HTTPS URL: ${entry.id}`);
  }
  return { ...entry, category: entry.category as Category };
}

export const projects: Project[] = entries.map(validate);
if (new Set(projects.map((project) => project.id)).size !== projects.length)
  throw new Error("Duplicate project ID");
