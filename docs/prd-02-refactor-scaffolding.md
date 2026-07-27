# PRD: Codebase Refactoring — Widgets Layer Integration

## 1. Context & Objective
Project `corporate-web` saat ini memiliki struktur domain di `src/features/`. Namun, halaman pada `src/app/` masih terlalu banyak merangkai komponen atomik domain secara manual. 

Tujuan utama refactoring ini adalah menerapkan abstraksi **Widgets Layer** berbasis **Single Responsibility Principle (SRP)** dan **Single Source of Truth (SSOT)** tanpa merusak fungsionalitas, mengubah desain visual, atau mengubah struktur internal folder `src/features/`.

---

## 2. Strict Constraints (Non-Negotiable)

1. **NO Logic & Content Alteration:** Dilarang menambah, menghapus, atau mengubah logika bisnis, teks, data mock, styling Tailwind, maupun tipe data yang sudah ada.
2. **NO Alteration to `src/features/` Subfolders:** Struktur internal subfolder di dalam `src/features/` (`api`, `components`, `constants`, `hooks`, `types`) **SAMA SEKALI TIDAK BOLEH DIUBAH ATAU DIPINDAHKAN**.
3. **NO Over-Engineering:** Dilarang menambahkan state management baru, abstraction layer tambahan yang tidak diminta, HOC, atau utility berlebihan.
4. **NO Breaking Changes:** Semua halaman di `src/app/` harus tetap berfungsi persis sama seperti sebelum refactoring.

---

## 3. Target Scope of Work

### Task 1: Buat Folder `src/widgets/`
Buat struktur folder baru di `src/widgets/` dengan subfolder domain yang mencerminkan domain pada `features/`:
- `src/widgets/career/`
- `src/widgets/company/`
- `src/widgets/contact/`
- `src/widgets/ecosystem/`
- `src/widgets/portfolio/`
- `src/widgets/services/`
- `src/widgets/team/`
- `src/widgets/units/`

### Task 2: Buat Komponen Composite Section (`*Section.tsx`)
Di dalam masing-masing folder `widgets/<domain>/`, buat komponen penyusun (*composite*) yang menggabungkan komponen-komponen atomik dari `src/features/<domain>/components`.

**Aturan Penamaan:**
- Wajib diakhiri dengan kata **`Section`** (Contoh: `AboutCompanySection.tsx`, `PortfolioGridSection.tsx`, `OurTeamSection.tsx`).

**Aturan Tanggung Jawab Widget (`SRP`):**
- Komponen `*Section` bertanggung jawab mengatur layout wrapper (misal menggunakan `SectionWrapper`), spacing, dan menggabungkan komponen/hooks dari `features`.
- Komponen `*Section` harus mengekspor dirinya secara bernama (*named export*) dan terdaftar pada `index.ts` lokal domain serta `src/widgets/index.ts`.

### Task 3: Refactor Halaman di `src/app/`
Ubah file `page.tsx` pada folder `src/app/(public)/` agar hanya mengimpor dan menyusun komponen `*Section` dari `@/widgets`.

---

## 4. Detailed Mapping Checklist

### 1. Company (`src/widgets/company/`)
- [ ] Buat `AboutCompanySection.tsx`: Merangkai `AboutCompany`, `WhoWeAre`, `NumberProjects`.
- [ ] Buat `VisionMissionSection.tsx`: Merangkai `VisionMissionValue`.
- [ ] Buat `MilestonesSection.tsx`: Merangkai `MilestonesTimeline`.
- [ ] Buat `index.ts` untuk ekspor bersih.

### 2. Portfolio (`src/widgets/portfolio/`)
- [ ] Buat `PortfolioGridSection.tsx`: Merangkai `PortfolioFilter`, `PortfolioGrid`, `PortfolioCard`, `PortfolioSkeleton`, dan hook `usePortfolioFilter`/`usePortfolio`.
- [ ] Buat `index.ts` untuk ekspor bersih.

### 3. Services (`src/widgets/services/`)
- [ ] Buat `ServicesGridSection.tsx`: Merangkai `LayananKamiGrid`, `ServiceCard`, `ServiceSkeleton`, dan hook `useServices`.
- [ ] Buat `index.ts` untuk ekspor bersih.

### 4. Contact (`src/widgets/contact/`)
- [ ] Buat `ContactSection.tsx`: Merangkai `ContactCompanyForm` dan `ContactSkeleton`.
- [ ] Buat `PartnerGridSection.tsx`: Merangkai `PagePartnerGrid`.
- [ ] Buat `index.ts` untuk ekspor bersih.

### 5. Team (`src/widgets/team/`)
- [ ] Buat `OurTeamSection.tsx`: Merangkai `OurTeamGrid`, `TeamCard`, `DesignStructure`, dan `TeamSkeleton`.
- [ ] Buat `index.ts` untuk ekspor bersih.

### 6. Units (`src/widgets/units/`)
- [ ] Buat `UnitHeroSection.tsx`: Merangkai `UnitHeroBanner`.
- [ ] Buat `UnitGridSection.tsx`: Merangkai `UnitGrid`, `UnitCard`, dan `UnitSkeleton`.
- [ ] Buat `index.ts` untuk ekspor bersih.

### 7. Ecosystem (`src/widgets/ecosystem/`)
- [ ] Buat `EcosystemFlowSection.tsx`: Merangkai `EcosystemDiagram`, `EcosystemFlow`, dan `EcosystemSkeleton`.
- [ ] Buat `index.ts` untuk ekspor bersih.

### 8. Career (`src/widgets/career/`)
- [ ] Buat `CareerRoadmapSection.tsx`: Merangkai `JoinOurMission`, `RoadmapTimeline`, dan `CareerSkeleton`.
- [ ] Buat `index.ts` untuk ekspor bersih.

---

## 5. Central Export Barrel
Buat file `src/widgets/index.ts` yang mengekspor seluruh komponen widget dari subfolder domain:

```typescript
export * from './career';
export * from './company';
export * from './contact';
export * from './ecosystem';
export * from './portfolio';
export * from './services';
export * from './team';
export * from './units';
```

## 6. Definition of Done (Verification Checklist)
Sebelum menyelesaikan tugas, AI Agent wajib memverifikasi poin-poin berikut:

1. [ ] TypeScript Check: Jalankan npx tsc --noEmit atau npm run build dan pastikan 0 error.

2. [ ] Linting Check: Pastikan tidak ada warning ESLint baru atau sintaks import yang rusak.

3. [ ] Folder Integrity: Folder src/features/ tetap utuh 100% tanpa ada file yang hilang atau berpindah tempat.

4. [ ] App Cleanliness: File page.tsx di folder app/ menjadi sangat singkat dan hanya memanggil komponen *Section.

5. [ ] Visual & Behavior Parity: Tampilan dan perilaku aplikasi di browser tetap identik dengan versi sebelum refactoring.