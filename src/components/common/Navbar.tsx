'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { mainNavigation } from '@/config/navigation.config';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen || currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
        setActiveDropdown(null);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        lastScrollY > 20 || isOpen
          ? 'bg-white/10 backdrop-blur-md border-b border-white/15 shadow-lg'
          : 'bg-transparent border-none'
      }`}
    >
      <div className="w-full px-6 sm:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-6 sm:h-7 w-32 sm:w-40">
            <Image
              src="/images/sinemus-indonesia.png"
              alt="Sinemus Indonesia Logo"
              fill
              priority
              className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
          {mainNavigation.map((item) => {
            const hasSub = Boolean(item.subItems && item.subItems.length > 0);
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith('/units')) ||
              (item.href !== '/' && pathname.startsWith(item.href));
            const isDropdownOpen = activeDropdown === item.label;

            if (hasSub) {
              return (
                <div
                  key={item.label}
                  className="relative group py-5"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`relative flex items-center gap-1.5 text-xs sm:text-sm font-heading font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive || isDropdownOpen
                        ? 'text-white opacity-100 font-semibold'
                        : 'text-white/80 hover:text-white hover:opacity-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180 text-white' : 'text-white/60 group-hover:text-white'
                      }`}
                    />
                    {/* Animated Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${
                        isActive || isDropdownOpen
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </button>

                  {/* Mega Dropdown Menu (White Glassmorphism) */}
                  {isDropdownOpen && (
                    <div
                      className="absolute top-full -left-20 w-[540px] p-4 bg-white/15 backdrop-blur-2xl border border-white/25 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-white/70 px-3 pt-1 pb-2.5 border-b border-white/15 mb-3 flex items-center justify-between">
                        <span className="font-bold text-white">Unit Bisnis Sinemus</span>
                        <span className="text-white/50">4 Pilar Integrasi</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {item.subItems?.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`group/sub flex flex-col justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                                isSubActive
                                  ? 'bg-white/25 border-white/50 shadow-inner'
                                  : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40'
                              }`}
                            >
                              <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-heading font-bold text-white uppercase tracking-wider group-hover/sub:text-white transition-colors">
                                    {sub.label}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover/sub:text-white group-hover/sub:translate-x-1 transition-all" />
                                </div>
                                <p className="text-[11px] font-body text-white/80 font-light leading-relaxed line-clamp-2">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-xs sm:text-sm font-heading font-medium uppercase tracking-wider transition-opacity duration-300 group ${
                  isActive ? 'text-white opacity-100 font-semibold' : 'text-white/80 hover:text-white hover:opacity-100'
                }`}
              >
                <span>{item.label}</span>
                {/* Animated Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 focus:outline-hidden transition-all duration-200 border border-white/10"
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

      {/* Mobile Drawer (Clean White Glassmorphism) */}
      {isOpen && (
        <div className="md:hidden bg-white/15 backdrop-blur-2xl border-t border-b border-white/20 px-6 pt-4 pb-6 space-y-3 shadow-2xl transition-all duration-300 max-h-[80vh] overflow-y-auto">
          {mainNavigation.map((item) => {
            const hasSub = Boolean(item.subItems && item.subItems.length > 0);
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith('/units')) ||
              (item.href !== '/' && pathname.startsWith(item.href));
            const isExpanded = mobileExpanded === item.label;

            if (hasSub) {
              return (
                <div key={item.label} className="rounded-xl border border-white/15 bg-white/5 overflow-hidden transition-all">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu(item.label)}
                    className={`w-full px-4 py-3 flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wider transition-colors ${
                      isActive ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-white' : 'text-white/60'
                      }`}
                    />
                  </button>

                  {/* Submenu Accordion */}
                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 space-y-2 border-t border-white/10 bg-white/5">
                      {item.subItems?.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileExpanded(null);
                            }}
                            className={`block p-3 rounded-lg border transition-all ${
                              isSubActive
                                ? 'bg-white/25 border-white/40 text-white shadow-inner font-bold'
                                : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/15 hover:border-white/25 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wide">
                              <span>{sub.label}</span>
                              <ArrowRight className="w-3 h-3 text-white/40" />
                            </div>
                            <p className="text-[11px] text-white/70 font-body normal-case font-light mt-1 leading-tight line-clamp-2">
                              {sub.description}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl border transition-all text-xs font-heading uppercase tracking-wider ${
                  isActive
                    ? 'bg-white/20 border-white/35 text-white font-bold shadow-inner'
                    : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/15 hover:border-white/20 hover:text-white'
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

