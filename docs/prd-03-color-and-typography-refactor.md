# PRD-03: Color Palette & Typography Refactor System (SSOT & Grayscale Corporate Aesthetic)

## 1. Executive Summary & Goals
Project `corporate-web` membutuhkan standarisasi sistem warna dan tipografi untuk menciptakan identitas visual yang **elegan, premium, modern, dan minimalis**. Refactoring ini bertujuan memusatkan seluruh variabel desain (*design tokens*) ke satu sumber kebenaran (SSOT), memisahkan tanggung jawab visual (SRP), serta meningkatkan keterbacaan (*accessibility*) dan keterawatan kode (*maintainability*).

### Core Objectives
1. **SSOT (Single Source of Truth):** Seluruh warna dan font didefinisikan secara sentral di `src/app/globals.css`, `tailwind.config.ts`, dan `src/config/fonts.ts`. Tidak boleh ada *hardcoded hex colors* atau font terpisah di level komponen.
2. **SRP (Single Responsibility Principle):** Class Tailwind hanya menggunakan token semantic (contoh: `bg-background-primary`, `text-content-primary`, `border-border-subtle`). Komponen UI dan Widget tidak boleh menentukan warna secara acak.
3. **Monochrome Luxury Palette:** Kombinasi warna terbatas pada Hitam Obsidian, White Pure, Alabaster, dan Neutral Zinc/Gray dengan kontras tinggi.
4. **Typography System:** Implementasi *font pairing* profesional untuk memberikan hirarki visual yang tegas dan bersih.

---

## 2. Typography Architecture

### Font Configuration (`src/config/fonts.ts`)
Menggunakan Font Google bawaan `next/font/google` dengan variabel CSS:

* **Primary Heading:** `Plus Jakarta Sans` (CSS variable: `--font-heading`)
* **Body / Text:** `Inter` / `Geist` (CSS variable: `--font-body`)
* **Mono / Technical:** `JetBrains Mono` (CSS variable: `--font-mono`)

### Typography Hierarchy Tokens
Daftar token utilitas font yang harus dipetakan di Tailwind:

| Token | Utility Class | Style Specs | Peruntukan |
| :--- | :--- | :--- | :--- |
| **Display Header** | `text-display` | `font-heading font-extrabold text-4xl md:text-6xl tracking-tight` | Hero Titles |
| **Heading 1** | `text-h1` | `font-heading font-bold text-3xl md:text-4xl tracking-tight` | Section Titles |
| **Heading 2** | `text-h2` | `font-heading font-semibold text-2xl md:text-3xl tracking-normal` | Card Headers, Subsections |
| **Heading 3** | `text-h3` | `font-heading font-medium text-lg md:text-xl tracking-normal` | Small Headers, Modal Titles |
| **Body Large** | `text-body-lg` | `font-body font-normal text-lg leading-relaxed` | Lead Paragraphs, Intros |
| **Body Base** | `text-body` | `font-body font-normal text-base leading-normal` | Main Body Text |
| **Body Small** | `text-body-sm` | `font-body font-normal text-sm leading-normal` | Captions, Metadata, Subtitles |
| **Caption / Label** | `text-caption` | `font-mono font-medium text-xs uppercase tracking-widest` | Badges, Taglines, Dates |

---

## 3. Grayscale Color System (Tokens)

Warna didefinisikan menggunakan variabel HSL/OKLCH atau Hex di `globals.css` dan dipetakan ke Tailwind config.

### Color Tokens Definition (`src/app/globals.css`)
```css
@layer base {
  :root {
    /* Canvas / Surfaces */
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --bg-tertiary: #f1f3f5;
    --bg-elevated: #ffffff;
    --bg-inverse: #09090b;

    /* Content / Typography */
    --content-primary: #09090b;
    --content-secondary: #52525b;
    --content-tertiary: #71717a;
    --content-muted: #a1a1aa;
    --content-inverse: #ffffff;

    /* Borders & Dividers */
    --border-subtle: #e4e4e7;
    --border-default: #d4d4d8;
    --border-strong: #27272a;
    --border-focus: #09090b;

    /* Interactive States (Primary Accent = Charcoal Obsidian) */
    --accent-solid: #09090b;
    --accent-solid-hover: #27272a;
    --accent-subtle: #f4f4f5;
    --accent-subtle-hover: #e4e4e7;
  }

  .dark {
    /* Dark Mode Minimalist Surfaces */
    --bg-primary: #09090b;
    --bg-secondary: #121215;
    --bg-tertiary: #18181b;
    --bg-elevated: #27272a;
    --bg-inverse: #ffffff;

    --content-primary: #f4f4f5;
    --content-secondary: #a1a1aa;
    --content-tertiary: #71717a;
    --content-muted: #52525b;
    --content-inverse: #09090b;

    --border-subtle: #27272a;
    --border-default: #3f3f46;
    --border-strong: #a1a1aa;
    --border-focus: #ffffff;

    --accent-solid: #ffffff;
    --accent-solid-hover: #e4e4e7;
    --accent-subtle: #18181b;
    --accent-subtle-hover: #27272a;
  }
}
```

- Tailwind Integration (tailwind.config.ts)

```TypeScript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          elevated: "var(--bg-elevated)",
          inverse: "var(--bg-inverse)",
        },
        content: {
          primary: "var(--content-primary)",
          secondary: "var(--content-secondary)",
          tertiary: "var(--content-tertiary)",
          muted: "var(--content-muted)",
          inverse: "var(--content-inverse)",
        },
        borderToken: {
          subtle: "var(--border-subtle)",
          default: "var(--border-default)",
          strong: "var(--border-strong)",
          focus: "var(--border-focus)",
        },
        accent: {
          solid: "var(--accent-solid)",
          "solid-hover": "var(--accent-solid-hover)",
          subtle: "var(--accent-subtle)",
          "subtle-hover": "var(--accent-subtle-hover)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

## 4. Execution Directives for AI Agent
AI Agent Wajib mengikuti urutan langkah eksekusi berikut secara bertahap:

### Step 1: Font Setup (src/config/fonts.ts)
- Konfigurasikan Plus_Jakarta_Sans, Inter, dan JetBrains_Mono dari next/font/google.
- Ekspor variabel font (--font-heading, --font-body, --font-mono).
- Terapkan class variabel tersebut pada elemen <html> atau <body> di src/app/layout.tsx.

### Step 2: Design Tokens Baseline (src/app/globals.css & tailwind.config.ts)
- Perbarui globals.css dengan CSS Variables yang telah disepakati.
- Tambahkan pemetaan warna & font ke tailwind.config.ts.
- Hapus kelas Tailwind warna bawaan yang tidak standar (seperti bg-blue-600, text-red-500, bg-slate-900) dari komponen jika bertujuan sebagai token UI umum.

### Step 3: UI Layer Standardization (src/components/ui/)
- Refactor seluruh reusable UI components agar tunduk pada token SSOT:
- Button.tsx: Gunakan bg-accent-solid text-content-inverse hover:bg-accent-solid-hover untuk variant primary.
- Card.tsx: Gunakan bg-bg-elevated border border-borderToken-subtle text-content-primary.
- Input.tsx & Textarea.tsx: Gunakan bg-bg-primary border border-borderToken-default focus:border-borderToken-focus text-content-primary placeholder:text-content-muted.
- Modal.tsx: Gunakan backdrop bg-black/60 dengan container bg-bg-elevated border border-borderToken-subtle.
- Skeleton.tsx: Gunakan bg-bg-tertiary animate-pulse.

### Step 4: Common Components Standardization (src/components/common/)
- Navbar.tsx: Terapkan backdrop blur dengan bg-bg-primary/80 backdrop-blur-md border-b border-borderToken-subtle.
- Footer.tsx: Terapkan layout clean dengan bg-bg-secondary text-content-secondary border-t border-borderToken-subtle.
- SectionWrapper.tsx: Pastikan memiliki opsi padding konsisten dan bg-bg-primary atau bg-bg-secondary secara modular.

### Step 5: Feature & Widget Component Refactoring
Lakukan scanning dan refactoring pada file di src/features/ dan src/widgets/:
- Ganti semua text-gray-XXX, bg-zinc-XXX, border-neutral-XXX hardcoded dengan semantic token (text-content-primary,text-content-secondary, bg-bg-primary, bg-bg-secondary, border-borderToken-subtle).
- Pastikan semua Heading menggunakan class font font-heading dan elemen teks biasa menggunakan font-body.
- Periksa file widget berikut:
src/widgets/home/*
src/widgets/about-us/*
src/widgets/collaborators/*
src/widgets/contact/*
src/widgets/units/*

### 5. Quality Assurance & Refactoring Rules for AI
1. No Hardcoded Hex Colors: Dilarang keras menuliskan warna hex seperti #000000, #FFF, #111827 di dalam JSX/TSX. Semua harus menggunakan token Tailwind (bg-bg-primary, text-content-secondary, dll).
2. Typography Consistency: Semua judul (<h1> sampai <h6>) wajib menyertakan atribut font-heading. Semua paragraph (<p>, <span>, <li>) wajib menggunakan font-body.
3. High Contrast Compliance: Pastikan kontras teks text-content-secondary terhadap bg-bg-primary dan bg-bg-secondary memenuhi standar WCAG 2.1 AA (minimal rasio 4.5:1).
4. Zero Layout Distortion: Refactoring ini hanya boleh mengubah kelas warna, border, background, dan tipografi. Struktur flexbox, grid, margin, padding, dan logika data tidak boleh diubah.

### 6. Verification Checklist
- [ ] src/config/fonts.ts berhasil mengimpor Google Fonts & diekspor ke layout.tsx.
- [ ] tailwind.config.ts memuat token colors.bg, colors.content, colors.borderToken, dan fontFamily.
- [ ] Semua file di src/components/ui/ bebas dari warna Tailwind standar (bg-slate-X, text-gray-X).
- [ ] Komponen Navbar & Footer menggunakan warna token semantic.
- [ ] Halaman Home, About, Collaborator, Contact, dan Units dapat di-render tanpa kesalahan sintaks.
- [ ] Tampilan visual memiliki nuansa monokrom murni (hitam, abu-abu, putih) yang konsisten di seluruh halaman.