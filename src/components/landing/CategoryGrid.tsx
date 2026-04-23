import Link from 'next/link';

interface Category {
  name: string;
  slug: string;
  description: string;
  docCount: number;
}

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/category/${c.slug}/`}
          className="border border-slate-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all bg-white"
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium text-slate-900 text-sm">{c.name}</h3>
            <span className="bg-slate-100 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium">
              {c.docCount}
            </span>
          </div>
          <p className="text-xs text-slate-500 line-clamp-2">{c.description}</p>
        </Link>
      ))}
    </div>
  );
}
