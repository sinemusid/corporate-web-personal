# 🏗️ ARCHITECTURE.md — Sinemus Corporate Web Architecture

> **Project:** Sinemus Corporate Website  
> **Scope:** Frontend Only (Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS v4, Shadcn UI, Lucide React)  
> **Protocol Reference:** Compliant with [AGENTS.md](file:///Users/mc/Documents/projects/corporate-web/AGENTS.md)

---

## 🚀 1. TECH STACK OVERVIEW

Corporate Web Sinemus dibangun menggunakan arsitektur modern berbasis Feature-Based & Widgets Layer dengan pemisahan tanggung jawab yang ketat (*Single Responsibility Principle*).

| Layer | Teknologi / Library | Deskripsi & Versi |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | App Router dengan React Server Components (RSC) by default |
| **Library UI** | React 19 | React 19 dengan React Compiler (`babel-plugin-react-compiler`) |
| **Language** | TypeScript 5 | Strict mode enabled, zero `any` policy |
| **Styling** | Tailwind CSS v4 | Engine v4 (`@tailwindcss/postcss`), `@tailwindcss/container-queries`, `@tailwindcss/forms` |
| **UI Primitives** | Shadcn UI (`src/components/ui`) | Atomic components (`Button`, `Card`, `Input`, `Modal`, `Skeleton`, `Textarea`) |
| **Icons & Utilities** | Lucide React, `clsx`, `tailwind-merge` | Vector icons dan utility helper `cn()` (`src/lib/utils.ts`) |

---

## 📂 2. STRUKTUR DIREKTORI REKAYASA KODEBASE (`src/`)

Struktur codebase mengikuti pola **Feature-Based & Widgets-Layered Architecture**:

```text
corporate-web/
├── .ai/                       # AI Agent Protocols & Context Guidelines
│   ├── agents/                # Step-specific instructions (planner, ui-component, content-seo, reviewer)
│   └── context/               # Context files (design-system, coding-style, seo-performance, content-structure)
├── docs/                      # Technical PRDs, design specs, & refactoring documentation
├── public/                    # Static assets (images, icons, favicons, og-images)
├── src/
│   ├── app/                   # Next.js App Router Entry Points & Routes
│   │   ├── (public)/          # Route Group Halaman Publik Corporate
│   │   │   ├── about/         # Halaman About Us (/about)
│   │   │   ├── collaborator/  # Halaman Strategic Partners / Collaborators (/collaborator)
│   │   │   ├── contact/       # Halaman Contact Us (/contact)
│   │   │   ├── units/         # Halaman Business Units (/units)
│   │   │   ├── layout.tsx     # Layout wrapper publik (Header & Footer)
│   │   │   └── page.tsx       # Landing Page Utama (Homepage)
│   │   ├── api/               # Form mailer / contact API handlers
│   │   ├── favicon.ico        # Site favicon
│   │   ├── globals.css        # Tailwind CSS v4 global imports & custom styles
│   │   └── layout.tsx         # Root HTML & Font provider layout
│   ├── widgets/               # Composite Widgets Layer (Section Wrappers per Domain)
│   │   ├── about-us/          # Composite widgets seksi About Us (Overview, Leadership, Timeline, etc.)
│   │   ├── collaborators/    # Composite widgets seksi Collaborators & Partners
│   │   ├── contact/           # Composite widgets seksi Contact & Join Mission
│   │   ├── home/              # Composite widgets seksi Homepage (Hero, WhoWeAre, UnitPreview, Services)
│   │   ├── units/             # Composite widgets seksi Business Units (UnitHero, UnitGrid)
│   │   └── index.ts           # Central Barrel Export untuk seluruh Widgets
│   ├── features/              # Feature Domain Modules (Logic, Components, & Domain Data)
│   │   ├── about-us/          # Domain Feature About Us (`components`, `constants`, `hooks`, `types`, `api`)
│   │   ├── collaborators/    # Domain Feature Collaborators (`components`, `constants`, `hooks`, `types`, `api`)
│   │   ├── contact/           # Domain Feature Contact (`components`, `constants`, `hooks`, `types`, `api`)
│   │   ├── home/              # Domain Feature Homepage (`components`, `constants`, `hooks`, `types`, `api`)
│   │   └── units/             # Domain Feature Business Units (`components`, `hooks`, `mock`, `types`, `api`)
│   ├── components/            # Shared UI Components & Primitives
│   │   ├── ui/                # Atomic UI Primitives (Button, Card, Input, Modal, Skeleton, Textarea)
│   │   ├── common/            # Shared layout / common UI wrappers
│   │   └── icons/             # Custom SVG Icon components
│   ├── config/                # Central System & Site Configuration
│   │   ├── site.config.ts     # Metadata & Sinemus Corporate Site Config
│   │   ├── navigation.config.ts # Global Header & Footer Navigation Links
│   │   └── fonts.ts           # Next.js Font configuration
│   ├── lib/                   # Utility Helpers
│   │   ├── utils.ts           # `cn()` helper (`clsx` + `tailwind-merge`)
│   │   └── mailer.ts          # Contact mailer utility
│   └── types/                 # Global Shared TypeScript Definitions (`index.ts`)
├── AGENTS.md                  # Master AI Protocol File
├── ARCHITECTURE.md            # System Architecture Blueprint (File Ini)
├── package.json               # Project Dependencies & Scripts
├── tailwind.config.ts         # Tailwind CSS Configuration
└── tsconfig.json              # TypeScript Strict Configuration
```

---

## 🏛️ 3. HIERARKI KOMPONEN & ARSITEKTUR ABSTRAKSI

Komponen disusun dalam 4 tingkatan hirarki secara hierarkis dan independen:

```text
[UI Primitives (Atoms)] ➡️ [Feature Components (Molecules)] ➡️ [Widgets (Organisms)] ➡️ [App Routes (Pages)]
```

1. **UI Primitives (`src/components/ui/`):**
   - Komponen dasar reusable tanpa logika domain bisnis (misal: `Button.tsx`, `Card.tsx`, `Input.tsx`, `Modal.tsx`, `Skeleton.tsx`, `Textarea.tsx`).
2. **Feature Components (`src/features/<domain>/components/`):**
   - Komponen spesifik domain bisnis yang mengeksekusi logika atomik, konstanta domain, dan hooks spesifik (misal: `HeroSection.tsx`, `WhoWeAre.tsx`, `DesignStructure.tsx`).
3. **Composite Widgets (`src/widgets/<domain>/`):**
   - Komponen penyusun tingkat seksi (*Section Level Wrappers*) berbasis SRP yang merangkai beberapa *Feature Components*, mengatur layout spacing (`py-16 md:py-24`), serta menerapkan container wrapper.
4. **App Routes (`src/app/(public)/.../page.tsx`):**
   - Halaman App Router yang bertindak sebagai *orchestrator*. Halaman di `src/app/` dibuat ringkas dan **HANYA** menyusun komponen *Widget* dari `@/widgets`.

---

## 🔄 4. RSC & CLIENT COMPONENT BOUNDARY

- **React Server Components (RSC) Default:**
  - Halaman (`page.tsx`), Layout (`layout.tsx`), dan Composite Widgets (`src/widgets/`) berjalan sebagai RSC secara default untuk memaksimalkan performa dan SEO.
- **Client Component Boundary (`'use client'`):**
  - Isolasikan directive `'use client'` HANYA pada komponen atomik atau modal/form di `src/features/` yang benar-benar membutuhkan interaktivitas browser (seperti `ContactCompanyForm`, `Modal`, atau interaksi state UI).

---

## 🛡️ 5. KEPATUHAN PROTOKOL AGENTS.MD

1. **No External Banned Libraries:** Dilarang menginstal library NPM baru (seperti Framer Motion atau ORM backend) tanpa persetujuan di Implementation Plan.
2. **Frontend Scope:** Murni fokus pada performa visual, aksesibilitas, SEO, dan interaktivitas frontend Sinemus Corporate.
3. **Consistency:** Menggunakan token warna, tipografi, dan konfigurasi dari `src/config/` dan `@/lib/utils`.
