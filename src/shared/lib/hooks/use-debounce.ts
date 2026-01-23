import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 500;

/**
 * Выполняет вычисление не чаще чем раз в delay
 * @category Hook
 * @param value
 * @param delay {number}
 */
export function useDebounce<T>(value: T, delay: number = DEFAULT_DELAY): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
