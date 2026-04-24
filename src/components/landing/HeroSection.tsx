export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Philippine Health System Reference</h1>
        <p className="mt-4 text-xl text-slate-300">Developer Reference for Building Health Systems Aligned with UHC</p>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          70 documents from DOH, PhilHealth, WHO, and Philippine law. Structured data, FHIR profiles, case rates, and compliance standards for hospitals, clinics, labs, pharmacies, and barangay health units.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['70 Documents', '21 Categories', '~2M Words', '22 Use Cases', '6,500+ Structured Records'].map((s) => (
            <span key={s} className="bg-slate-700/50 rounded-full px-4 py-1.5 text-sm text-slate-300">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-300">
            ~90% RA 11223 (UHC Act) coverage
          </span>
          <span className="inline-flex items-center bg-green-600/20 border border-green-500/30 rounded-full px-4 py-1.5 text-sm text-green-300">
            FHIR R4 + ICD-10 + Global Standards
          </span>
        </div>
      </div>
    </section>
  );
}
