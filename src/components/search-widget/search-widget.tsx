'use client';

import {
  TQueryUpdate,
  useQueryParamsUpdate,
} from '@/src/shared/lib/hooks/use-query-params-update';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useSearchParams } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import { useDebounce } from '@/src/shared/lib/hooks/use-debounce';

type TSearchWidgetProps = {
  placeholder: string;
  onClickSearch?: () => void;
  debounceEnabled?: boolean;
  shouldRedirect?: boolean;
  withFirstLetter?: boolean;
};
// TODO: Лучший практический вариант (комбо)

// Клиентом делаешь живой поиск (дебаунс + fetch) для быстроты.

// URL обновляешь реже:

// по Enter/кнопке “Найти” (как сейчас)

// или через дебаунс, но не каждый символ, а, например, когда длина ≥ 2 и пользователь “остановился”

// На сервере страница всё равно умеет отрендериться по searchWord (для прямых ссылок).

// Это даёт:

// быстрый UX при вводе

// URL остаётся источником состояния для “финального” поиска и шаринга

const SearchWidget: FC<TSearchWidgetProps> = ({
  placeholder,
  debounceEnabled,
  shouldRedirect,
  withFirstLetter,
}) => {
  const PARAM_KEY = 'search';
  const searchParams = useSearchParams();
  const searchWordParam = searchParams.get(PARAM_KEY) ?? '';

  const [query, setQuery] = useState<string>(searchWordParam);
  const [focused, setFocused] = useState<boolean>(false);

  const updateQuery: TQueryUpdate = useQueryParamsUpdate();

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debounceEnabled) {
      updateQuery({
        params: { [PARAM_KEY]: debouncedQuery },
      });
    }
  }, [debouncedQuery, updateQuery, debounceEnabled]);

  useEffect(() => {
    setQuery(searchWordParam);
  }, [searchWordParam, PARAM_KEY]);

  const handleSearch = () => {
    updateQuery({
      params: { [PARAM_KEY]: query },
      pathname: shouldRedirect ? '/search/word' : undefined,
    });

    if (withFirstLetter) {
      updateQuery({
        params: { letter: query[0] },
      });
    }

    setFocused(false);
  };

  return (
    <div className="flex w-full lg:w-[615px] mx-auto">
      <Input
        value={query}
        placeholder={placeholder}
        suffix={query.length > 0 ? null : <SearchOutlined />}
        allowClear
        size="large"
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onPressEnter={handleSearch}
        className="transition-all duration-300 flex-1"
      />

      <Button
        size="large"
        type="primary"
        onClick={handleSearch}
        className={`
          ml-2
          transition-all duration-300
          ${focused ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 none'}
          md:translate-x-0 md:opacity-100 md:block block
        `}
      >
        Найти
      </Button>
    </div>
  );
};

export default SearchWidget;
