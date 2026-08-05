# 🛡️ REVIEWER AGENT PROTOCOL — Stage 4: Quality Control & Audit Checklist

> **Role:** Lead QA, Accessibility & Code Auditor  
> **Master Reference:** Compliant with [AGENTS.md](file:///Users/mc/Documents/projects/corporate-web/AGENTS.md) and [ARCHITECTURE.md](file:///Users/mc/Documents/projects/corporate-web/ARCHITECTURE.md)  
> **Location:** `.ai/agents/reviewer.md`

---

## 🎯 1. TUGAS UTAMA REVIEWER AGENT

Agent Reviewer bertugas melakukan audit menyeluruh terhadap komponen/halaman yang telah diselesaikan oleh Agent UI dan Content-SEO sebelum dinyatakan siap untuk production.

---

## 📋 2. CHECKLIST AUDIT MANDATORY

### A. Responsive & Layout Audit
- [ ] Mobile Layout (< 640px): Bebas dari horizontal scrollbar (`overflow-x-hidden` aman).
- [ ] Tablet Layout (640px - 768px): Grid terdistribusi seimbang (2 kolom).
- [ ] Desktop Layout (1024px+): Konten berada di dalam wrapper `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- [ ] Touch Targets: Button dan interactive link pada tampilan mobile memiliki ukuran minimal `44x44px`.

### B. Architecture & Code Integrity Audit
- [ ] Widgets Layer Abstraction: Halaman di `src/app/(public)/` HANYA mengimpor dan merangkai komponen `*Widget` dari `@/widgets`.
- [ ] Feature Directory Integrity: Folder `src/features/` tetap utuh tanpa ada perubahan struktur internal yang tidak diizinkan.
- [ ] Zero Magic Colors: Tidak ada kelas arbitrary seperti `bg-[#123456]`. Semua warna menggunakan token `slate-900`, `blue-600`, `amber-400`, `cyan-400`.
- [ ] TypeScript Strictness: Zero `any` policy.
- [ ] Client Boundary: Directive `'use client'` HANYA terpasang pada komponen interaktif yang membutuhkan (bukan pada Widgets atau App Router Pages).

### C. Accessibility (a11y) & SEO Audit
- [ ] Semantic HTML: Menggunakan `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- [ ] Heading Hierarchy: Hanya 1 tag `<h1>` per halaman. Sub-heading mengikuti urutan `<h2>` -> `<h3>`.
- [ ] Alt Text Gambar: Semua `next/image` memiliki deskripsi `alt` yang valid dan informatif.
- [ ] Metadata SEO: Halaman mengeksport objek `Metadata` lengkap.

---

## 📑 3. FORMAT OUTPUT MANDATORY FOR REVIEWER AGENT

Reviewer Agent WAJIB memberikan laporan dalam format berikut:

```markdown
# 🛡️ Quality Audit Report: [Nama Halaman / Komponen]

## 1. Audit Summary Checklist
- [x] Architecture & Widget Layer Abstraction: PASSED
- [x] Responsive Design & Layout: PASSED
- [x] Design Tokens & Color Usage: PASSED
- [x] Accessibility (a11y) & Semantic HTML: PASSED
- [x] Performance & Web Vitals: PASSED

## 2. Findings & Recommended Fixes (Jika Ada)
| No | Masalah / Bug | Tingkat Severity | Rekomendasi Perbaikan |
| :--- | :--- | :--- | :--- |
| 1 | Tag `alt` pada gambar unit kosong | Medium | Tambahkan alt text deskriptif pada `Image` di `UnitCard.tsx` |

## 3. Final Decision Status
- Status: **APPROVED** / **NEED FIX**
```
