'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/config/navigation.config';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-borderToken-subtle bg-bg-primary/80 backdrop-blur-md">
      <div className="w-full px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-10 w-44 sm:w-52">
            <Image
              src="/images/sinemus_logo.png"
              alt="Sinemus Indonesia Logo"
              fill
              priority
              className="object-contain object-left group-hover:scale-105 transition-transform"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors ${
                  isActive
                    ? 'text-content-primary bg-accent-subtle font-semibold'
                    : 'text-content-secondary hover:text-content-primary hover:bg-accent-subtle'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-content-secondary hover:text-content-primary p-2"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-borderToken-subtle bg-bg-primary px-4 pt-2 pb-6 space-y-3">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-body font-medium text-content-secondary hover:text-content-primary hover:bg-accent-subtle"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
