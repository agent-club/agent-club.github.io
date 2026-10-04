import entries from "./projects.json";
import { locales, type Locale } from "./i18n";

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

function validate(entry: (typeof entries)[number]) {
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
  // Every published project needs both translations; missing copy must fail the build.
  for (const locale of locales) {
    const content = entry.content[locale];
    for (const field of [
      "name",
      "label",
      "headline",
      "description",
      "action",
    ] as const) {
      if (!content[field].trim())
        throw new Error(`Missing ${locale} ${field}: ${entry.id}`);
    }
    if (!content.tags.every((tag) => tag.trim()))
      throw new Error(`Invalid ${locale} tags: ${entry.id}`);
  }
  return { ...entry, category: entry.category as Category };
}

const validated = entries.map(validate);
if (new Set(validated.map((project) => project.id)).size !== validated.length)
  throw new Error("Duplicate project ID");

export function getProjects(locale: Locale): Project[] {
  return validated.map(({ content, ...project }) => ({
    ...project,
    ...content[locale],
  }));
}
