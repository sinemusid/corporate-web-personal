import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { mainNavigation } from '@/config/navigation.config';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3">
              <span className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white tracking-widest">
                S
              </span>
              <span className="font-bold text-xl tracking-tight text-white">
                SINEMUS <span className="text-red-500 font-light">INDONESIA</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm">
              {siteConfig.description}
            </p>
            <p className="text-xs text-zinc-500">
              {siteConfig.contact.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Kontak & Sosial</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="pt-2 flex space-x-4 text-xs">
                <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                  Instagram
                </a>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                  LinkedIn
                </a>
                <a href={siteConfig.links.youtube} target="_blank" rel="noreferrer" className="hover:text-white">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} PT Sinemus Indonesia Media. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-zinc-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
