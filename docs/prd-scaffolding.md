# Product Requirement Document (PRD)

# Arsitektur Enterprise Company Profile Sinemus Indonesia

---

# 1. Latar Belakang

Dokumen ini menjadi pedoman utama dalam membangun **Company Profile Sinemus Indonesia** menggunakan teknologi modern berbasis:

- Next.js (App Router)
- TypeScript
- Tailwind CSS

Tujuan utama proyek adalah menghasilkan struktur repository yang bersih, scalable, mudah dipelihara, serta siap dikembangkan untuk kebutuhan enterprise di masa depan.

Seluruh implementasi harus mengikuti prinsip **Feature-Based Architecture**, sehingga setiap domain bisnis memiliki tanggung jawab yang terpisah dan tidak saling bergantung secara langsung.

---

# 2. Prinsip Arsitektur

## 2.1 Feature-Based Architecture

Seluruh source code harus dikelompokkan berdasarkan domain bisnis, bukan berdasarkan jenis file.

Seluruh fitur wajib berada pada:

```text
src/features/
```

Contoh:

```text
src/features/company
src/features/team
src/features/portfolio
```

---

## 2.2 Blueprint 5 Layer

Setiap feature wajib memiliki struktur internal yang sama.

```text
feature/
│
├── types/
├── constants/
├── api/
├── hooks/
├── components/
└── index.ts
```

### Penjelasan Layer

#### `types/`

Berisi seluruh:

- Interface
- Type
- Enum
- Data Contract

Tidak boleh berisi business logic.

---

#### `constants/`

Berisi:

- Mock data
- Static configuration
- Dummy content

Seluruh data statis harus disimpan di sini sebagai **Single Source of Truth (SSOT)**.

---

#### `api/`

Berisi seluruh infrastruktur pengambilan data seperti:

- Fetcher
- Mapper
- Driver
- Adapter

Saat ini boleh menggunakan mock data, namun arsitektur harus siap untuk migrasi ke REST API maupun Headless CMS.

---

#### `hooks/`

Berisi business logic seperti:

- State management
- Filtering
- Sorting
- Pagination
- Data orchestration

Hook tidak boleh berisi kode presentasi UI.

---

#### `components/`

Berisi komponen React yang bersifat murni presentasional.

Komponen **tidak boleh** memiliki:

- Hardcoded text
- Mock data
- Business logic

Komponen hanya menerima data melalui props atau hook.

---

# 3. Public API Pattern

Setiap feature wajib memiliki file:

```text
index.ts
```

File ini menjadi satu-satunya pintu akses menuju feature.

### Contoh yang diperbolehkan

```ts
import { UnitGrid } from "@/features/units";
```

### Contoh yang tidak diperbolehkan

```ts
import { UnitGrid } from "@/features/units/components/UnitGrid";
```

Deep import **dilarang**.

---

# 4. Prinsip Pengembangan

## Single Responsibility Principle (SRP)

Setiap file hanya memiliki satu tanggung jawab.

Contoh:

- Hook hanya mengurus business logic.
- Component hanya mengurus tampilan.
- API hanya mengurus komunikasi data.
- Constants hanya menyimpan data.

---

## Single Source of Truth (SSOT)

Tidak boleh ada deklarasi data yang berulang.

Seluruh mock data harus berada pada folder:

```text
constants/
```

---

## Scalability

Seluruh struktur harus siap dikembangkan menjadi:

- REST API
- GraphQL
- Headless CMS
- Database Production

tanpa mengubah struktur folder.

---

# 5. Standar Penamaan

## Folder

Gunakan format:

```text
kebab-case
```

Contoh:

```text
portfolio-filter
business-unit
```

---

## React Component

Gunakan format:

```text
PascalCase
```

Contoh:

```text
PortfolioGrid.tsx
VisionMission.tsx
```

---

## Custom Hook

Gunakan format:

```text
use-*.ts
```

Contoh:

```text
use-units.ts
use-company.ts
```

---

## Mock Data

Gunakan suffix:

```text
-mock.ts
```

Contoh:

```text
company-mock.ts
units-mock.ts
```

---

## Utility / Mapper

Gunakan:

```text
kebab-case
```

Contoh:

```text
data-mapper.ts
```

---

# 6. Daftar Feature Utama

Project memiliki delapan feature utama.

| Feature | Tanggung Jawab |
|----------|----------------|
| ecosystem | Menampilkan struktur ekosistem Sinemus beserta workflow dan statistik. |
| units | Menampilkan unit bisnis beserta halaman detail masing-masing. |
| portfolio | Menampilkan katalog karya beserta filtering kategori. |
| company | Menampilkan profil perusahaan, visi, misi, nilai, milestone, dan statistik. |
| team | Menampilkan struktur organisasi dan jajaran kepemimpinan. |
| services | Menampilkan seluruh layanan perusahaan. |
| career | Menampilkan budaya kerja, benefit, roadmap karier, dan informasi rekrutmen. |
| contact | Menampilkan formulir kontak, validasi, serta daftar partner dan supporter. |

---

# 7. Struktur Folder Target

Seluruh repository **wajib** mengikuti struktur folder (scaffolding) yang telah ditentukan pada dokumen asli.

AI Agent **tidak boleh**:

- Mengubah struktur folder.
- Menghapus folder.
- Mengganti nama folder.
- Memindahkan file ke lokasi lain.

Gunakan struktur folder tersebut sebagai acuan utama.

---

# 8. Standar Implementasi

## Public API

Setiap feature wajib memiliki file:

```text
index.ts
```

Sebagai contoh:

```ts
export { UnitGrid } from "./components/UnitGrid";
export { UnitCard } from "./components/UnitCard";

export { useUnits } from "./hooks/use-units";

export type {
  BusinessUnit,
  BusinessUnitDetail,
} from "./types";
```

---

## Mock Data

Seluruh dummy data harus:

- Menggunakan interface TypeScript.
- Berasal dari folder `types`.
- Disimpan pada folder `constants`.

Tidak diperbolehkan menuliskan data langsung di dalam component.

---

## Hook

Hook menjadi abstraction layer antara UI dan sumber data.

Saat ini data berasal dari mock data.

Di masa depan implementasi dapat diganti menjadi:

- REST API
- Headless CMS
- Database

tanpa mengubah component.

---

## Component

Component harus bersifat presentational.

Tugas component hanya:

- Menerima props.
- Memanggil hook (jika diperlukan).
- Merender UI.

Component tidak boleh:

- Melakukan fetch data langsung.
- Menyimpan mock data.
- Menyimpan business logic yang kompleks.

---

# 9. Tugas AI Agent

AI Agent bertanggung jawab menghasilkan seluruh boilerplate project sesuai struktur yang telah ditentukan.

## 1. Directory Generation

Membuat seluruh struktur folder beserta file sesuai scaffolding.

---

## 2. Type Declaration

Membuat interface TypeScript pada setiap feature.

---

## 3. Mock Data

Mengisi seluruh file `*-mock.ts` menggunakan data awal yang realistis sesuai kebutuhan Company Profile Sinemus Indonesia.

---

## 4. Hook Boilerplate

Membuat hook standar sebagai abstraction layer terhadap data.

---

## 5. Component Skeleton

Membuat kerangka komponen React menggunakan Tailwind CSS.

Komponen cukup berupa placeholder yang siap dikembangkan.

---

## 6. Public API

Memastikan setiap feature memiliki file `index.ts` yang melakukan re-export terhadap:

- Components
- Hooks
- Types

---

## 7. Landing Page Assembly

Menyusun halaman utama:

```text
src/app/(public)/page.tsx
```

dengan mengonsumsi seluruh feature melalui Public API.

Contoh:

```ts
import {
  CompanySection,
  UnitGrid,
  PortfolioGrid,
} from "@/features/...";
```

Deep import tidak diperbolehkan.

---

# 10. Kriteria Keberhasilan

Implementasi dianggap berhasil apabila memenuhi seluruh poin berikut:

- Seluruh struktur folder sesuai dengan scaffolding.
- Tidak terdapat deep import.
- Setiap feature mengikuti blueprint 5-layer.
- Seluruh mock data berada pada folder `constants`.
- Seluruh business logic berada pada folder `hooks`.
- Seluruh UI bersifat presentational.
- Seluruh akses feature dilakukan melalui `index.ts`.
- Struktur siap dikembangkan ke REST API maupun Headless CMS tanpa perubahan arsitektur yang signifikan.