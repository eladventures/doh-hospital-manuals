import Link from 'next/link';
import { AlertTriangle, Info } from 'lucide-react';

interface Props {
  status: string;
  supersedes: string | null;
  supersededBy: string | null;
}

export default function RevisionBanner({ status, supersedes, supersededBy }: Props) {
  if (supersededBy) {
    const slug = supersededBy.replace(/\.md$/, '');
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
        <div className="text-sm">
          <p className="font-medium text-amber-800">This document has been superseded</p>
          <p className="text-amber-700 mt-1">
            View the current version:{' '}
            <Link href={`/docs/${slug}/`} className="underline font-medium hover:text-amber-900">
              {slug}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (supersedes && status === 'current') {
    const slug = supersedes.replace(/\.md$/, '');
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 flex items-start gap-3">
        <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
        <p className="text-sm text-blue-700">
          This replaces{' '}
          <Link href={`/docs/${slug}/`} className="underline hover:text-blue-900">
            {slug}
          </Link>
        </p>
      </div>
    );
  }

  return null;
}
