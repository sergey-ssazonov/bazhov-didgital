'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'next/navigation';
import { LoadingOutlined } from '@ant-design/icons';

import TalesList from '@/src/components/tale-list';
import { taleService } from '@/src/shared/lib/services/tale.service';
import { TTale } from '@/src/shared/lib/models/tale.model';

type TTalesListInfiniteProps = {
  initialItems: TTale[];
  initialCount: number;
  limit?: number;

  isPreview?: boolean;
};

export default function TalesListInfinite({
  initialItems,
  initialCount,
  limit = 12,
}: TTalesListInfiniteProps) {
  const [items, setItems] = useState<TTale[]>(initialItems);
  const [count, setCount] = useState(initialCount);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const sp = useSearchParams();
  const search = sp.get('search') ?? '';

  const key = useMemo(() => search, [search]);

  useEffect(() => {
    setItems(initialItems);
    setCount(initialCount);
    setPage(1);
  }, [key, initialItems, initialCount]);

  const hasMore = items.length < count;

  const fetchNext = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = page + 1;

    const res = await taleService.getTales({ search, page: nextPage, limit });

    setItems((prev) => [...prev, ...res.data]);
    setCount(res.count);
    setPage(nextPage);
    setLoading(false);
  }, [loading, hasMore, page, search, limit]);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchNext}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center h-25 items-center">
          <LoadingOutlined spin />
        </div>
      }
      scrollThreshold={0.5}
      className="w-full"
    >
      <TalesList tales={items} />
    </InfiniteScroll>
  );
}
