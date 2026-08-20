import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface UnitCtaSectionProps {
  unitTitle?: string;
}

export const UnitCtaSection: React.FC<UnitCtaSectionProps> = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
      <Link href="/#units">
        <Button
          variant="outline"
          size="default"
          className="group inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-all"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Semua Unit</span>
        </Button>
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
