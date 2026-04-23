import fs from 'fs';
import path from 'path';
import { parseMarkdown, type Heading } from './markdown';

// ── Types ──────────────────────────────────────────────────────────────

export interface DocMeta {
  slug: string;
  frontmatter: Record<string, unknown>;
  headings: Heading[];
}

export interface Doc extends DocMeta {
  html: string;
}

// ── Paths ──────────────────────────────────────────────────────────────

const OUTPUT_DIR = path.join(process.cwd(), '..', 'output');
const EXCLUDED = new Set(['INDEX.md', 'VALIDATION.md']);

// ── Helpers ────────────────────────────────────────────────────────────

function getMdFiles(): string[] {
  return fs
    .readdirSync(OUTPUT_DIR)
    .filter((f) => f.endsWith('.md') && !EXCLUDED.has(f));
}

// ── Cache ──────────────────────────────────────────────────────────────

let _allDocsCache: DocMeta[] | null = null;

async function loadAllDocs(): Promise<DocMeta[]> {
  if (_allDocsCache) return _allDocsCache;

  const files = getMdFiles();
  const docs: DocMeta[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(OUTPUT_DIR, file), 'utf-8');
    const { frontmatter, headings } = await parseMarkdown(raw);
    docs.push({ slug, frontmatter, headings });
  }

  _allDocsCache = docs;
  return docs;
}

// ── Exports ────────────────────────────────────────────────────────────

export function getAllDocSlugs(): string[] {
  return getMdFiles().map((f) => f.replace(/\.md$/, ''));
}

export async function getDocBySlug(slug: string): Promise<Doc> {
  const filePath = path.join(OUTPUT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, html, headings } = await parseMarkdown(raw);
  return { slug, frontmatter, html, headings };
}

export async function getDocsByCategory(category: string): Promise<DocMeta[]> {
  const docs = await loadAllDocs();
  return docs.filter((d) => d.frontmatter.category === category);
}

export async function getAllDocs(): Promise<DocMeta[]> {
  return loadAllDocs();
}
