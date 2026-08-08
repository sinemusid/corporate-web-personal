import React from 'react';
import { HomeWhoWeAre, fetchHomeWhoWeAre } from '@/features/home';

export const WhoWeAreSectionWidget: React.FC = async () => {
  const whoWeAre = await fetchHomeWhoWeAre();

  return (
    <section id="who-we-are" className="w-full overflow-hidden">
      <HomeWhoWeAre data={whoWeAre} />
    </section>
  );
};
