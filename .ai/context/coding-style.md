# 💻 CODING STYLE CONTEXT — Sinemus Corporate Web

> **Protocol Reference:** Compliant with [AGENTS.md](file:///Users/mc/Documents/projects/corporate-web/AGENTS.md) and [ARCHITECTURE.md](file:///Users/mc/Documents/projects/corporate-web/ARCHITECTURE.md)  
> **Location:** `.ai/context/coding-style.md`

---

## ⚡ 1. KONVENSI NEXT.JS APP ROUTER & REACT SERVER COMPONENTS

### Server Components First Policy
1. **RSC secara Default:** Semua file halaman di `src/app/(public)/`, layout (`layout.tsx`), dan composite widgets di `src/widgets/` WAJIB menjadi React Server Components (RSC).
2. **Directive `'use client'` Boundary:**
   - Tambahkan directive `'use client'` HANYA pada komponen tingkat atomik/feature di `src/features/` atau `src/components/ui/` yang memerlukan:
     - React state (`useState`, `useReducer`).
     - Lifecycle hooks (`useEffect`, `useCallback`, `useRef`).
     - Event listeners (`onClick`, `onSubmit`, `onChange`).
   - Dilarang menjadikan seluruh widget seksi atau halaman App Router sebagai `'use client'`. Isolasikan interaktivitas ke komponen terkecil!

---

## 🛡️ 2. TYPESCRIPT STRICTNESS & TYPING RULES

1. **Zero `any` Policy:** Penggunaan tipe `any` dilarang keras! Selalu tentukan tipe data secara eksplisit.
2. **Interface Definition:** Semua props komponen WAJIB memiliki tipe interface bernama `<NamaKomponen>Props`.
   ```tsx
   interface FeatureCardProps {
     title: string;
     description: string;
     icon?: React.ReactNode;
     className?: string;
   }
   ```
3. **Data Import Types:** Tipe data domain WAJIB diexport dari folder `types/` internal feature (`src/features/<domain>/types`) atau global `src/types/`.

---

## 🎨 3. URUTAN TAILWIND CSS CLASS (STANDARD ORDERING)

Untuk menjaga keterbacaan kode UI pada Tailwind CSS v4, susun kelas Tailwind CSS mengikuti urutan 7 layer berikut:

1. **Display & Layout:** `flex`, `grid`, `block`, `hidden`, `inline-flex`
2. **Positioning & Inset:** `relative`, `absolute`, `fixed`, `top-0`, `z-10`, `inset-0`
3. **Box Model & Sizing:** `w-full`, `max-w-7xl`, `h-auto`, `p-6`, `px-4`, `py-12`, `mx-auto`
4. **Flexbox / Grid Alignment:** `items-center`, `justify-between`, `gap-4`, `grid-cols-1 md:grid-cols-3`
5. **Typography:** `text-2xl`, `font-bold`, `text-slate-900`, `leading-relaxed`, `text-center`
6. **Visuals & Decoration:** `bg-white`, `bg-slate-900`, `border`, `rounded-2xl`, `shadow-lg`
7. **Transitions & Interactivity:** `transition-all`, `duration-300`, `hover:bg-blue-700`, `cursor-pointer`

---

## 🧼 4. CODE CLEANLINESS & UTILITIES

1. **Utility `cn()`:** Gunakan `cn()` dari `@/lib/utils` untuk penggabungan kelas kondisional:
   ```tsx
   import { cn } from "@/lib/utils";

   export function CustomBadge({ isActive, className }: { isActive: boolean; className?: string }) {
     return (
       <span className={cn("px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700", isActive && "bg-blue-600 text-white", className)}>
         Status
       </span>
     );
   }
   ```
2. **Clean Imports Barrel:**
   - Gunakan barrel export dari `@/widgets` untuk menyusun seksi di `src/app/(public)/`.
   - Gunakan alias `@/` untuk mengimpor dari `src/`.
