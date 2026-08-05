# 🚀 SEO & PERFORMANCE CONTEXT — Sinemus Corporate Web

> **Protocol Reference:** Compliant with [AGENTS.md](file:///Users/mc/Documents/projects/corporate-web/AGENTS.md) and [ARCHITECTURE.md](file:///Users/mc/Documents/projects/corporate-web/ARCHITECTURE.md)  
> **Location:** `.ai/context/seo-performance.md`

---

## 🎯 1. STANDAR NEXT.JS METADATA API

Setiap halaman di App Router (`src/app/(public)/**/page.tsx`) WAJIB mengeksport objek `metadata: Metadata` atau memanfaatkan metadata terpusat dari `@/config/site.config`.

### Contoh Implementasi Metadata Halaman:
```typescript
import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Pelajari visi, misi, jajaran kepemimpinan, dan perjalanan milestons Sinemus Indonesia.",
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: "Pelajari visi, misi, dan ekosistem Sinemus Indonesia.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};
```

---

## 🖼️ 2. ATURAN OPTIMASI GAMBAR (`next/image`)

Penggunaan elemen HTML `<img>` biasa DILARANG KERAS. Semua gambar WAJIB menggunakan komponen `next/image`.

### Standard Requirements:
1. **Mandatory Alt Text:** Setiap `next/image` wajib memiliki tag `alt` yang deskriptif dan kontekstual. Dilarang mengosongkan `alt=""` atau sekadar `alt="image"`.
2. **Above-the-Fold (Priority Image):** Gambar Hero section atau banner utama WAJIB menggunakan atribut `priority={true}` untuk mengoptimalkan LCP (Largest Contentful Paint).
3. **Dimensions & Aspect Ratio:**
   - Gunakan `width` dan `height` eksplisit untuk gambar berukuran tetap.
   - Gunakan `fill` yang dikombinasikan dengan wrapper `relative` dan atribut `sizes` untuk gambar responsif:
     ```tsx
     <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
       <Image
         src="/images/units/screen.jpg"
         alt="Sinemus Screen platform overview"
         fill
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         className="object-cover"
       />
     </div>
     ```

---

## ⚡ 3. CORE WEB VITALS & PERFORMANCE PILLARS

Target performa Web Vitals untuk Sinemus Corporate Web:
- **LCP (Largest Contentful Paint):** `< 2.5s`
- **CLS (Cumulative Layout Shift):** `< 0.1`
- **INP (Interaction to Next Paint):** `< 200ms`

### Best Practices:
1. **Font Optimization:** Gunakan `src/config/fonts.ts` dengan `next/font/google` agar tidak menghambat pertunjukan teks.
2. **Prevent Layout Shifts (CLS):** Selalu tentukan ukuran container atau aspect-ratio sebelum gambar/media dimuat.
3. **Keep JS Bundle Lean:** Batasi penggunaan client components, gunakan Tailwind CSS v4 native animations/transitions.
