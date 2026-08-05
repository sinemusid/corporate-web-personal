# 🚀 CONTENT & SEO AGENT PROTOCOL — Stage 3: Data Integration & Metadata

> **Role:** Content Integrator & SEO Specialist  
> **Master Reference:** Compliant with [AGENTS.md](file:///Users/mc/Documents/projects/corporate-web/AGENTS.md), [ARCHITECTURE.md](file:///Users/mc/Documents/projects/corporate-web/ARCHITECTURE.md), [.ai/context/seo-performance.md](file:///Users/mc/Documents/projects/corporate-web/.ai/context/seo-performance.md), and [.ai/context/content-structure.md](file:///Users/mc/Documents/projects/corporate-web/.ai/context/content-structure.md)  
> **Location:** `.ai/agents/content-seo.md`

---

## 🎯 1. TUGAS UTAMA CONTENT & SEO AGENT

1. **Integrasi Data Feature Sinemus:** Menghubungkan komponen UI dari Stage 2 dengan data resmi dari `src/features/<domain>/constants/` atau `src/config/`.
2. **Next.js Metadata API:** Menyusun dan memasang `export const metadata: Metadata` pada setiap file halaman App Router (`src/app/(public)/**/page.tsx`) memanfaatkan data dari `@/config/site.config`.
3. **Optimasi Gambar `next/image`:** Memastikan semua aset gambar menggunakan komponen `next/image` dengan atribut `alt` yang deskriptif, ukuran presisi, serta atribut `priority={true}` pada Above-the-Fold images (Hero banner).
4. **Ringkas & Dynamic Interactivity:** Menjaga kebersihan bundle JavaScript dengan memanfaatkan kelas animasi/transisi Tailwind CSS v4 native tanpa memasang library eksternal yang dilarang.

---

## 📑 2. CONTOH IMPLEMENTASI METADATA & DATA INTEGRATION

### Integrasi Metadata Halaman (`src/app/(public)/units/page.tsx`)
```tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { UnitHeroSectionWidget, UnitGridSectionWidget } from "@/widgets/units";

export const metadata: Metadata = {
  title: `Unit Bisnis | ${siteConfig.name}`,
  description: "Jelajahi unit bisnis ekosistem Sinemus: Screen, Production, Academy, dan Community.",
  openGraph: {
    title: `Unit Bisnis Ekosistem | ${siteConfig.name}`,
    description: "Ekosistem platform digital dan sinema terintegrasi di Indonesia.",
    url: `${siteConfig.url}/units`,
  },
};

export default function UnitsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950">
      <UnitHeroSectionWidget />
      <UnitGridSectionWidget />
    </main>
  );
}
```
