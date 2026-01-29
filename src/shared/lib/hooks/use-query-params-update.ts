'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export type TQueryParams = Record<
  string,
  string | number | boolean | null | undefined
>;

type TQueryUpdateProps = {
  params: TQueryParams;
  pathname?: string;
};

export type TQueryUpdate = (args: TQueryUpdateProps) => void;

/**
 * Обновляет query-параметры в URL без перезагрузки страницы.
 * Возвращает функцию, которая:
 * - удаляет ключ, если значение null/undefined/пустая строка
 * - иначе ставит значение как строку
 */
export const useQueryParamsUpdate = (): TQueryUpdate => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = useCallback(
    ({ params, pathname }: TQueryUpdateProps) => {
      // берём текущие query-параметры
      const nextParams = new URLSearchParams(searchParams.toString());

      // применяем изменения
      for (const [key, value] of Object.entries(params)) {
        if (value === null || value === undefined || value === '') {
          nextParams.delete(key);
          continue;
        }
        nextParams.set(key, String(value));
      }

      // собираем новый URL
      const queryString = nextParams.toString();
      const basePath = pathname ?? window.location.pathname;
      const url = queryString ? `${basePath}?${queryString}` : basePath;

      router.push(url, { scroll: false });
    },
    [router, searchParams]
  );

  return updateQuery;
};
