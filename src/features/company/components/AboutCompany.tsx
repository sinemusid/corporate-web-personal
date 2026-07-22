import React from 'react';
import { CompanyInfo } from '../types';

interface AboutCompanyProps {
  info: CompanyInfo;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ info }) => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-white">Tentang {info.name}</h2>
      <p className="text-base text-zinc-300 leading-relaxed">{info.fullAbout}</p>
    </div>
  );
};
