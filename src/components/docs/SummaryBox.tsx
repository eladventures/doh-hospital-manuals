export default function SummaryBox({ bullets, stats }: { bullets: string[]; stats: { tables?: number; wordCount?: number } }) {
  return (
    <div className="bg-slate-50 border-l-4 border-blue-600 rounded-r-lg p-4 mb-6">
      <p className="text-sm font-semibold text-slate-700 mb-2">In this document:</p>
      <ul className="text-sm text-slate-600 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {(stats.tables || stats.wordCount) && (
        <p className="text-xs text-slate-400 mt-3">
          {stats.tables ? `${stats.tables} tables` : ''}{stats.tables && stats.wordCount ? ' · ' : ''}
          {stats.wordCount ? `~${Math.round(stats.wordCount / 1000)}k words` : ''}
        </p>
      )}
    </div>
  );
}
