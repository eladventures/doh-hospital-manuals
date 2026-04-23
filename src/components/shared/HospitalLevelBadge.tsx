const colors: Record<number, string> = {
  1: 'bg-teal-100 text-teal-800',
  2: 'bg-blue-100 text-blue-800',
  3: 'bg-purple-100 text-purple-800',
};

export default function HospitalLevelBadge({ levels }: { levels: number[] }) {
  return (
    <span className="inline-flex gap-1">
      {levels.map((l) => (
        <span key={l} className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${colors[l] || 'bg-gray-100 text-gray-800'}`}>
          L{l}
        </span>
      ))}
    </span>
  );
}
