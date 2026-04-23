import HeroSection from "@/components/landing/HeroSection";
import UseCaseCard from "@/components/landing/UseCaseCard";
import CategoryGrid from "@/components/landing/CategoryGrid";
import RevisionChainPreview from "@/components/landing/RevisionChainPreview";
import { useCases } from "@/lib/curated-guide";
import { getAllCategories } from "@/lib/metadata";
import { getDocsByCategory } from "@/lib/documents";

export default async function HomePage() {
  const catMap = getAllCategories();
  const categories = await Promise.all(
    Object.entries(catMap).map(async ([slug, description]) => {
      const docs = await getDocsByCategory(slug);
      return {
        slug,
        name: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        description,
        docCount: docs.length,
      };
    })
  );

  return (
    <div>
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">What Are You Building?</h2>
        <p className="text-slate-600 mb-8">
          Find the right DOH standards for your project. Each use case links directly to the relevant manuals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <UseCaseCard key={uc.id} useCase={uc} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse by Category</h2>
          <p className="text-slate-600 mb-8">
            13 categories covering hospital operations, clinical services, policies, and infrastructure.
          </p>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Revision Chains</h2>
        <p className="text-slate-600 mb-8">
          Some standards have been updated over time. Always use the latest version.
        </p>
        <RevisionChainPreview />
      </section>
    </div>
  );
}
