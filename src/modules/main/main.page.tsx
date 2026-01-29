import { FC } from 'react';
import PreviewSection from './components/preview-section.component';
import SectionTitle from './components/section-title.component';
import Alphabet from '@/src/components/alphabet/alphabet.component';
import { taleService } from '@/src/shared/lib/services/tale.service';
import TalesList from '@/src/components/tale-list';
import Footer from '@/src/components/layouts/components/footer';

const MainPage: FC = async () => {
  const tales = await taleService.getTales({ page: 1, limit: 6 });

  return (
    <div className="flex flex-col gap-[120px]">
      <PreviewSection />
      <div>
        <SectionTitle>сказу</SectionTitle>
        <TalesList tales={tales.data} isPreview />
      </div>
      <div>
        <SectionTitle>алфавиту</SectionTitle>
        <Alphabet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainPage;
