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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect modal open state on document.body
  useEffect(() => {
    const checkModalOpen = () => {
      setIsModalOpen(document.body.classList.contains('modal-open'));
    };

    checkModalOpen();

    const observer = new MutationObserver(() => {
      checkModalOpen();
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

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
        isVisible && !isModalOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        lastScrollY > 20 || isOpen
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-900/5'
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
              item.href === '/'
                ? pathname === '/'
                : item.href.startsWith('/units')
                ? pathname.startsWith('/units')
                : pathname === item.href || pathname.startsWith(item.href);
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
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-700 hover:text-blue-600 group-hover:text-blue-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                      }`}
                    />
                    {/* Animated Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ease-out ${
                        isActive || isDropdownOpen
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </button>

                  {/* Mega Dropdown Menu (Clean White Corporate) */}
                  {isDropdownOpen && (
                    <div
                      className="absolute top-full -left-20 w-[540px] p-4 bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/10 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 px-3 pt-1 pb-2.5 border-b border-slate-100 mb-3 flex items-center justify-between">
                        <span className="font-bold text-slate-900">Unit Bisnis Sinemus</span>
                        <span className="text-slate-400">4 Pilar Integrasi</span>
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
                                  ? 'bg-blue-50/80 border-blue-200 text-blue-700 shadow-xs'
                                  : 'bg-slate-50/70 border-slate-200/70 hover:bg-blue-50/50 hover:border-blue-300'
                              }`}
                            >
                              <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-heading font-bold text-slate-900 uppercase tracking-wider group-hover/sub:text-blue-600 transition-colors">
                                    {sub.label}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/sub:text-blue-600 group-hover/sub:translate-x-1 transition-all" />
                                </div>
                                <p className="text-[11px] font-body text-slate-600 font-normal leading-relaxed line-clamp-2">
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
                className={`relative py-1 text-xs sm:text-sm font-heading font-medium uppercase tracking-wider transition-all duration-300 group ${
                  isActive ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                <span>{item.label}</span>
                {/* Animated Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ease-out ${
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
          className="md:hidden p-2.5 rounded-xl text-slate-900 bg-slate-50 border border-slate-200 hover:bg-slate-100 focus:outline-hidden transition-all duration-200 shadow-xs"
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

      {/* Mobile Drawer (Clean White Corporate) */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-b border-slate-200 px-6 pt-4 pb-6 space-y-3 shadow-xl transition-all duration-300 max-h-[80vh] overflow-y-auto">
          {mainNavigation.map((item) => {
            const hasSub = Boolean(item.subItems && item.subItems.length > 0);
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : item.href.startsWith('/units')
                ? pathname.startsWith('/units')
                : pathname === item.href || pathname.startsWith(item.href);
            const isExpanded = mobileExpanded === item.label;

            if (hasSub) {
              return (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50/80 overflow-hidden transition-all">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu(item.label)}
                    className={`w-full px-4 py-3 flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wider transition-colors ${
                      isActive ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Submenu Accordion */}
                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 space-y-2 border-t border-slate-200 bg-slate-100/60">
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
                                ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold shadow-xs'
                                : 'bg-white border-slate-200/80 text-slate-700 hover:bg-blue-50/60 hover:border-blue-200 hover:text-blue-600'
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wide">
                              <span>{sub.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </div>
                            <p className="text-[11px] text-slate-500 font-body normal-case font-normal mt-1 leading-tight line-clamp-2">
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
                    ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/60 hover:border-blue-200 hover:text-blue-600'
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
