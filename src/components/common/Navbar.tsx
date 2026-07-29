'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/config/navigation.config';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen || currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-transparent border-none transition-transform duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full px-6 sm:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-6 sm:h-7 w-32 sm:w-40">
            <Image
              src="/images/sinemus_logo.png"
              alt="Sinemus Indonesia Logo"
              fill
              priority
              className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-xs sm:text-sm font-heading font-medium uppercase tracking-wider transition-opacity duration-300 group ${
                  isActive ? 'text-white opacity-100 font-semibold' : 'text-white/80 hover:text-white hover:opacity-100'
                }`}
              >
                <span>{item.label}</span>
                {/* Smooth Animated Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/90 hover:text-white p-2 focus:outline-hidden transition-colors duration-200"
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
        <div className="md:hidden bg-black/85 backdrop-blur-xl px-6 pt-4 pb-8 space-y-4 shadow-2xl transition-all duration-300">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-heading font-medium uppercase tracking-wider transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
