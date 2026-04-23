import Link from 'next/link';
import {
  Users, Shield, Siren, Wallet, Pill, FlaskConical, Bug,
  Building, FileText, Droplets, Apple, Award, Settings, Trash2,
} from 'lucide-react';
import type { UseCase } from '@/lib/curated-guide';

const iconMap: Record<string, React.ElementType> = {
  Users, Shield, Siren, Wallet, Pill, FlaskConical, Bug,
  Building, FileText, Droplets, Apple, Award, Settings, Trash2,
};

export default function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const Icon = iconMap[useCase.icon] || FileText;
  const shown = useCase.docs.slice(0, 3);
  const remaining = useCase.docs.length - shown.length;

  return (
    <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
      <div className="flex items-start gap-3 mb-3">
        <div className="bg-blue-50 rounded-lg p-2">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{useCase.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{useCase.description}</p>
        </div>
      </div>

      <ul className="space-y-2 mt-4">
        {shown.map((doc) => (
          <li key={doc.slug} className="text-sm">
            <Link href={`/docs/${doc.slug}/`} className="text-blue-600 hover:text-blue-800 font-medium">
              {doc.slug}
            </Link>
            <span className="text-slate-400 ml-1">— {doc.why}</span>
          </li>
        ))}
        {remaining > 0 && (
          <li className="text-xs text-slate-400">+{remaining} more</li>
        )}
      </ul>

      <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100">
        {useCase.uhcRelevance}
      </p>
    </div>
  );
}
