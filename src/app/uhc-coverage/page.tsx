import Link from "next/link";
import { covered, gaps } from "@/lib/uhc-coverage";
import Breadcrumb from "@/components/shared/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UHC Act Coverage — DOH Manuals",
  description: "How the DOH hospital manuals corpus maps to RA 11223 (Universal Health Care Act) requirements.",
};

export default function UhcCoveragePage() {
  const fullCount = covered.filter((c) => c.coverage === "FULL").length;
  const partialCount = covered.filter((c) => c.coverage === "PARTIAL").length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "UHC Coverage" }]} />

      <h1 className="text-3xl font-bold text-slate-900 mb-2">UHC Act (RA 11223) Coverage</h1>
      <p className="text-slate-600 mb-4">
        How the 48 DOH hospital manuals map to the requirements of Republic Act No. 11223, the Universal Health Care Act of the Philippines.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        <span className="bg-green-100 text-green-800 rounded-full px-4 py-1.5 text-sm font-medium">
          {fullCount} Fully Covered
        </span>
        <span className="bg-yellow-100 text-yellow-800 rounded-full px-4 py-1.5 text-sm font-medium">
          {partialCount} Partially Covered
        </span>
        <span className="bg-red-100 text-red-800 rounded-full px-4 py-1.5 text-sm font-medium">
          {gaps.length} Gaps
        </span>
        <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1.5 text-sm font-medium">
          ~70% Hospital-Side Coverage
        </span>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">What's Covered</h2>
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">UHC Requirement</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Section</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Coverage</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Key Files</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {covered.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">{item.uhcRequirement}</td>
                  <td className="px-4 py-3 text-slate-600">{item.section}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        item.coverage === "FULL" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.coverage}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {item.keyFiles.slice(0, 3).map((f) => (
                        <Link
                          key={f}
                          href={`/docs/${f}/`}
                          className="text-xs text-blue-600 hover:text-blue-800 bg-blue-50 rounded px-1.5 py-0.5"
                        >
                          {f}
                        </Link>
                      ))}
                      {item.keyFiles.length > 3 && (
                        <span className="text-xs text-slate-400">+{item.keyFiles.length - 3}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">What's Not Covered (Gaps)</h2>
        <p className="text-sm text-slate-500 mb-4">
          These UHC requirements are not addressed by the current corpus. They require documents from PhilHealth, DOST, or other agencies.
        </p>
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">UHC Requirement</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Section</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">What's Needed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {gaps.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">{item.uhcRequirement}</td>
                  <td className="px-4 py-3 text-slate-600">{item.section}</td>
                  <td className="px-4 py-3 text-slate-600">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-slate-50 rounded-lg p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">Summary</h2>
        <p className="text-sm text-slate-600">
          The corpus covers approximately 70% of UHC hospital-side requirements. Coverage is strong on operational standards (staffing, facilities, compliance, clinical services). Gaps are mostly in PhilHealth-specific processes (accreditation, benefit packages, rates) and IT specifications (EHR interoperability, data exchange). These are separate document sets maintained by PhilHealth and DOST, not DOH hospital manuals.
        </p>
        <p className="text-sm text-slate-600 mt-3">
          <strong>For building a hospital management system:</strong> this corpus is sufficient for operational compliance. For PhilHealth billing integration, you would need the PhilHealth circulars and PEACHeS manual as additional sources.
        </p>
      </section>
    </div>
  );
}
