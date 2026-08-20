'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { X, Sparkles, ArrowRight, MessageSquare, CheckCircle2, Compass } from 'lucide-react';
import { BusinessUnit } from '../types';

interface UnitComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  unit: BusinessUnit;
}

export const UnitComingSoonModal: React.FC<UnitComingSoonModalProps> = ({
  isOpen,
  onClose,
  unit,
}) => {
  // Lock body scroll and trigger modal-open for Navbar auto-hide, and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleExploreCapabilities = () => {
    onClose();
    const capabilitiesEl = document.getElementById('capabilities');
    if (capabilitiesEl) {
      capabilitiesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          aria-describedby="coming-soon-desc"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-lg bg-slate-900/95 border border-slate-800 text-white rounded-2xl shadow-2xl shadow-blue-950/50 overflow-hidden z-10 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top decorative gradient ambient line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup jendela informasi"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-xl transition-all border border-slate-700/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Status Badge & Header */}
              <div className="space-y-3">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <span>Platform Mandiri Segera Hadir</span>
                </div>

                <h3
                  id="coming-soon-title"
                  className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight leading-snug"
                >
                  Website Resmi <span className="text-blue-400">{unit.title}</span> Sedang Disiapkan
                </h3>

                <p id="coming-soon-desc" className="text-sm text-slate-300 leading-relaxed font-body">
                  Platform digital mandiri untuk unit ini sedang dalam tahap perancangan dan optimalisasi fitur untuk menghadirkan pengalaman ekosistem perfilman yang komprehensif.
                </p>
              </div>

              {/* Operational Reassurance Card */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Layanan Tetap Beroperasi Penuh</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Seluruh layanan konsultasi, produksi, pelatihan, dan kolaborasi untuk <strong className="text-white font-medium">{unit.title}</strong> tetap berjalan aktif melalui koordinasi langsung bersama tim Sinemus Indonesia.
                </p>
              </div>

              {/* Unit Capabilities Preview */}
              {unit.capabilities && unit.capabilities.length > 0 && (
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Fokus & Kapabilitas Unit:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {unit.capabilities.slice(0, 3).map((capability, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-white">{capability.title}</span>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{capability.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleExploreCapabilities}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-slate-700 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer active:scale-98"
                >
                  <Compass className="w-4 h-4 text-slate-400" />
                  <span>Lihat Kapabilitas</span>
                </button>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-medium shadow-lg shadow-blue-600/25 transition-all cursor-pointer active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi Tim Kami</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
