import { BusinessUnit } from '../types';

export const MOCK_UNITS: BusinessUnit[] = [
  {
    id: 'unit-production',
    slug: 'production',
    title: 'SINEMUS PRODUCTION',
    subtitle: 'Film Feature & Studio Content Studio',
    tagline: 'Crafting Impactful Cinema & World-Class Visual Storytelling',
    description: 'Rumah produksi film layar lebar, dokumenter, dan konten audio-visual berstandar internasional.',
    about: 'Sinemus Production hadir sebagai studio film komprehensif yang memadukan kedalaman estetika naratif dan presisi teknis tingkat tinggi. Kami mengelola seluruh siklus hidup karya audio-visual mulai dari riset cerita, pengembangan skenario, eksekusi syuting sinematik, hingga pasca-produksi Dolby-certified.',
    bannerUrl: '/images/khoas_poster.png',
    features: ['Feature Film Production', 'Commercial & Music Video', 'Post-Production & VFX'],
    stats: [
      { label: 'Judul Film', value: '20+' },
      { label: 'Penghargaan', value: '15+' },
      { label: 'Negara Distribusi', value: '8+' },
    ],
    capabilities: [
      {
        title: 'Development & Narrative Lab',
        description: 'Pengembangan cerita, riset dokumenter, dan penulisan skenario bersama tim penulis senior berkualifikasi internasional.',
        tags: ['Scriptwriting', 'Story Editing', 'Concept Art'],
      },
      {
        title: 'Cinematic Production',
        description: 'Eksekusi syuting bioskop dengan kru tersertifikasi, pengoperasian kamera 8K, serta standar manajemen produksi ketat.',
        tags: ['Feature Film', 'Series Original', 'High-End Commercial'],
      },
      {
        title: 'Post-Production & Sound Design',
        description: 'Editing visual presisi, color grading bertaraf Dolby Vision, dan mixing audio immersive surround sound.',
        tags: ['Color Grading', 'Dolby Atmos', 'VFX Integration'],
      },
    ],
    featuredProjects: [
      {
        title: 'Khoas Narrative',
        category: 'Feature Film',
        year: '2025',
        imageUrl: '/images/khoas_poster.png',
        highlight: 'Official Selection International Film Festival',
      },
      {
        title: 'Echoes of the Archipelago',
        category: 'Documentary Series',
        year: '2024',
        imageUrl: '/images/khoas_poster.png',
        highlight: 'Best Documentary Sound Architecture',
      },
    ],
    workflow: [
      {
        stepNumber: '01',
        title: 'Ideation & IP Incubation',
        description: 'Formulasi konsep cerita, analisis pasar audience, dan penyusunan treatment skenario.',
      },
      {
        stepNumber: '02',
        title: 'Principal Photography',
        description: 'Pelaksanaan syuting dengan efisiensi alur kerja studio dan pengawasan kualitas visual ketat.',
      },
      {
        stepNumber: '03',
        title: 'Post-Production Mastering',
        description: 'Finalisasi penyuntingan, efek visual, tata suara sinematik, hingga siap tayang di bioskop.',
      },
    ],
  },
  {
    id: 'unit-screen',
    slug: 'screen',
    title: 'SINEMUS SCREEN',
    subtitle: 'Exhibition & Digital Screening Platform',
    tagline: 'Bridging Filmmakers to Diverse Audiences Across Screens',
    description: 'Jaringan eksibisi sinema, pemutaran independen, dan platform penayangan digital terintegrasi.',
    about: 'Sinemus Screen berfokus membuka akses penayangan film alternatif dan indie agar dapat menjangkau penonton secara inklusif. Melalui jaringan ruang pemutaran komunitas, festival keliling, serta platform pemutaran digital mandiri, kami menghidupkan ekosumsi apresiasi sinema.',
    bannerUrl: '/images/khoas_poster.png',
    features: ['Private Screening Hub', 'Digital VOD Platform', 'Film Festival Partner'],
    stats: [
      { label: 'Layar Penayangan', value: '150+' },
      { label: 'Penonton Aktif', value: '50K+' },
      { label: 'Kota Jangkauan', value: '25+' },
    ],
    capabilities: [
      {
        title: 'Alternative Screening Network',
        description: 'Fasilitasi pemutaran film di ruang bioskop mikro, hall budaya, dan pemutaran ruang terbuka berbasis standar proyeksi profesional.',
        tags: ['Micro-Cinema', 'Pop-Up Screening', 'DCP Projection'],
      },
      {
        title: 'Digital VOD Distribution',
        description: 'Platform penayangan sinema independen berbasis enkripsi aman dan sistem bagi hasil transparan bagi pembuat film.',
        tags: ['Digital VOD', 'Pay-Per-View', 'Encrypted DRM'],
      },
      {
        title: 'Festival Circuit Management',
        description: 'Pengelolaan roadshow penayangan film festival lokal maupun internasional untuk memperluas audiens karya.',
        tags: ['Festival Curation', 'Roadshow Management', 'Q&A Forum'],
      },
    ],
    featuredProjects: [
      {
        title: 'Indie Cinema Week 2025',
        category: 'Screening Circuit',
        year: '2025',
        imageUrl: '/images/khoas_poster.png',
        highlight: 'Menjangkau 12.000+ Penonton di 10 Kota',
      },
      {
        title: 'Sinemus VOD Premiere',
        category: 'Digital Showcase',
        year: '2024',
        imageUrl: '/images/khoas_poster.png',
        highlight: 'Platform Resmi Penayangan Film Award-Winning',
      },
    ],
    workflow: [
      {
        stepNumber: '01',
        title: 'Curatorial Selection',
        description: 'Pengecekan kelayakan materi film dan penyesuaian target segmen pemutaran.',
      },
      {
        stepNumber: '02',
        title: 'Venue & Digital Placement',
        description: 'Penjadwalan pemutaran di jaringan layar mitra atau pengunggahan terenkripsi di platform VOD.',
      },
      {
        stepNumber: '03',
        title: 'Audience Engagement',
        description: 'Pelaksanaan diskusi interaktif, apresiasi penonton, dan pelaporan analisis data dampak.',
      },
    ],
  },
  {
    id: 'unit-academy',
    slug: 'academy',
    title: 'SINEMUS ACADEMY',
    subtitle: 'Creative Talent & Technical Education',
    tagline: 'Nurturing the Next Generation of Visionary Filmmakers',
    description: 'Inkubator dan lembaga pelatihan intensif untuk mencetak talenta perfilman masa depan.',
    about: 'Sinemus Academy meretas kesenjangan antara pendidikan formal dan kebutuhan nyata industri sinema. Melalui program bootcamp teknis, laboratorium penulisan, dan mentorship intensif dari praktisi aktif, kami membina talenta baru agar siap berkarya di panggung profesional.',
    bannerUrl: '/images/khoas_poster.png',
    features: ['Masterclass Director', 'Screenwriting Lab', 'Technical Workshop'],
    stats: [
      { label: 'Alumni Trainee', value: '1,200+' },
      { label: 'Mentor Spesialis', value: '30+' },
      { label: 'Proyek Terinkubasi', value: '45+' },
    ],
    capabilities: [
      {
        title: 'Directing & Producing Incubator',
        description: 'Program bimbingan intensif penyutradaraan dan manajemen produksi film feature bersama sineas ternama.',
        tags: ['Directing Lab', 'Executive Producer', 'Pitching Skill'],
      },
      {
        title: 'Technical Craft Certification',
        description: 'Workshop teknis tata kamera, penyuntingan gambar, penataan suara, serta manajemen pencahayaan lokasi.',
        tags: ['Cinematography', 'Editing Masterclass', 'Grip & Lighting'],
      },
      {
        title: 'Film Business & IP Rights',
        description: 'Edukasi hukum hak cipta film, skema pendanaan internasional, dan strategi distribusi pasar global.',
        tags: ['IP Protection', 'Co-Production Rules', 'Distribution Contracts'],
      },
    ],
    featuredProjects: [
      {
        title: 'Future Auteurs Incubator',
        category: 'Inkubasi Program',
        year: '2025',
        imageUrl: '/images/khoas_poster.png',
        highlight: 'Melahirkan 8 Skenario Film Pendek Peraih Hibah',
      },
      {
        title: 'Masterclass Series with Directors',
        category: 'Workshop Series',
        year: '2024',
        imageUrl: '/images/khoas_poster.png',
        highlight: 'Pelatihan Teknis bagi 300+ Peserta Nasional',
      },
    ],
    workflow: [
      {
        stepNumber: '01',
        title: 'Talent Open Call & Selection',
        description: 'Seleksi ketat calon peserta berdasarkan portofolio ide dan komitmen pembelajaran.',
      },
      {
        stepNumber: '02',
        title: 'Intensive Mentorship & Lab',
        description: 'Proses pembekalan teori, praktik lapangan, dan kritik karya bersama mentor profesional.',
      },
      {
        stepNumber: '03',
        title: 'Industry Pitching Showcase',
        description: 'Presentasi akhir proyek film di hadapan produser, investor, dan pihak rumah produksi.',
      },
    ],
  },
  {
    id: 'unit-community',
    slug: 'community',
    title: 'SINEMUS COMMUNITY',
    subtitle: 'Filmmakers Network & Arts Collective',
    tagline: 'Fostering Collaborative Ecosystems for Independent Cinema',
    description: 'Wadah jejaring sineas independen, apresiasi film, dan forum apresiasi karya.',
    about: 'Sinemus Community membangun iklim apresiasi sinema yang inklusif dan suportif. Kami mengabungkan ruang diskusi kritis, pemutaran independen berkala, serta program stimulan dana hibah kecil (*micro-grants*) untuk mendorong pertumbuhan sineas muda di berbagai daerah.',
    bannerUrl: '/images/khoas_poster.png',
    features: ['Community Screening', 'Filmmaker Gathering', 'Funding Lab Grants'],
    stats: [
      { label: 'Anggota Komunitas', value: '500+' },
      { label: 'Mitra Kota', value: '18' },
      { label: 'Dana Hibah Disalurkan', value: '25 Proyek' },
    ],
    capabilities: [
      {
        title: 'Independent Filmmaker Network',
        description: 'Jejaring kolaborasi antar-kreator film, kolaborator musik, serta penulis untuk membentuk tim produksi baru.',
        tags: ['Networking', 'Co-Creation', 'Talent Matchmaking'],
      },
      {
        title: 'Short Film Micro-Grants',
        description: 'Dukungan stimulan dana pemulaan bagi karya film pendek eksperimental bernilai seni tinggi.',
        tags: ['Production Grant', 'Creative Freedom', 'Mentorship Support'],
      },
      {
        title: 'Cinema Discussion & Review',
        description: 'Klub apresiasi sinema, penerbitan zine kritik film, dan forum diskusi antar-komunitas film daerah.',
        tags: ['Film Journal', 'Critical Discussion', 'Archive Sharing'],
      },
    ],
    featuredProjects: [
      {
        title: 'Sinemus Micro-Grant 2024',
        category: 'Grant Program',
        year: '2024',
        imageUrl: '/images/khoas_poster.png',
        highlight: 'Pendanaan 5 Film Pendek Eksperimental',
      },
      {
        title: 'Jejaring Sineas Nusantara',
        category: 'Regional Meetup',
        year: '2025',
        imageUrl: '/images/khoas_poster.png',
        highlight: 'Temu Komunitas di 18 Kota Indonesia',
      },
    ],
    workflow: [
      {
        stepNumber: '01',
        title: 'Grant Proposal Submission',
        description: 'Pendaftaran proposal ide film pendek karya anggota komunitas terdaftar.',
      },
      {
        stepNumber: '02',
        title: 'Community Review & Award',
        description: 'Kurasi bersama tim juri komunitas dan penetapan penerima stimulan hibah.',
      },
      {
        stepNumber: '03',
        title: 'Community Screening Tour',
        description: 'Pemutaran keliling karya film yang telah diselesaikan di ruang-ruang apresiasi.',
      },
    ],
  },
];
