'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { wordService } from '@/src/shared/lib/services/word.service';
import { Word } from '@/src/shared/lib/models/word.model';
import WordList, { TWordListProps } from './word-list.component';
import { LoadingOutlined } from '@ant-design/icons';
import { useSearchParams } from 'next/navigation';

type TWordListInfiniteProps = {
  byLetter?: string;
  tale?: string;

  initialItems: Word[];
  initialCount: number;

  limit?: number;

  title?: string;
  variant: 'flat' | 'trasparent';
  hrefClose?: string;
};

export default function WordListInfinite({
  byLetter,
  tale,
  initialItems,
  initialCount,
  limit = 20,
  title,
  variant,
  hrefClose,
}: TWordListInfiniteProps & Omit<TWordListProps, 'words'>) {
  const [items, setItems] = useState<Word[]>(initialItems);
  const [count, setCount] = useState(initialCount);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const key = useMemo(
    () => `${search ?? ''}|${byLetter ?? ''}|${tale ?? ''}`,
    [search, byLetter, tale]
  );

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

    const res = await wordService.getWords({
      search,
      byLetter,
      tale,
      page: nextPage,
      limit,
    });

    setItems((prev) => [...prev, ...res.data]);

    setCount(res.count);
    setPage(nextPage);
    setLoading(false);
  }, [loading, hasMore, page, search, byLetter, tale, limit]);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchNext}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center h-25 items-center">
          <LoadingOutlined spin size={100} />
        </div>
      }
      scrollThreshold={0.8}
    >
      <WordList
        words={items}
        variant={variant}
        hrefClose={hrefClose}
        title={title}
      />
    </InfiniteScroll>
  );
}
