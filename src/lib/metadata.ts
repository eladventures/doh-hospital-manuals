import fs from 'fs';
import path from 'path';

// ── Types ──────────────────────────────────────────────────────────────

export interface FileEntry {
  source_pdf: string;
  output_name: string;
  title: string;
  short_title: string;
  category: string;
  year: number | null;
  edition: string | null;
  status: 'current' | 'superseded';
  supersedes: string | null;
  superseded_by: string | null;
  hospital_levels: number[];
  size_mb: number;
  related_docs: string[];
}

export interface RevisionChain {
  chain: string;
  sequence: string[];
  note: string;
}

export interface CategoryMap {
  [key: string]: string;
}

export interface Metadata {
  files: FileEntry[];
  revision_chains: RevisionChain[];
  categories: CategoryMap;
}

// ── Load metadata ──────────────────────────────────────────────────────

const metadataPath = path.join(process.cwd(), 'content-source', 'metadata.json');
const raw = fs.readFileSync(metadataPath, 'utf-8');
const metadata: Metadata = JSON.parse(raw);

export default metadata;

// ── Helpers ────────────────────────────────────────────────────────────

export function getCategoryDescription(category: string): string | undefined {
  return metadata.categories[category];
}

export function getRevisionChains(): RevisionChain[] {
  return metadata.revision_chains;
}

export function getAllCategories(): CategoryMap {
  return metadata.categories;
}
