import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: '40px',
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64Image}
          alt="Sinemus Apple Icon"
          style={{
            width: '130px',
            height: '130px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 12px rgba(37, 99, 235, 0.45))',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
