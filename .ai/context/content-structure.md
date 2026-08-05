# 📝 CONTENT STRUCTURE & CONFIGURATION GUIDELINES — Sinemus Corporate Web

> **Protocol Reference:** Compliant with [AGENTS.md](file:///Users/mc/Documents/projects/corporate-web/AGENTS.md) and [ARCHITECTURE.md](file:///Users/mc/Documents/projects/corporate-web/ARCHITECTURE.md)  
> **Location:** `.ai/context/content-structure.md`

---

## 📊 1. SKEMA KONTEN & KONSTANTA DOMAIN (`src/features/` & `src/config/`)

Informasi perusahaan disajikan melalui konstanta bertipe ketat di dalam masing-masing folder domain `src/features/<domain>/constants/` serta konfigurasi terpusat di `src/config/`.

### 1️⃣ Konfigurasi Situs Utama (`src/config/site.config.ts`)
```typescript
export const siteConfig = {
  name: "Sinemus Indonesia",
  description: "Official Corporate Website PT Sinemus Indonesia",
  url: "https://sinemus.co.id",
  ogImage: "https://sinemus.co.id/og.jpg",
  links: {
    linkedin: "https://linkedin.com/company/sinemus",
    instagram: "https://instagram.com/sinemus.id",
  },
};
```

### 2️⃣ Konfigurasi Navigasi (`src/config/navigation.config.ts`)
```typescript
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { title: "Beranda", href: "/" },
  { title: "Tentang Kami", href: "/about" },
  { title: "Unit Bisnis", href: "/units" },
  { title: "Mitra Strategis", href: "/collaborator" },
  { title: "Kontak", href: "/contact" },
];
```

### 3️⃣ Data Domain Features (`src/features/<domain>/constants/`)
- **`src/features/home/constants/`**: Data banner hero, seksi overview *Who We Are*, preview unit bisnis, dan ringkasan layanan.
- **`src/features/about-us/constants/`**: Data profil perusahaan, hirarki struktur organisasi (*DesignStructure*), jajaran direksi (*Leadership*), milestons timeline, dan roadmap karir.
- **`src/features/units/constants/` / `mock/`**: Data unit bisnis ekosistem Sinemus (Screen, Production, Academy, Community).
- **`src/features/collaborators/constants/`**: Data daftar partner dan mitra strategis.
- **`src/features/contact/constants/`**: Data info kontak corporate dan form input.

---

## ✍️ 2. ATURAN COPYWRITING & PENULISAN KONTEN

1. **Tone of Voice:** Executive, Modern, Authoritative, Innovative, Transparent (PT Sinemus Indonesia Ecosystem).
2. **Bahasa Utama:** Bahasa Indonesia baku modern, komunikatif, dan lugas.
3. **Hierarki Heading SEO:**
   - `H1`: Hanya 1 per halaman (Judul utama halaman/Hero).
   - `H2`: Judul seksi utama (misal: "Tentang Kami", "Unit Bisnis Sinemus", "Jajaran Direksi").
   - `H3`: Judul kartu/item di dalam seksi.
