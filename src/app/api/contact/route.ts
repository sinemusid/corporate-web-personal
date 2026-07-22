import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Nama, email, dan pesan wajib diisi.' },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      name,
      email,
      company,
      message,
      subject: `Pesan Kontak Baru dari ${name}`,
    });

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
