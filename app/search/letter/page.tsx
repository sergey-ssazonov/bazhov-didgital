import Alphabet from '@/src/components/alphabet/alphabet.component';
import SearchWidget from '@/src/components/search-widget';
import { WordListInfinite } from '@/src/components/word-list';
import { wordService } from '@/src/shared/lib/services/word.service';

type TSearchAlphabetPageProps = {
  searchParams: { search?: string; letter?: string };
};

export default async function SearchAlphabetPage({
  searchParams,
}: TSearchAlphabetPageProps) {
  const search = searchParams.search ?? '';
  const byLetter = searchParams.letter ?? '';
  const limit = 10;

  const { data, count } = await wordService.getWords({
    search,
    byLetter,
    page: 1,
    limit,
  });

  const hasLetterParam = Boolean(searchParams.letter);
  return (
    <>
      <SearchWidget
        placeholder="Поиск слова по алфавиту"
        debounceEnabled={hasLetterParam}
        withFirstLetter
      />
      {!hasLetterParam ? (
        <Alphabet />
      ) : (
        <WordListInfinite
          initialItems={data}
          initialCount={count}
          limit={limit}
          byLetter={byLetter}
          title={byLetter}
          variant="flat"
          hrefClose="/search/letter"
        />
      )}
    </>
  );
}
