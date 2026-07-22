import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const JoinOurMission: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-900 border border-red-900/40 p-8 md:p-12 text-center space-y-6 overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-extrabold text-white">Join Our Mission</h2>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Apakah Anda seorang sineas, produser, edukator, atau inovator media? Mari bergabung dan berkolaborasi dalam membangun masa depan industri kreatif Indonesia.
        </p>
        <div className="pt-4 flex justify-center space-x-4">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Kirim Portofolio / Ide Baru
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
