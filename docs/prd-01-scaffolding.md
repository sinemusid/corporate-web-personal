# DOKUMEN PERSYARATAN PRODUK (PRD) & PANDUAN SCAFFOLDING
## Proyek: Sinemus Indonesia - Enterprise Company Profile Architecture

---

### 1. GAMBARAN UMUM KONTEKS & ARSITEKTUR SISTEM

Anda adalah seorang **Enterprise Frontend Architect & Principal Engineer** berpengalaman yang berspesialisasi dalam **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**.

Tujuan Anda adalah menghasilkan keseluruhan struktur scaffolding repositori dan arsitektur fondasi untuk **Sinemus Indonesia**, sebuah profil perusahaan (Compro) ekosistem kreatif modern berkonsep dark-theme.

#### Prinsip Panduan Arsitektur:
1. **Vertical Slice / Feature-Based Clean Architecture**: Kode harus dikelompokkan secara ketat berdasarkan domain fitur di bawah `src/features/`.
2. **5-Layer Feature Blueprint**: Setiap fitur di dalam `src/features/[nama-fitur]` WAJIB mengikuti arsitektur internal 5-layer yang ketat:
   - `types/` (Kontrak Data & Tipe)
   - `constants/` (Mock Data & Konfigurasi Statis)
   - `api/` (Infrastruktur Data Fetcher, Mapper, & Driver)
   - `hooks/` (Logika Bisnis & Or оркеstrasi State)
   - `components/` (Elemen Visual Murni & Skeleton Fitur)
3. **Public API Gate (Encapsulation / Pola Barrel File)**: Setiap folder fitur WAJIB memiliki file `index.ts` di root folder sebagai satu-satunya gerbang publik. Impor mendalam ke internal fitur (misalnya, `@/features/units/components/...`) **sangat dilarang**. Impor harus selalu bersumber dari root fitur (misalnya, `@/features/units`).
4. **Single Responsibility Principle (SRP) & Single Source of Truth (SSOT)**: Komponen UI harus murni bersifat presentasional tanpa teks hardcoded atau deklarasi data inline. Semua mock data harus berada di `constants/`.
5. **Konvensi Penamaan**:
   - Folder: `kebab-case`
   - Komponen React (`.tsx`): `PascalCase`
   - Custom Hooks (`.ts`): `kebab-case` dengan awalan `use-` (misalnya, `use-portfolio.ts`)
   - File Mock (`.ts`): `kebab-case` dengan akhiran `.mock` (misalnya, `units-mock.ts`)
   - Data Mapper & Utility File (`.ts`): `kebab-case`

---

### 2. PEMETAAN SITEMAP & KONTEN HALAMAN

Navigasi utama terbagi menjadi 5 Link Navbar dengan alokasi komponen persis seperti blueprint catatan tangan:

1. **Landing Page (`/`)**
   - Hero Section
   - Who We Are (`company`)
   - Our Ecosystem & Ecosystem Flow (`ecosystem`)
   - Our Unit Overview (`units`)

2. **Unit (`/units`)**
   - Hub Page / Redirect Page khusus unit bisnis
   - Dynamic Routes untuk 4 Pilar Unit: `/units/screen`, `/units/production`, `/units/academy`, `/units/community`

3. **About Us (`/about`)**
   - About Company (`company`)
   - Visi & Misi & Value (`company`)
   - Number Project dll / Stats (`company`)
   - Milestone (`company`)
   - Roadmap (`career`)
   - Design Structure & Our Team (`team`)
   - Layanan Kami (`services`)
   - Karya Kami (`portfolio`)

4. **Collaborator / Partner (`/collaborator`)**
   - Page Partner Grid (`contact`)

5. **Contact Us (`/contact`)**
   - Join Our Mission (`career`)
   - Contact Company / Form & Location (`contact`)

---

### 3. DAFTAR FEATURE UTAMA (8 DOMAIN MODULES)

Setiap modul terisolasi di bawah `src/features/` untuk memasok komponen ke 5 halaman di atas:

| Feature | Tanggung Jawab & Scope Komponen |
| :--- | :--- |
| `ecosystem` | Menampilkan diagram ekosistem Sinemus, workflow flow, dan statistik ekosistem. |
| `units` | Menampilkan unit bisnis (*Screen, Production, Academy, Community*) dan halaman detail masing-masing. |
| `portfolio` | Menampilkan katalog karya kami (*Karya Kami*) beserta filtering kategori. |
| `company` | Menampilkan profil perusahaan (*Who We Are*, *About Company*), Visi Misi Value, Milestone, dan Number Projects. |
| `team` | Menampilkan *Design Structure* (Struktur Organisasi) dan *Our Team* (Jajaran Kepemimpinan). |
| `services` | Menampilkan seluruh *Layanan Kami* (Film Production, Creative Agency, Distribution, dll). |
| `career` | Menampilkan *Roadmap*, budaya kerja, benefit, serta banner *Join Our Mission*. |
| `contact` | Menampilkan *Contact Company* (formulir & lokasi) serta *Page Partner / Collaborator*. |

---

### 4. COMPLETE TARGET FOLDER SCAFFOLDING TREE

Generate the directory structure and foundational boilerplate files matching this exact tree:

```text
src/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # [Page 1] Landing Page (Hero, Who We Are, Ecosystem, Units)
│   │   ├── units/
│   │   │   ├── page.tsx             # [Page 2] Unit Redirect Hub Page
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Detail Page Khusus Unit (/units/screen, /units/production, dll)
│   │   ├── about/
│   │   │   └── page.tsx             # [Page 3] About Us Page (Company, Vision, Numbers, Milestone, Roadmap, Structure, Team, Services, Portfolio)
│   │   ├── collaborator/
│   │   │   └── page.tsx             # [Page 4] Collaborator / Partner Page
│   │   └── contact/
│   │       └── page.tsx             # [Page 5] Contact Us Page (Join Our Mission, Contact Company)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts             # Contact Form Handler Endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Modal.tsx
│   │   └── Skeleton.tsx
│   ├── common/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx
│   └── icons/
│
├── config/
│   ├── site.config.ts
│   └── navigation.config.ts         # Navigation items for 5 main links
│
├── features/
│   ├── ecosystem/                   # Feature 1: Ecosystem & Ecosystem Flow
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── ecosystem-mock.ts
│   │   ├── api/
│   │   │   ├── index.ts
│   │   │   └── data-mapper.ts
│   │   ├── hooks/
│   │   │   └── use-ecosystem.ts
│   │   ├── components/
│   │   │   ├── EcosystemDiagram.tsx
│   │   │   ├── EcosystemFlow.tsx
│   │   │   └── EcosystemSkeleton.tsx
│   │   └── index.ts                 # Public API Gate
│   │
│   ├── units/                       # Feature 2: Units (Screen, Production, Academy, Community)
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── units-mock.ts
│   │   ├── api/
│   │   │   ├── index.ts
│   │   │   └── data-mapper.ts
│   │   ├── hooks/
│   │   │   ├── use-units.ts
│   │   │   └── use-unit-detail.ts
│   │   ├── components/
│   │   │   ├── UnitCard.tsx
│   │   │   ├── UnitGrid.tsx
│   │   │   ├── UnitHeroBanner.tsx
│   │   │   └── UnitSkeleton.tsx
│   │   └── index.ts                 # Public API Gate
│   │
│   ├── portfolio/                   # Feature 3: Portfolio (Karya Kami)
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── portfolio-mock.ts
│   │   ├── api/
│   │   │   ├── index.ts
│   │   │   └── data-mapper.ts
│   │   ├── hooks/
│   │   │   ├── use-portfolio.ts
│   │   │   └── use-portfolio-filter.ts
│   │   ├── components/
│   │   │   ├── PortfolioCard.tsx
│   │   │   ├── PortfolioFilter.tsx
│   │   │   ├── PortfolioGrid.tsx
│   │   │   └── PortfolioSkeleton.tsx
│   │   └── index.ts                 # Public API Gate
│   │
│   ├── company/                     # Feature 4: Company Profile, Vision Misi Value, Number Projects, Milestone
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── company-mock.ts
│   │   ├── api/
│   │   │   ├── index.ts
│   │   │   └── data-mapper.ts
│   │   ├── hooks/
│   │   │   ├── use-company.ts
│   │   │   └── use-milestones.ts
│   │   ├── components/
│   │   │   ├── WhoWeAre.tsx
│   │   │   ├── AboutCompany.tsx
│   │   │   ├── VisionMissionValue.tsx
│   │   │   ├── NumberProjects.tsx
│   │   │   ├── MilestonesTimeline.tsx
│   │   │   └── CompanySkeleton.tsx
│   │   └── index.ts                 # Public API Gate
│   │
│   ├── team/                        # Feature 5: Design Structure & Our Team
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── team-mock.ts
│   │   ├── api/
│   │   │   ├── index.ts
│   │   │   └── data-mapper.ts
│   │   ├── hooks/
│   │   │   └── use-team.ts
│   │   ├── components/
│   │   │   ├── DesignStructure.tsx
│   │   │   ├── OurTeamGrid.tsx
│   │   │   ├── TeamCard.tsx
│   │   │   └── TeamSkeleton.tsx
│   │   └── index.ts                 # Public API Gate
│   │
│   ├── services/                    # Feature 6: Layanan Kami
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── services-mock.ts
│   │   ├── api/
│   │   │   ├── index.ts
│   │   │   └── data-mapper.ts
│   │   ├── hooks/
│   │   │   └── use-services.ts
│   │   ├── components/
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── LayananKamiGrid.tsx
│   │   │   └── ServiceSkeleton.tsx
│   │   └── index.ts                 # Public API Gate
│   │
│   ├── career/                      # Feature 7: Roadmap & Join Our Mission
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── career-mock.ts
│   │   ├── api/
│   │   │   ├── index.ts
│   │   │   └── data-mapper.ts
│   │   ├── hooks/
│   │   │   ├── use-career.ts
│   │   │   └── use-roadmap.ts
│   │   ├── components/
│   │   │   ├── RoadmapTimeline.tsx
│   │   │   ├── JoinOurMission.tsx
│   │   │   └── CareerSkeleton.tsx
│   │   └── index.ts                 # Public API Gate
│   │
│   └── contact/                     # Feature 8: Page Partner & Contact Company
│       ├── types/
│       │   └── index.ts
│       ├── constants/
│       │   └── partners-mock.ts
│       ├── api/
│       │   ├── index.ts
│       │   └── data-mapper.ts
│       ├── hooks/
│       │   └── use-contact-form.ts
│       ├── components/
│       │   ├── ContactCompanyForm.tsx
│       │   ├── PagePartnerGrid.tsx
│       │   └── ContactSkeleton.tsx
│       └── index.ts                 # Public API Gate
│
├── lib/
│   ├── utils.ts
│   └── mailer.ts
│
└── types/
    └── index.ts
```

---

### 5. TUGAS EKSEKUSI UNTUK AGENT AI
- Pembuatan Direktori: Buat semua direktori dan file yang ditentukan sesuai dengan struktur routing 5 halaman dan 8 domain fitur.
- Integrasi Navigasi: Buat file `src/config/navigation.config.ts` yang berisi 5 item navbar utama (Home, Unit, About Us, Collaborator, Contact Us).
- Deklarasi Tipe: Definisikan interface dasar TypeScript pada `types/index.ts` untuk seluruh fitur.
- Pengisian Mock Data: Isi file `constants/*-mock.ts` dengan data awal yang realistis sesuai layout Sinemus Compro.
- Komponen Shell: Buat skeleton komponen React fungsional dengan nama yang tepat persis seperti pada Bagian 4.
- Ekspor Public API: Pastikan setiap folder fitur memiliki `index.ts` di root yang terkonfigurasi penuh mengekspor ulang komponen, hook, dan tipenya.
- Perakitan Halaman: Hubungkan kelima route pada `src/app/(public)/*/page.tsx` dengan mengimpor dan merender komponen masing-masing dari `@/features/[feature]`.