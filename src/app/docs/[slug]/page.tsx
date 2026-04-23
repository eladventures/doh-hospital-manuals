import { notFound } from "next/navigation";
import { getAllDocSlugs, getDocBySlug } from "@/lib/documents";
import Breadcrumb from "@/components/shared/Breadcrumb";
import RevisionBanner from "@/components/docs/RevisionBanner";
import SummaryBox from "@/components/docs/SummaryBox";
import MetadataSidebar from "@/components/docs/MetadataSidebar";
import RelatedDocs from "@/components/docs/RelatedDocs";
import TableOfContents from "@/components/docs/TableOfContents";
import MarkdownContent from "@/components/docs/MarkdownContent";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const doc = await getDocBySlug(slug);
    const title = (doc.frontmatter.title as string) || slug;
    return { title: `${title} — DOH Manuals` };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let doc;
  try {
    doc = await getDocBySlug(slug);
  } catch {
    notFound();
  }

  const fm = doc.frontmatter;
  const category = (fm.category as string) || "unknown";

  const h2Headings = doc.headings.filter((h) => h.level === 2).slice(0, 4);
  const bullets = h2Headings.length > 0 ? h2Headings.map((h) => h.text) : ["See full document content below"];

  const plainText = doc.html.replace(/<[^>]*>/g, "");
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const tableCount = (doc.html.match(/<table/g) || []).length;

  const relatedDocs = (fm.related_docs as string[]) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: category, href: `/category/${category}/` },
          { label: (fm.short_title as string) || slug },
        ]}
      />

      <RevisionBanner
        status={(fm.status as string) || "current"}
        supersedes={(fm.supersedes as string | null) || null}
        supersededBy={(fm.superseded_by as string | null) || null}
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {fm.title as string}
          </h1>

          <SummaryBox bullets={bullets} stats={{ tables: tableCount, wordCount }} />

          <div className="mt-6 lg:hidden">
            <MetadataSidebar frontmatter={fm} />
          </div>

          <TableOfContents headings={doc.headings} />

          <div className="mt-8">
            <MarkdownContent html={doc.html} />
          </div>

          {relatedDocs.length > 0 && (
            <div className="mt-12">
              <RelatedDocs docs={relatedDocs} />
            </div>
          )}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <MetadataSidebar frontmatter={fm} />
          </div>
        </aside>
      </div>
    </div>
  );
}
