'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronDown, X } from 'lucide-react';

const categories = [
  { slug: 'admin-finance', name: 'Administrative & Finance' },
  { slug: 'nursing', name: 'Nursing' },
  { slug: 'pharmacy', name: 'Pharmacy' },
  { slug: 'nutrition', name: 'Nutrition' },
  { slug: 'staffing', name: 'Staffing' },
  { slug: 'facilities', name: 'Facilities' },
  { slug: 'waste', name: 'Waste Management' },
  { slug: 'infection-control', name: 'Infection Control' },
  { slug: 'WASH', name: 'WASH' },
  { slug: 'laboratory', name: 'Laboratory' },
  { slug: 'emergency', name: 'Emergency' },
  { slug: 'policies', name: 'Policies' },
  { slug: 'planning', name: 'Planning' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-lg font-bold tracking-tight hover:text-blue-300 transition-colors">
              DOH Manuals
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
              <div className="relative">
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className="flex items-center gap-1 hover:text-blue-300 transition-colors"
                >
                  Categories <ChevronDown className="w-3 h-3" />
                </button>
                {catOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setCatOpen(false)} />
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white text-slate-900 rounded-lg shadow-xl border z-50 py-2 max-h-80 overflow-y-auto">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/category/${c.slug}/`}
                          className="block px-4 py-2 text-sm hover:bg-slate-100 transition-colors"
                          onClick={() => setCatOpen(false)}
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <Link href="/uhc-coverage/" className="hover:text-blue-300 transition-colors">
                UHC Coverage
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.dispatchEvent(new Event('open-search'))}
                className="hidden md:flex items-center gap-2 bg-slate-800 hover:bg-slate-700 rounded-lg px-3 py-1.5 text-sm transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
                <kbd className="ml-2 text-xs bg-slate-700 rounded px-1.5 py-0.5">⌘K</kbd>
              </button>
              <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-slate-900 text-white border-t border-slate-800 shadow-xl max-h-[80vh] overflow-y-auto z-50">
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="block py-2 hover:text-blue-300" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/uhc-coverage/" className="block py-2 hover:text-blue-300" onClick={() => setMobileOpen(false)}>UHC Coverage</Link>
              <button
                onClick={() => { setMobileOpen(false); window.dispatchEvent(new Event('open-search')); }}
                className="flex items-center gap-2 py-2 hover:text-blue-300 w-full text-left"
              >
                <Search className="w-4 h-4" /> Search
              </button>
              <div className="border-t border-slate-800 pt-2 mt-2">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Categories</p>
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/category/${c.slug}/`}
                    className="block py-1.5 text-sm text-slate-300 hover:text-blue-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
