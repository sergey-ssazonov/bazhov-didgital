'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export type TQueryUpdate = ({ params, pathname }: TQueryUpdateProps) => void;

type TQueryUpdateProps = {
  params: TQueryParams;
  pathname?: string;
};

export type TQueryParams = Record<
  string,
  string | number | null | boolean | undefined
>;

/**
 * Хук для обновления query параметров в URL без перезагрузки страницы.
 * @returns Функция для обновления query параметров.
 */
export const useQueryParamsUpdate = (): TQueryUpdate => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return useCallback(
    ({ params, pathname }: TQueryUpdateProps) => {
      const current = new URLSearchParams(searchParams.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') {
          current.delete(key);
        } else {
          current.set(key, String(value));
        }
      });

      const query = current.toString();
      const newUrl = `${pathname ?? window.location.pathname}${query ? `?${query}` : ''}`;

      router.push(newUrl, { scroll: false });
    },
    [router, searchParams]
  );
};
