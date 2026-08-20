import { BusinessUnit } from '../types';

export const MOCK_UNITS: BusinessUnit[] = [
  {
    id: 'unit-production',
    slug: 'production',
    title: 'PRODUCTION UNIT',
    subtitle: 'Film Feature & Studio Content Studio',
    description: 'Unit produksi yang berfokus pada penciptaan karya film, video korporat, dokumenter, dan konten audio-visual berstandar profesional.',
    about: 'Sinemus Production memadukan kekuatan narasi visual dengan standar teknis produksi yang solid. Kami mendampingi proses kreasi mulai dari pengembangan ide cerita, pra-produksi, eksekusi pengambilan gambar, hingga tahap pasca-produksi untuk menghasilkan karya yang berkarakter dan berdampak.',
    bannerUrl: '/images/units/bg-production.jpg',
    ogImage: '/share/sinemus-production.PNG',
    externalUrl: 'https://production.sinemus.id',
    isLiveWebsite: false,
    features: ['Feature Film & Short Film', 'Corporate & Commercial Video', 'Post-Production & Sound Finishing'],
    capabilities: [
      {
        title: 'Pra-Produksi & Konsep Cerita',
        description: 'Penyusunan konsep naratif, penulisan naskah (scriptwriting), riset cerita, dan perencanaan teknis pra-syuting.',
        tags: ['Scriptwriting', 'Story Development', 'Pre-Production'],
      },
      {
        title: 'Produksi Audio-Visual',
        description: 'Eksekusi pengambilan gambar (shooting) dengan tata kamera sinematik, manajemen kru profesional, dan pengawasan kualitas.',
        tags: ['Cinematography', 'Directing', 'Production Management'],
      },
      {
        title: 'Pasca-Produksi & Finishing',
        description: 'Penyuntingan video (video editing), pewarnaan sinematik (color grading), dan tata suara (sound design/mixing).',
        tags: ['Video Editing', 'Color Grading', 'Sound Design'],
      },
    ],
    stats: [],
    featuredProjects: [],
    workflow: [
      {
        stepNumber: '01',
        title: 'Briefing & Perumusan Konsep',
        description: 'Mendiskusikan kebutuhan cerita, tujuan komunikasi, dan skema perencanaan produksi.',
      },
      {
        stepNumber: '02',
        title: 'Eksekusi Pengambilan Gambar',
        description: 'Pelaksanaan syuting di lapangan dengan manajemen teknis dan artistik yang terukur.',
      },
      {
        stepNumber: '03',
        title: 'Pasca-Produksi & Penyerahan Hasil',
        description: 'Proses editing, grading, mixing audio, dan finalisasi master karya.',
      },
    ],
  },
  {
    id: 'unit-screen',
    slug: 'screen',
    title: 'SCREEN UNIT',
    subtitle: 'Platform Screening Digital & Ticketing Event Sinema',
    description: 'Platform penayangan film berbasis web serta sistem ticketing online untuk mempermudah manajemen dan partisipasi event screening offline.',
    about: 'Sinemus Screen memfasilitasi penayangan karya film melalui streaming digital berbasis web agar karya dapat menjangkau audiens yang lebih luas. Selain itu, platform ini menyediakan layanan pembelian tiket dan manajemen event screening luring (offline), memberikan kemudahan bagi peserta serta mempermudah penyelenggara dalam mengelola pendaftaran dan kuota event.',
    bannerUrl: '/images/units/bg-screen.jpg',
    ogImage: '/share/sinemus-screen.PNG',
    externalUrl: 'https://screen.sinemus.id',
    isLiveWebsite: true,
    features: ['Web Streaming & Digital Screening', 'Online Ticketing & Booking', 'Event Screening Management'],
    capabilities: [
      {
        title: 'Web Streaming & Digital Screening',
        description: 'Fasilitas penayangan dan pemutaran film secara digital langsung melalui website untuk memperluas jangkauan penonton tanpa batas geografis.',
        tags: ['Web Streaming', 'Digital Screening', 'Audience Reach'],
      },
      {
        title: 'Sistem Tiket Online (Ticketing System)',
        description: 'Layanan pemesanan dan pembelian tiket secara praktis via web untuk acara pemutaran film / screening offline.',
        tags: ['Online Ticketing', 'Event Booking', 'Payment Gateway'],
      },
      {
        title: 'Event & Participant Management',
        description: 'Sistem pengelolaan peserta, kuota kursi, dan validasi tiket event offline untuk mempermudah operasional penyelenggara.',
        tags: ['Event Management', 'Attendee Tracking', 'Seamless Check-In'],
      },
    ],
    stats: [],
    featuredProjects: [],
    workflow: [
      {
        stepNumber: '01',
        title: 'Publikasi Film & Jadwal Screening',
        description: 'Penayangan katalog film untuk streaming web atau pembukaan pendaftaran jadwal event screening offline.',
      },
      {
        stepNumber: '02',
        title: 'Pemesanan Tiket & Akses Nonton',
        description: 'Penonton dapat langsung mengakses penayangan via web atau membeli tiket event offline secara mudah dan aman.',
      },
      {
        stepNumber: '03',
        title: 'Manajemen Event & Validasi',
        description: 'Penyelenggara mengelola data peserta, kapasitas kuota, dan proses validasi tiket saat acara berlangsung.',
      },
    ],
  },
  {
    id: 'unit-academy',
    slug: 'academy',
    title: 'ACADEMY UNIT',
    subtitle: 'Creative Talent & Technical Education',
    description: 'Pusat pelatihan, workshop, dan pembekalan teknis bagi talenta kreatif dan insan perfilman.',
    about: 'Sinemus Academy didedikasikan untuk memperkuat keahlian teknis dan pemahaman industri perfilman. Melalui berbagai program workshop, kelas intensif, dan sesi berbagi bersama praktisi berpengalaman, kami mendukung lahirnya talenta kreatif yang kompeten dan berintegritas.',
    bannerUrl: '/images/units/bg-academy.jpg',
    ogImage: '/share/sinemus-academy.PNG',
    externalUrl: 'https://academy.sinemus.id',
    isLiveWebsite: false,
    features: ['Technical Workshops', 'Masterclass & Directing Lab', 'Scriptwriting Class'],
    capabilities: [
      {
        title: 'Workshop & Pelatihan Teknis',
        description: 'Pelatihan langsung untuk keterampilan spesifik seperti tata kamera, penyuntingan video, tata suara, dan penulisan naskah.',
        tags: ['Cinematography Workshop', 'Editing Class', 'Scriptwriting'],
      },
      {
        title: 'Masterclass & Diskusi Praktisi',
        description: 'Sesi pembelajaran eksklusif bersama praktisi industri perfilman untuk membedah studi kasus dan wawasan profesional.',
        tags: ['Masterclass', 'Industry Insights', 'Case Study'],
      },
      {
        title: 'Program Pendampingan / Mentorship',
        description: 'Bimbingan terarah bagi peserta untuk mengembangkan portofolio karya atau proposal proyek kreatif mereka.',
        tags: ['Mentorship', 'Portfolio Review', 'Creative Guidance'],
      },
    ],
    stats: [],
    featuredProjects: [],
    workflow: [
      {
        stepNumber: '01',
        title: 'Pendaftaran & Kurikulum Program',
        description: 'Penyusunan modul pembelajaran yang aplikatif sesuai level kebutuhan peserta.',
      },
      {
        stepNumber: '02',
        title: 'Sesi Belajar & Praktik Lapangan',
        description: 'Penyampaian materi secara interaktif yang disertai simulasi dan latihan praktik langsung.',
      },
      {
        stepNumber: '03',
        title: 'Review & Umpan Balik',
        description: 'Pemberian masukan terhadap hasil karya peserta oleh pemateri dan fasilitator.',
      },
    ],
  },
  {
    id: 'unit-community',
    slug: 'community',
    title: 'COMMUNITY UNIT',
    subtitle: 'Filmmakers Network & Arts Collective',
    description: 'Ruang kolaborasi dan interaksi bagi para sineas, kreator konten, dan penggiat media visual.',
    about: 'Sinemus Community membangun ekosistem yang suportif bagi para penggiat audio-visual. Kami memfasilitasi temu komunitas, pertukaran ide, serta ruang kolaborasi karya antarkreator di berbagai daerah.',
    bannerUrl: '/images/units/bg-community.png',
    ogImage: '/share/sinemus-community.PNG',
    externalUrl: 'https://community.sinemus.id',
    isLiveWebsite: false,
    features: ['Filmmakers Meetup', 'Creative Collaboration', 'Community Discussion'],
    capabilities: [
      {
        title: 'Jejaring & Temu Komunitas',
        description: 'Penyelenggaraan pertemuan berkala untuk mempertemukan kreator film, penulis, dan penggiat audio-visual.',
        tags: ['Networking', 'Meetup', 'Community Gathering'],
      },
      {
        title: 'Ruang Kolaborasi Karya',
        description: 'Fasilitasi pertukaran ide dan pembentukan tim kreatif antaranggotanya untuk memproduksi karya kolaboratif.',
        tags: ['Collaboration', 'Co-Creation', 'Talent Sharing'],
      },
      {
        title: 'Forum Apresiasi & Bedah Karya',
        description: 'Sesi nonton bareng dan bedah karya film pendek komunitas sebagai sarana belajar bersama dan saling memberikan masukan.',
        tags: ['Film Review', 'Sharing Session', 'Community Screening'],
      },
    ],
    stats: [],
    featuredProjects: [],
    workflow: [
      {
        stepNumber: '01',
        title: 'Terhubung dalam Komunitas',
        description: 'Bergabung dalam kanal komunikasi dan jejaring komunitas pegiat sinema.',
      },
      {
        stepNumber: '02',
        title: 'Partisipasi Agenda & Forum',
        description: 'Mengikuti sesi temu, workshop komunitas, dan agenda diskusi karya berkala.',
      },
      {
        stepNumber: '03',
        title: 'Kolaborasi & Kreasi Bersama',
        description: 'Mengembangkan inisiatif bersama untuk memperkuat ekosistem perfilman lokal.',
      },
    ],
  },
];
