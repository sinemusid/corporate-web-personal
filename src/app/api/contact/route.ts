import { NextResponse } from 'next/server';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojgnbzl';

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

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company: company || '-',
        message,
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Pesan Anda berhasil dikirim. Tim Sinemus akan segera menghubungi Anda.',
      });
    }

    const data = await response.json().catch(() => null);
    const errorMsg = data?.errors?.[0]?.message || 'Gagal mengirim pesan melalui Formspree.';

    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: response.status || 500 }
    );
  } catch (err) {
    console.error('API contact error:', err);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
