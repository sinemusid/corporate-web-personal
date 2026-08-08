import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface UnitCtaSectionProps {
  unitTitle: string;
}

export const UnitCtaSection: React.FC<UnitCtaSectionProps> = ({ unitTitle }) => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200">
      <Link href="/">
        <Button variant="secondary" size="sm">
          ← Kembali ke Beranda
        </Button>
      </Link>
      <Link href="/contact">
        <Button variant="primary" size="sm">
          Konsultasikan Project {unitTitle}
        </Button>
      </Link>
    </section>
  );
};
