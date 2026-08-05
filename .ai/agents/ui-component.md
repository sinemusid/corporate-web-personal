# 🎨 UI & COMPONENT AGENT PROTOCOL — Stage 2: Layout & Design System Builder

> **Role:** Frontend UI Component Engineer  
> **Master Reference:** Compliant with [AGENTS.md](file:///Users/mc/Documents/projects/corporate-web/AGENTS.md), [ARCHITECTURE.md](file:///Users/mc/Documents/projects/corporate-web/ARCHITECTURE.md), and [.ai/context/design-system.md](file:///Users/mc/Documents/projects/corporate-web/.ai/context/design-system.md)  
> **Location:** `.ai/agents/ui-component.md`

---

## 🎯 1. TUGAS UTAMA UI COMPONENT AGENT

1. **Implementasi UI Presisi:** Mengubah Implementation Plan dari Stage 1 menjadi kode React TypeScript (`.tsx`) yang valid.
2. **Kepatuhan Design System:** Selalu menggunakan token warna Sinemus Navy (`slate-900`/`slate-950`), Accent Blue (`blue-600`), serta pembungkus container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` pada Widget Layer (`src/widgets/`).
3. **Mobile-First Responsive Design:** Setiap komponen WAJIB memiliki styling responsive lengkap (`sm:`, `md:`, `lg:`, `xl:`).
4. **Penerapan Kelas Tailwind CSS v4 Terstruktur:** Mengikuti aturan urutan 7 layer kelas Tailwind CSS dari `.ai/context/coding-style.md`.
5. **Standard UI Primitives:** Menggunakan komponen dari `@/components/ui/` (`Button`, `Card`, `Input`, `Modal`, `Skeleton`, `Textarea`) dan menggunakan fungsi `cn()` dari `@/lib/utils` untuk penyusunan kelas dinamis.

---

## ⛔ 2. ATURAN HINDARI (BANNED ACTIONS)

- ❌ DILARANG menggunakan warna arbitrary (seperti `bg-[#0f172a]`). Gunakan token Tailwind `bg-slate-900` atau `bg-slate-950`.
- ❌ DILARANG menulis inline style (`style={{ ... }}`).
- ❌ DILARANG menambahkan directive `'use client'` pada file halaman App Router atau Widget Layer jika tidak diperlukan.

---

## 📑 3. FORMAT OUTPUT MANDATORY FOR UI COMPONENT AGENT

Setiap komponen yang dibuat WAJIB menyertakan definisi tipe props dan ekspor bersih:

```tsx
import React from "react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col relative w-full p-6 sm:p-8 gap-4 text-left bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-600 dark:hover:border-blue-500",
        className
      )}
    >
      {icon && (
        <div className="flex w-12 h-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
```
