import SearchWidget from '@/src/components/search-widget';
import { WordListInfinite } from '@/src/components/word-list';
import { wordService } from '@/src/shared/lib/services/word.service';

type TSearchWordPageProps = {
  searchParams: { search?: string; letter?: string; taleId?: string };
};

export default async function SearchWordPage({
  searchParams,
}: TSearchWordPageProps) {
  const search = searchParams.search ?? '';
  const limit = 10;

  const { data, count } = await wordService.getWords({
    search,
    page: 1,
    limit,
  });

  return (
    <>
      <SearchWidget placeholder="Поиск по слову" debounceEnabled />
      <WordListInfinite
        initialItems={data}
        initialCount={count}
        limit={limit}
        variant="trasparent"
      />
    </>
  );
}
