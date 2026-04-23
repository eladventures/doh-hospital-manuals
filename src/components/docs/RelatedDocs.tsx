import Link from 'next/link';
import { FileText } from 'lucide-react';

function formatSlug(slug: string): string {
  return slug.replace(/\.md$/, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function RelatedDocs({ docs }: { docs: string[] }) {
  if (!docs.length) return null;
  return (
    <div className="border-t border-slate-200 pt-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">Related Documents</h3>
      <ul className="space-y-2">
        {docs.map((d) => {
          const slug = d.replace(/\.md$/, '');
          return (
            <li key={slug}>
              <Link href={`/docs/${slug}/`} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
                <FileText className="w-4 h-4 shrink-0" />
                {formatSlug(slug)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
