import { MOCK_JOIN_MISSION } from '../constants/join-mission.mock';
import { MOCK_CONTACT_COMPANY } from '../constants/contact-company.mock';
import { mapJoinMission, mapContactCompany } from './data-mapper';
import { ContactFormData } from '../types';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojgnbzl';

export async function fetchJoinMission() {
  return mapJoinMission(MOCK_JOIN_MISSION);
}

export async function fetchContactCompany() {
  return mapContactCompany(MOCK_CONTACT_COMPANY);
}

export async function submitContactForm(payload: ContactFormData): Promise<boolean> {
  if (!payload.name || !payload.email || !payload.message) {
    throw new Error('Nama, email, dan pesan wajib diisi.');
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        company: payload.company || '-',
        message: payload.message,
      }),
    });

    if (response.ok) {
      return true;
    }

    const data = await response.json().catch(() => null);
    if (data && data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
      const errorMsg = data.errors.map((e: { message: string }) => e.message).join(', ');
      throw new Error(`Gagal mengirim pesan: ${errorMsg}`);
    }

    throw new Error('Gagal mengirim pesan. Silakan periksa kembali data Anda.');
  } catch (err) {
    console.error('Formspree submission error:', err);
    if (err instanceof Error) {
      throw err;
    }
    throw new Error('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
  }
}
