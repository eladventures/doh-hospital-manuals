export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">DOH Hospital Manuals</h1>
        <p className="mt-4 text-xl text-slate-300">Developer Reference for Philippine Health Systems</p>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          48 DOH manuals converted to searchable, cross-referenced markdown. Find the right standards for what you're building.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['48 Documents', '13 Categories', '1.3M Words', '14 Use Cases'].map((s) => (
            <span key={s} className="bg-slate-700/50 rounded-full px-4 py-1.5 text-sm text-slate-300">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <span className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-300">
            Covers ~70% of RA 11223 (Universal Health Care Act) requirements
          </span>
        </div>
      </div>
    </section>
  );
}
