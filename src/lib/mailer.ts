export interface MailPayload {
  to?: string;
  subject: string;
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactEmail(payload: MailPayload): Promise<{ success: boolean; message: string }> {
  // Mock mailer integration driver
  console.log('[Mailer] Dispatching contact email:', payload);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Pesan Anda berhasil dikirim. Tim Sinemus akan segera menghubungi Anda.',
      });
    }, 500);
  });
}
