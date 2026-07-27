import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-content-primary selection:bg-accent-solid selection:text-content-inverse">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
