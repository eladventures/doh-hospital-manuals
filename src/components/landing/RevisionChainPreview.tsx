import Link from 'next/link';
import StatusBadge from '@/components/shared/StatusBadge';
import { ArrowRight } from 'lucide-react';

const chains = [
  {
    name: 'Staffing Standards',
    nodes: [
      { slug: '10-staffing-standards-2013', label: 'Manual 10', year: '2013', status: 'superseded' },
      { slug: '10a-staffing-standards-L3-2022', label: 'Manual 10a', year: '2022', status: 'current' },
      { slug: '10b-staffing-standards-revised-2023', label: 'Manual 10b', year: '2023', status: 'current' },
    ],
  },
  {
    name: 'Procedures Manual',
    nodes: [
      { slug: '18-1-procedures-manual-2nd-ed-part1', label: '18.1 (Part 1)', year: '1994', status: 'superseded' },
      { slug: '18-2-procedures-manual-2nd-ed-part2', label: '18.2 (Part 2)', year: '1994', status: 'superseded' },
      { slug: '18-procedures-manual-3rd-ed', label: '18 (3rd Ed)', year: 'current', status: 'current' },
    ],
  },
];

export default function RevisionChainPreview() {
  return (
    <div className="space-y-8">
      {chains.map((chain) => (
        <div key={chain.name}>
          <h3 className="text-sm font-semibold text-slate-700 mb-3">{chain.name}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {chain.nodes.map((node, i) => (
              <div key={node.slug} className="flex items-center gap-2">
                {i > 0 && <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />}
                <Link
                  href={`/docs/${node.slug}/`}
                  className="border border-slate-200 rounded-lg px-3 py-2 hover:shadow-md transition-shadow bg-white text-sm"
                >
                  <span className="font-medium text-slate-900">{node.label}</span>
                  <span className="text-slate-400 ml-1">({node.year})</span>
                  <span className="ml-2"><StatusBadge status={node.status} /></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
