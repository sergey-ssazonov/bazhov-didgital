import SearchWidget from '@/src/components/search-widget';
import { WordListInfinite } from '@/src/components/word-list';
import { taleService } from '@/src/shared/lib/services/tale.service';
import { wordService } from '@/src/shared/lib/services/word.service';

type TTalePageProps = {
  params: { id: string };
  searchParams: { search?: string };
};

export default async function TalePage({
  params,
  searchParams,
}: TTalePageProps) {
  const search = searchParams.search ?? '';
  const limit = 20;

  const tale = await taleService.getTaleById(params.id);

  const { data, count } = await wordService.getWords({
    search,
    taleId: params.id,
    page: 1,
    limit,
  });

  return (
    <>
      <SearchWidget placeholder="Поиск слова по сказу" debounceEnabled />
      <WordListInfinite
        initialItems={data}
        initialCount={count}
        limit={limit}
        title={tale?.name}
        variant="flat"
        hrefClose="/search/tale"
      />
    </>
  );
}
