import React, { FC } from 'react';
import TypewriterBlock from './type-writter.component';
import SearchWidget from '@/src/components/search-widget';
import SectionSpace from '@/src/components/section-space';

const PreviewSection: FC = () => {
  return (
    <section className="mt-24 flex flex-col items-center">
      <h1 className="xl:text-[74px] lg:text-[64px] md:text-[44px] sm:text-4xl text-3xl font-bukvoglot text-center">
        <span className="font-druzhok text-greenPrimary">Бажовский</span> сло
        <span className="font-sans font-semibold">в</span>арь
      </h1>
      <TypewriterBlock />
      <SearchWidget placeholder="Поиск по слову" shouldRedirect />
      <SectionSpace />
    </section>
  );
};

export default PreviewSection;
