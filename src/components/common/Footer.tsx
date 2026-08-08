import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-12 text-xs font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1">
          <p className="text-sm font-heading font-bold text-white tracking-wide">
            Sinemus Indonesia
          </p>
          <p className="text-slate-400 font-light">
            Corporate Web &amp; Solution Partner Terpercaya di Indonesia.
          </p>
        </div>

        <div className="flex items-center space-x-6 text-slate-400">
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            Tentang Kami
          </Link>
          <Link href="/units" className="hover:text-blue-400 transition-colors">
            Unit Bisnis
          </Link>
          <Link href="/collaborator" className="hover:text-blue-400 transition-colors">
            Kolaborator
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">
            Kontak
          </Link>
        </div>

        <div className="text-slate-500 font-mono text-[11px]">
          &copy; {new Date().getFullYear()} Sinemus Indonesia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
