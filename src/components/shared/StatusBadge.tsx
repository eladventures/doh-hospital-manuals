export default function StatusBadge({ status }: { status: string }) {
  const isSuperseded = status === 'superseded';
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        isSuperseded ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
      }`}
    >
      {status}
    </span>
  );
}
