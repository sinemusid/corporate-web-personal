import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface UnitCtaSectionProps {
  unitTitle: string;
}

export const UnitCtaSection: React.FC<UnitCtaSectionProps> = ({ unitTitle }) => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-borderToken-subtle">
      <Link href="/">
        <Button variant="secondary" size="sm">
          ← Kembali ke Hub Unit Bisnis
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
