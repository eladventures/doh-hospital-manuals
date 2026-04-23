'use client';

import { useState } from 'react';
import { List } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false);
  const filtered = headings.filter((h) => h.level === 2 || h.level === 3).slice(0, 30);

  if (filtered.length < 2) return null;

  return (
    <nav className="my-6 border border-slate-200 rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
      >
        <List className="w-4 h-4" />
        Table of Contents ({filtered.length})
        <span className="ml-auto text-xs text-slate-400">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <ul className="px-4 pb-3 space-y-1">
          {filtered.map((h, i) => (
            <li key={i}>
              <a
                href={`#${h.id}`}
                className={`block text-sm hover:text-blue-600 transition-colors truncate ${
                  h.level === 3 ? 'pl-4 text-slate-500' : 'text-slate-700 font-medium'
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
