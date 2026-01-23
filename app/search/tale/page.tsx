import SearchWidget from '@/src/components/search-widget';
import { TalesListInfinite } from '@/src/components/tale-list';
import { taleService } from '@/src/shared/lib/services/tale.service';

type TTaleListPageProps = {
  searchParams: { search?: string };
};

export default async function TaleListPage({
  searchParams,
}: TTaleListPageProps) {
  const search = searchParams.search ?? '';
  const limit = 9;

  const { data, count } = await taleService.getTales({
    search,
    page: 1,
    limit,
  });


  return (
    <>
      <SearchWidget placeholder="Поиск сказа" debounceEnabled  />
      <TalesListInfinite
        initialItems={data}
        initialCount={count}
        limit={limit}
      />
    </>
  );
}
