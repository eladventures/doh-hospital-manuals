import StatusBadge from '@/components/shared/StatusBadge';
import HospitalLevelBadge from '@/components/shared/HospitalLevelBadge';

export default function MetadataSidebar({ frontmatter }: { frontmatter: Record<string, unknown> }) {
  const fields: { label: string; value: React.ReactNode }[] = [];

  if (frontmatter.category) fields.push({ label: 'Category', value: String(frontmatter.category) });
  if (frontmatter.year) fields.push({ label: 'Year', value: String(frontmatter.year) });
  if (frontmatter.edition) fields.push({ label: 'Edition', value: String(frontmatter.edition) });
  if (frontmatter.status) fields.push({ label: 'Status', value: <StatusBadge status={String(frontmatter.status)} /> });
  if (frontmatter.hospital_levels) fields.push({ label: 'Hospital Levels', value: <HospitalLevelBadge levels={frontmatter.hospital_levels as number[]} /> });
  if (frontmatter.issuing_body) fields.push({ label: 'Issuing Body', value: String(frontmatter.issuing_body) });
  if (frontmatter.extraction_date) fields.push({ label: 'Extracted', value: String(frontmatter.extraction_date) });

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm space-y-3">
      <h3 className="text-sm font-semibold text-slate-900">Document Info</h3>
      {fields.map((f, i) => (
        <div key={i}>
          <dt className="text-xs text-slate-500 uppercase tracking-wider">{f.label}</dt>
          <dd className="mt-0.5 text-sm text-slate-700">{f.value}</dd>
        </div>
      ))}
    </div>
  );
}
