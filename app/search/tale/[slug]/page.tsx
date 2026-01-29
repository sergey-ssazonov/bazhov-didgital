import SearchWidget from '@/src/components/search-widget';
import { WordListInfinite } from '@/src/components/word-list';
import { taleService } from '@/src/shared/lib/services/tale.service';
import { wordService } from '@/src/shared/lib/services/word.service';

type TTalePageProps = {
  params: { slug: string };
  searchParams: { search?: string };
};

export default async function TalePage({
  params,
  searchParams,
}: TTalePageProps) {
  const search = searchParams.search ?? '';
  const limit = 20;

  const tale = await taleService.getTaleBySlug(params.slug);

  const { data, count } = await wordService.getWords({
    search,
    tale: params.slug,
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
        tale={params.slug}
        title={tale?.name}
        variant="flat"
        hrefClose="/search/tale"
      />
    </>
  );
}
