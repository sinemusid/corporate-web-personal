import { ContactCompanyData } from '../types';

export const MOCK_CONTACT_COMPANY: ContactCompanyData = {
  info: [
    { type: 'email', label: 'Email Resmi', value: 'sineasmuslimindonesia@gmail.com' },
    { type: 'phone', label: 'Telepon & WhatsApp', value: '+62 895-2602-0145' },
    { type: 'address', label: 'Kantor Pusat', value: 'Bandung, Indonesia' },
  ],
  labels: {
    heading: 'Hubungi Perusahaan',
    subheading: 'Kirimkan pesan atau rencana kolaborasi Anda. Tim kami akan merespons dalam 1x24 jam kerja.',
    nameLabel: 'Nama Lengkap',
    namePlaceholder: 'Masukkan nama Anda...',
    emailLabel: 'Alamat Email',
    emailPlaceholder: 'email@domain.com',
    companyLabel: 'Perusahaan / Institusi',
    companyPlaceholder: 'Nama studio, institusi, atau proyek...',
    messageLabel: 'Pesan / Rencana Kolaborasi',
    messagePlaceholder: 'Tuliskan detail pesan atau pertanyaan Anda di sini...',
    submitButton: 'Kirim Pesan Sekarang',
    submittingButton: 'Mengirimkan Pesan...',
    successTitle: 'Pesan Berhasil Terkirim!',
    successMessage: 'Terima kasih telah menghubungi Sinemus Indonesia. Tim kami akan segera menghubungi Anda.',
    sendAnotherButton: 'Kirim Pesan Lainnya',
  },
};
