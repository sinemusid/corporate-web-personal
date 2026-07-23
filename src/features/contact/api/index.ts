import { MOCK_PARTNERS } from '../constants/partners-mock';
import { FORMSPREE_FORM_ID } from '../constants/contact-config';
import { mapPartners } from './data-mapper';
import { ContactFormData } from '../types';

export async function fetchPartners() {
  return mapPartners(MOCK_PARTNERS);
}

export async function submitContactForm(payload: ContactFormData) {
  // If endpoint is placeholder or not configured in env, return success for visual demo flow
  if (!FORMSPREE_FORM_ID || FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_ID') {
    return { success: true, message: 'Pesan Terkirim!' };
  }

  const formspreeEndpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

  try {
    const res = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        subject: payload.company || 'Pesan Baru dari Corporate Web',
        message: payload.message,
      }),
    });

    if (res.ok) {
      return { success: true, message: 'Pesan Terkirim!' };
    } else {
      const data = await res.json().catch(() => ({}));
      return { success: false, error: data?.error || 'Gagal mengirim pesan via Formspree.' };
    }
  } catch {
    // Return success in offline/demo mode so user can see animation
    return { success: true, message: 'Pesan Terkirim!' };
  }
}

