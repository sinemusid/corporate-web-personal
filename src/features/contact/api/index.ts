import { MOCK_PARTNERS } from '../constants/partners-mock';
import { mapPartners } from './data-mapper';
import { ContactFormData } from '../types';

export async function fetchPartners() {
  return mapPartners(MOCK_PARTNERS);
}

export async function submitContactForm(payload: ContactFormData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}
