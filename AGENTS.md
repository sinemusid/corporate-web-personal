# 🤖 AGENTS.md — Global AI Agent Protocol (Sinemus Corporate Web)
> **Project:** Sinemus Corporate Website  
> **Scope:** Frontend Only (Next.js App Router, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion)  
> **Philosophy:** Setup Sekali, Pakai Berulang — UI Presisi, SEO-Friendly, Responsive, Aman.

---

## 🎯 1. TUJUAN & PRINSIP UTAMA (CORE PRINCIPLES)

Dokumen ini adalah **Aturan Tertinggi (Master Protocol)** yang wajib dipatuhi oleh seluruh AI Agent (LLM, Code Assistant, Orchestrator) saat berinteraksi dengan codebase Corporate Web Sinemus.

### 🌟 5 Pilar Utamakan Kualitas Frontend:
1. **Design System Consistency:** Selalu gunakan Design Tokens (Warna, Typography, Spacing) yang ditentukan. Dilarang memakai *magic numbers* atau warna arbitrary tanpa izin.
2. **Mobile-First Responsive Design:** Setiap komponen WAJIB memiliki styling responsive lengkap (`sm:`, `md:`, `lg:`, `xl:`).
3. **SEO & Accessibility (a11y) First:** Gunakan Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h6>`), ALT text pada gambar, dan ARIA attributes.
4. **Performa & Web Vitals:** Optimasi pengunaan `next/image`, `next/font`, dan batasi *client components* (`'use client'`) hanya jika diperlukan.
5. **Kualitas Di Atas Kecepatan:** Lebih baik merencanakan susunan komponen daripada menghasilkan kode UI yang merusak tata letak layar lain.

---

## 🛡️ 2. PROTOKOL ANTI-HALUSINASI (FRONTEND GUARDRAILS)

Setiap AI Agent WAJIB mematuhi instruksi berikut untuk menjamin keakuratan 100%:

### ❌ BANNED ACTIONS (HAL YANG HARUS DIHINDARI):
* ⛔ **DILARANG MEMBACA SELURUH REPOSITORY SEKALIGUS.** Gunakan **Code Index / RAG** untuk mencari komponen, hooks, atau file spesifik.
* ⛔ **DILARANG MENULIS KODE PADA TAHAP PLANNER.** Planner HANYA membuat skenario, breakdown komponen, susunan layout, dan daftar file.
* ⛔ **DILARANG MENGUBAH TEKS KONTEN PERUSAHAAN (COPYWRITING)** tanpa konfirmasi atau rujukan dari `.ai/context/content-structure.md`.
* ⛔ **DILARANG MENGGABUNGKAN BANYAK HALAMAN DALAM SATU SESI CHAT.** Jalankan **1 Halaman / 1 Komponen Utama per Sesi Chat**.
* ⛔ **DILARANG MEMAKAI LIBRARY NPM BARU** tanpa persetujuan di dalam Implementation Plan.

### ✅ MANDATORY ACTIONS (HAL YANG WAJIB DILAKUKAN):
* ✔️ **Verifikasi File & Import Eksis:** Sebelum mengimpor komponen atau icon (misal Lucide React), pastikan komponen/icon tersebut ada dan valid.
* ✔️ **Gunakan Standard Rujukan:** Selalu baca `.ai/context/design-system.md`, `.ai/context/coding-style.md`, dan `.ai/context/seo-performance.md`.
* ✔️ **Server Components First:** Gunakan React Server Components (RSC) secara default. Tambahkan `'use client'` HANYA pada komponen yang membutuhkan *state*, *event listener*, atau *browser API*.

---

## 🔄 3. ALUR WORKFLOW & PERAN AGENT (WORKFLOW PIPELINE)

Workflow terdiri dari 5 Tahap Sekuensial. Agent TIDAK BOLEH melompati tahapan!

```text
[User Request] ➡️ (1) PLANNER ➡️ (2) UI & COMPONENT ➡️ (3) CONTENT & SEO ➡️ (4) REVIEWER ➡️ (5) FINALIZE ➡️ [Selesai]
```

### TAHAP 1: 📋 PLANNER AGENT (Analisis UI/UX & Layout Plan)
File Rujukan: AGENTS.md, ARCHITECTURE.md, .ai/context/design-system.md, .ai/agents/planner.md

Tugas Utama:
- Pahami kebutuhan halaman/komponen corporate web.
- Susun breakdown hierarki komponen (Parent -> Child -> Atomic UI).
- Tentukan strategi layout responsive (Mobile -> Tablet -> Desktop).
- Buat Implementation Plan terperinci (TIDAK BOLEH menulis kode).

Format Output Mandatory:
- Daftar Komponen Baru / Diubah: [misal: HeroSection.tsx, FeatureCard.tsx]
- Hierarki Layout & Grid: [Flexbox / Grid breakdown]
- Asset / Icon Requirements: [Lucide Icons, Gambar/Illustration]
- Strategi State / Interaction: [Server/Client Component decision]
- Urutan Langkah Implementasi: [Step 1, Step 2, ...]

### TAHAP 2: 🎨 UI & COMPONENT AGENT (Layout & Design System)
File Rujukan: AGENTS.md, .ai/context/design-system.md, .ai/context/coding-style.md, .ai/agents/ui-component.md

Teknologi: Next.js (App Router), Tailwind CSS, TypeScript

Tugas Utama:
- Implementasikan komponen UI berdasarkan Implementation Plan Stage 1.
- Gunakan Tailwind CSS class yang konsisten dengan Design Tokens.
- Pastikan layout fluid dan responsive di semua breakpoint (sm:, md:, lg:, xl:).
- Hindari penulisan inline style atau warna kustom yang di luar standar.

Format Output Mandatory:
- Kode Komponen React/TypeScript (.tsx)
- Export & Prop Types Definitions

### TAHAP 3: 🚀 CONTENT, SEO & INTERACTION AGENT (Data, Metadata & Animation)
File Rujukan: AGENTS.md, .ai/context/content-structure.md, .ai/context/seo-performance.md, .ai/agents/content-seo.md

Tugas Utama:
- Integrasikan data konten perusahaan Sinemus (Profil, Layanan, Tim, Portofolio).
- Buat Metadata API (export const metadata: Metadata) termasuk OpenGraph & Twitter Cards.
- Tambahkan mikro-interaksi / animasi halus menggunakan Framer Motion atau Tailwind Transition.
- Pastikan semua gambar menggunakan next/image dengan atribut alt, width, height, atau fill.

Format Output Mandatory:
- Integrasi Konten & Metadata Config
- Framer Motion / Interactive Wrapper

### TAHAP 4: 🛡️ REVIEWER AGENT (UI Audit, Accessibility & Web Vitals)
File Rujukan: AGENTS.md, .ai/context/seo-performance.md, .ai/agents/reviewer.md

Tugas Utama:
- Audit tampilan visual dan potensi layout break di layar mobile/tablet.
- Cek Aksesibilitas (Semantic HTML, Alt text, Keyboard navigation, Color contrast).
- Cek Performa (Excessive re-renders, unoptimized assets, 'use client' pollution).
- Cek konsistensi penamaan dan struktur folder.

Format Output Mandatory:
- Daftar Temuan (UI/UX/SEO Bug): [Penjelasan masalah]
- Rekomendasi Perbaikan: [Langkah spesifik]
- Status Keputusan: APPROVED atau NEED FIX

### TAHAP 5: ✨ FINALIZE (Refactor, Polish & Selesai)
Tugas Utama:
- Perbaiki temuan dari Reviewer Agent jika status NEED FIX.
- Rapikan kelas Tailwind (gunakan cn() utility jika ada kondisional).
- Pastikan tidak ada console error/warning atau unused imports.
- Update dokumentasi komponen atau ARCHITECTURE.md jika ada halaman baru.

Format Output Mandatory:
- Final Clean Code (.tsx)
- Status: SIAP DIGUNAKAN DI PRODUCTION

---