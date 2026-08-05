# 🎨 DESIGN SYSTEM CONTEXT — Sinemus Corporate Web

> **Protocol Reference:** Compliant with [AGENTS.md](file:///Users/mc/Documents/projects/corporate-web/AGENTS.md) and [ARCHITECTURE.md](file:///Users/mc/Documents/projects/corporate-web/ARCHITECTURE.md)  
> **Location:** `.ai/context/design-system.md`

---

## 🎨 1. COLOR PALETTE & DESIGN TOKENS

Semua warna yang digunakan dalam Corporate Web Sinemus WAJIB mengacu pada token Tailwind CSS di bawah ini. **DILARANG menggunakan warna arbitrary (magic hex like `#1e293b`) secara langsung di komponen.**

### Primary & Background Tokens
- **Sinemus Navy (Primary Dark):** `slate-900` (`#0f172a`) / `slate-950` (`#020617`)
- **Dark Surface / Card (Glassmorphism):** `slate-800` (`#1e293b`) / `bg-white/[0.03]`
- **Light Surface / Card:** `white` (`#ffffff`) / `slate-50` (`#f8fafc`)
- **App Background (Light):** `bg-white` / `bg-slate-50`
- **App Background (Dark):** `bg-slate-900` / `bg-slate-950`

### Accent & Interactive Tokens
- **Accent Blue (Brand Action):** `blue-600` (`#2563eb`)
- **Accent Blue Hover:** `blue-700` (`#1d4ed8`)
- **Executive Accent (Gold/Amber):** `amber-400` / `amber-500`
- **Technology Accent (Cyan):** `cyan-400` / `cyan-500`
- **Soft Accent Background:** `blue-50` (`#eff6ff`) / `blue-950/50`

### Typography & Border Tokens
- **Text Primary (Dark/Light):** `text-slate-900` / `text-white`
- **Text Secondary (Muted):** `text-slate-600` / `text-slate-400`
- **Text Subtle:** `text-slate-500`
- **Border Default:** `border-slate-200` (Light Mode) / `border-slate-800` atau `border-white/10` (Dark Mode)

---

## 📐 2. SPACING, CONTAINER & LAYOUT BREAKPOINTS

### Container Standard
Setiap seksi halaman di dalam Widget Layer (`src/widgets/`) WAJIB dibungkus dengan wrapper container berikut:
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Section Content */}
</div>
```

### Vertical Section Spacing
- **Section Padding (Y-axis):** `py-16 md:py-24 lg:py-32`
- **Gap Antar Element:** `gap-6` (Small), `gap-8` (Medium), `gap-12` (Large)

### Breakpoints Standard
- **Mobile (`base`):** `< 640px` (Single column layout)
- **Tablet (`sm` / `md`):** `640px` - `768px` (2 columns grid)
- **Desktop (`lg` / `xl`):** `1024px` - `1280px+` (3 or 4 columns grid)

---

## 🔤 3. TYPOGRAPHY SYSTEM

Gunakan font standar dari `src/config/fonts.ts` (Inter / Sans-Serif) dengan hierarki class Tailwind sebagai berikut:

| Element | Class Tailwind CSS | Penggunaan |
| :--- | :--- | :--- |
| `<h1>` | `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white` | Hero main heading (Hanya 1 per halaman) |
| `<h2>` | `text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white` | Section Title |
| `<h3>` | `text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white` | Card Title / Feature Title |
| `<h4>` | `text-lg font-medium text-slate-800 dark:text-slate-200` | Sub-feature Title / Modal Title |
| `Body` | `text-base text-slate-600 dark:text-slate-300 leading-relaxed` | Paragraf Deskripsi Utama |
| `Muted` | `text-sm text-slate-500 dark:text-slate-400` | Subtitle / Caption / Meta Data |

---

## 🧱 4. SHADCN UI & PRIMITIVE COMPONENTS

1. **Import Location:** Selalu import komponen UI dasar dari `@/components/ui/`.
   - Komponen eksis: `Button`, `Card`, `Input`, `Modal`, `Skeleton`, `Textarea`.
   - Contoh: `import { Button } from "@/components/ui/Button"`
2. **Customization Method:** Modifikasi tampilan komponen UI dasar menggunakan properti `className` dengan utility `cn()` yang terdapat di `@/lib/utils`.
3. **Icons:** Gunakan Lucide React (`import { IconName } from "lucide-react"`) atau komponen icon kustom dari `@/components/icons`.
