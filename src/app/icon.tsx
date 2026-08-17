import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default function Icon() {
  const filePath = path.join(process.cwd(), 'public', 'images', 'sinemus-s-mark.png');
  const fileBuffer = fs.readFileSync(filePath);
  const base64Image = `data:image/png;base64,${fileBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#090d16',
          borderRadius: '110px',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 40px rgba(37, 99, 235, 0.25)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64Image}
          alt="Sinemus Icon"
          style={{
            width: '360px',
            height: '360px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 8px 24px rgba(37, 99, 235, 0.45))',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
