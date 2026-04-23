import Link from "next/link";
import { getAllCategories, getCategoryDescription } from "@/lib/metadata";
import { getDocsByCategory } from "@/lib/documents";
import Breadcrumb from "@/components/shared/Breadcrumb";
import StatusBadge from "@/components/shared/StatusBadge";
import HospitalLevelBadge from "@/components/shared/HospitalLevelBadge";
import type { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(getAllCategories()).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const name = category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { title: `${name} — DOH Manuals` };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const description = getCategoryDescription(category) || "";
  const docs = await getDocsByCategory(category);
  const name = category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const sorted = [...docs].sort((a, b) => {
    const sa = a.frontmatter.status === "current" ? 0 : 1;
    const sb = b.frontmatter.status === "current" ? 0 : 1;
    if (sa !== sb) return sa - sb;
    return ((b.frontmatter.year as number) || 0) - ((a.frontmatter.year as number) || 0);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: name }]} />

      <h1 className="text-3xl font-bold text-slate-900 mb-2">{name}</h1>
      <p className="text-slate-600 mb-8">{description}</p>
      <p className="text-sm text-slate-500 mb-6">{sorted.length} documents</p>

      <div className="space-y-4">
        {sorted.map((doc) => {
          const fm = doc.frontmatter;
          return (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}/`}
              className="block border border-slate-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-medium text-slate-900 truncate">
                    {(fm.short_title as string) || doc.slug}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 truncate">
                    {fm.title as string}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {fm.year ? <span className="text-sm text-slate-400">{String(fm.year)}</span> : null}
                  <StatusBadge status={(fm.status as string) || "current"} />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-3">
                {fm.edition ? <span className="text-xs text-slate-400">{String(fm.edition)}</span> : null}
                {fm.hospital_levels ? <HospitalLevelBadge levels={fm.hospital_levels as number[]} /> : null}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
