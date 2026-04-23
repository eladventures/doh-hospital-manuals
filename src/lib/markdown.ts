import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import type { Root, Element } from 'hast';
import { visit } from 'unist-util-visit';

// ── Types ──────────────────────────────────────────────────────────────

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface ParsedMarkdown {
  frontmatter: Record<string, unknown>;
  html: string;
  headings: Heading[];
}

// ── Frontmatter key normalization ──────────────────────────────────────

const KEY_MAP: Record<string, string> = {
  shorttitle: 'short_title',
  shortTitle: 'short_title',
  'short-title': 'short_title',
  hospitallevels: 'hospital_levels',
  hospitalLevels: 'hospital_levels',
  'hospital-levels': 'hospital_levels',
  supersededby: 'superseded_by',
  supersededBy: 'superseded_by',
  'superseded-by': 'superseded_by',
  relateddocs: 'related_docs',
  relatedDocs: 'related_docs',
  'related-docs': 'related_docs',
  sourcepdf: 'source_pdf',
  sourcePdf: 'source_pdf',
  'source-pdf': 'source_pdf',
  outputname: 'output_name',
  outputName: 'output_name',
  'output-name': 'output_name',
  sizemb: 'size_mb',
  sizeMb: 'size_mb',
  'size-mb': 'size_mb',
};

function normalizeFrontmatter(
  data: Record<string, unknown>,
): Record<string, unknown> {
  const normalized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    const mapped = KEY_MAP[key] ?? key;
    normalized[mapped] = value;
  }
  return normalized;
}

// ── Rehype plugin: rewrite relative image src → /assets/ ───────────────

function rehypeRewriteImageSrc() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'img' && typeof node.properties?.src === 'string') {
        const src = node.properties.src;
        if (src && !src.startsWith('http') && !src.startsWith('/')) {
          // Strip any leading ./ or ../
          const cleaned = src.replace(/^(?:\.\.?\/)+/, '');
          node.properties.src = `/assets/${cleaned}`;
        }
      }
    });
  };
}

// ── Extract headings from HTML string ──────────────────────────────────

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([1-6])\s+id="([^"]*)"[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const id = match[2];
    // Strip HTML tags from the heading text
    const text = match[3].replace(/<[^>]+>/g, '').trim();
    headings.push({ id, text, level });
  }
  return headings;
}

// ── Main parser ────────────────────────────────────────────────────────

export async function parseMarkdown(content: string): Promise<ParsedMarkdown> {
  const { data, content: body } = matter(content);
  const frontmatter = normalizeFrontmatter(data);

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeRewriteImageSrc)
    .use(rehypeStringify)
    .process(body);

  const html = String(result);
  const headings = extractHeadings(html);

  return { frontmatter, html, headings };
}
