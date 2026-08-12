export interface MailPayload {
  to?: string;
  subject: string;
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactEmail(): Promise<{ success: boolean; message: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Pesan Anda berhasil dikirim. Tim Sinemus akan segera menghubungi Anda.',
      });
    }, 500);
  });
}
