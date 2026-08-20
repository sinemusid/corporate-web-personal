'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mainNavigation } from '@/config/navigation.config';
import { Button } from '@/components/ui/Button';
import { MOTION_DURATIONS, MOTION_EASINGS } from '@/config/motion.config';

function subscribeScroll(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
}

function getScrollSnapshot(): boolean {
  return window.scrollY > 20;
}

function getServerScrollSnapshot(): boolean {
  return false;
}

function subscribeModal(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

function getModalSnapshot(): boolean {
  return document.body.classList.contains('modal-open');
}

function getServerModalSnapshot(): boolean {
  return false;
}

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // External store subscriptions (React 18/19 best practice - zero cascading renders)
  const isScrolledByScroll = useSyncExternalStore(subscribeScroll, getScrollSnapshot, getServerScrollSnapshot);
  const isModalOpen = useSyncExternalStore(subscribeModal, getModalSnapshot, getServerModalSnapshot);

  // Ref untuk melacak arah scroll (delta)
  const lastScrollYRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout saat unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Effect untuk mengontrol visibility navbar saat scroll naik/turun
  useEffect(() => {
    const handleScrollVisibility = () => {
      const currentScrollY = window.scrollY;

      if (isOpen || currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollYRef.current && currentScrollY > 60) {
        setIsVisible(false);
        setActiveDropdown(null);
      } else if (currentScrollY < lastScrollYRef.current) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, [isOpen]);

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

  // State abstraction for clean dynamic theme switching across ALL navlink pages
  const currentPath = pathname || '/';
  const isHomePage = currentPath === '/' || currentPath === '';
  const isUnitDetailPage = currentPath.startsWith('/units/');
  // Pages with dark cinematic hero background vs light page top
  const isDarkHeroPage = isHomePage || isUnitDetailPage;
  const isScrolled = isScrolledByScroll || isOpen;
  // Theme logic for top vs scrolled header
  const isTransparentTop = !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
        isVisible && !isModalOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isTransparentTop
          ? isDarkHeroPage
            ? 'bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent border-none'
            : 'bg-transparent border-none'
          : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-900/5'
      }`}
    >
      <div className="w-full px-6 sm:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo Icon */}
        <Link href="/" className="flex items-center group" aria-label="Sinemus Indonesia Home">
          <div className="relative h-9 w-9 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
            {/* White Icon (Image 2) for transparent dark hero top */}
            <Image
              src="/images/sinemus-icon-white.png"
              alt="Sinemus Indonesia Icon"
              fill
              priority
              sizes="(max-width: 640px) 36px, 44px"
              className={`object-contain transition-opacity duration-300 ${
                isTransparentTop && isDarkHeroPage ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Blue Icon (Image 3) for scrolled / light navbar top */}
            <Image
              src="/images/sinemus-icon-blue.png"
              alt="Sinemus Indonesia Icon"
              fill
              priority
              sizes="(max-width: 640px) 36px, 44px"
              className={`object-contain transition-opacity duration-300 ${
                isTransparentTop && isDarkHeroPage ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
          {mainNavigation.map((item) => {
            const hasSub = Boolean(item.subItems && item.subItems.length > 0);
            const isActive =
              item.href === '/'
                ? isHomePage
                : item.href.startsWith('/units')
                ? isUnitDetailPage
                : currentPath === item.href || currentPath.startsWith(item.href);
            const isDropdownOpen = activeDropdown === item.label;
            const useWhiteNavText = isTransparentTop && isDarkHeroPage;

            return (
              <div
                key={item.label}
                className="relative group py-5"
                onMouseEnter={() => hasSub && handleMouseEnter(item.label)}
                onMouseLeave={hasSub ? handleMouseLeave : undefined}
              >
                {hasSub ? (
                  <button
                    type="button"
                    className={`relative flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                      useWhiteNavText
                        ? isActive || isDropdownOpen
                          ? 'text-blue-400 font-bold'
                          : 'text-white/90 hover:text-blue-400 group-hover:text-blue-400'
                        : isActive || isDropdownOpen
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-700 hover:text-blue-600 group-hover:text-blue-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isDropdownOpen
                          ? 'rotate-180 text-blue-500'
                          : useWhiteNavText
                          ? 'text-slate-400 group-hover:text-blue-400'
                          : 'text-slate-400 group-hover:text-blue-600'
                      }`}
                    />
                    {/* Animated Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ease-out ${
                        useWhiteNavText ? 'bg-blue-400' : 'bg-blue-600'
                      } ${
                        isActive || isDropdownOpen
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative py-1 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 group ${
                      useWhiteNavText
                        ? isActive
                          ? 'text-blue-400 font-bold'
                          : 'text-white/90 hover:text-blue-400'
                        : isActive
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Animated Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ease-out ${
                        useWhiteNavText ? 'bg-blue-400' : 'bg-blue-600'
                      } ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </Link>
                )}

                {/* Mega Dropdown Menu (Adaptive Theme) */}
                <AnimatePresence>
                  {hasSub && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: MOTION_DURATIONS.fast, ease: MOTION_EASINGS.cinematic }}
                      className={`absolute top-full -left-20 w-[540px] p-4 rounded-2xl shadow-2xl border z-50 ${
                        useWhiteNavText
                          ? 'bg-slate-950/95 backdrop-blur-2xl border-white/10 shadow-black/60'
                          : 'bg-white/98 backdrop-blur-2xl border-slate-200/90 shadow-slate-900/10'
                      }`}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`text-[10px] font-mono uppercase tracking-widest px-3 pt-1 pb-2.5 mb-3 flex items-center justify-between border-b ${
                          useWhiteNavText ? 'border-white/10 text-slate-400' : 'border-slate-100 text-slate-500'
                        }`}
                      >
                        <span className={`font-bold ${useWhiteNavText ? 'text-white' : 'text-slate-900'}`}>
                          Unit Bisnis Sinemus
                        </span>
                        <span className="text-slate-400">4 Pilar Integrasi</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {item.subItems?.map((sub) => {
                          const isSubActive = currentPath === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`group/sub flex flex-col justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                                useWhiteNavText
                                  ? isSubActive
                                    ? 'bg-blue-950/60 border-blue-500/50 text-blue-300 shadow-xs'
                                    : 'bg-slate-900/60 border-white/5 hover:bg-slate-900/90 hover:border-blue-500/40'
                                  : isSubActive
                                  ? 'bg-blue-50/80 border-blue-200 text-blue-700 shadow-xs'
                                  : 'bg-slate-50/70 border-slate-200/70 hover:bg-blue-50/50 hover:border-blue-300'
                              }`}
                            >
                              <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span
                                    className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                                      useWhiteNavText
                                        ? 'text-white group-hover/sub:text-blue-400'
                                        : 'text-slate-900 group-hover/sub:text-blue-600'
                                    }`}
                                  >
                                    {sub.label}
                                  </span>
                                  <ArrowRight
                                    className={`w-3.5 h-3.5 transition-all ${
                                      useWhiteNavText
                                        ? 'text-slate-400 group-hover/sub:text-blue-400 group-hover/sub:translate-x-1'
                                        : 'text-slate-400 group-hover/sub:text-blue-600 group-hover/sub:translate-x-1'
                                    }`}
                                  />
                                </div>
                                <p
                                  className={`text-[11px] font-body font-normal leading-relaxed line-clamp-2 ${
                                    useWhiteNavText ? 'text-slate-300' : 'text-slate-600'
                                  }`}
                                >
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <Button
          className={`group md:hidden ${
            isTransparentTop && isDarkHeroPage
              ? 'text-white bg-white/10 border-white/15 hover:bg-white/20 hover:text-white'
              : 'text-slate-900 bg-slate-50 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
          }`}
          variant="outline"
          size="icon"
          onClick={() => setIsOpen((prevState) => !prevState)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="pointer-events-none"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L20 12"
              className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
            />
            <path
              d="M4 12H20"
              className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            />
            <path
              d="M4 12H20"
              className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
            />
          </svg>
        </Button>
      </div>

      {/* Mobile Drawer (Adaptive Theme) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: MOTION_DURATIONS.fast, ease: MOTION_EASINGS.cinematic }}
            className={`md:hidden px-6 pt-4 pb-6 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto border-t border-b ${
              isTransparentTop && isDarkHeroPage
                ? 'bg-slate-950/95 backdrop-blur-2xl border-white/10'
                : 'bg-white/98 backdrop-blur-2xl border-slate-200'
            }`}
          >
            {mainNavigation.map((item) => {
              const hasSub = Boolean(item.subItems && item.subItems.length > 0);
              const isActive =
                item.href === '/'
                  ? isHomePage
                  : item.href.startsWith('/units')
                  ? isUnitDetailPage
                  : currentPath === item.href || currentPath.startsWith(item.href);
              const isExpanded = mobileExpanded === item.label;
              const useWhiteMobileText = isTransparentTop && isDarkHeroPage;

              if (hasSub) {
                return (
                  <div
                    key={item.label}
                    className={`rounded-xl border overflow-hidden transition-all ${
                      useWhiteMobileText ? 'border-white/10 bg-slate-900/60' : 'border-slate-200 bg-slate-50/80'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className={`w-full px-4 py-3 flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wider transition-colors ${
                        useWhiteMobileText
                          ? isActive
                            ? 'text-blue-400 bg-blue-950/50'
                            : 'text-white/90 hover:text-blue-400 hover:bg-slate-800/50'
                          : isActive
                          ? 'text-blue-600 bg-blue-50/60'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded
                            ? 'rotate-180 text-blue-500'
                            : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Submenu Accordion */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`px-3 pb-3 pt-1 space-y-2 border-t ${
                            useWhiteMobileText
                              ? 'border-white/10 bg-slate-950/50'
                              : 'border-slate-200 bg-slate-100/60'
                          }`}
                        >
                          {item.subItems?.map((sub) => {
                            const isSubActive = currentPath === sub.href;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileExpanded(null);
                                }}
                                className={`block p-3 rounded-lg border transition-all ${
                                  useWhiteMobileText
                                    ? isSubActive
                                      ? 'bg-blue-950/80 border-blue-500/50 text-blue-300 font-bold shadow-xs'
                                      : 'bg-slate-900/80 border-white/10 text-white/90 hover:bg-slate-800 hover:border-blue-400/40 hover:text-blue-400'
                                    : isSubActive
                                    ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold shadow-xs'
                                    : 'bg-white border-slate-200/80 text-slate-700 hover:bg-blue-50/60 hover:border-blue-200 hover:text-blue-600'
                                }`}
                              >
                                <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wide">
                                  <span>{sub.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                </div>
                                <p
                                  className={`text-[11px] font-body normal-case font-normal mt-1 leading-tight line-clamp-2 ${
                                    useWhiteMobileText ? 'text-slate-300' : 'text-slate-500'
                                  }`}
                                >
                                  {sub.description}
                                </p>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl border transition-all text-xs font-heading uppercase tracking-wider ${
                    useWhiteMobileText
                      ? isActive
                        ? 'bg-blue-950/80 border-blue-500/50 text-blue-300 font-bold shadow-xs'
                        : 'bg-slate-900/80 border-white/10 text-white/90 hover:bg-slate-800 hover:border-blue-400/40 hover:text-blue-400'
                      : isActive
                      ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/60 hover:border-blue-200 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
