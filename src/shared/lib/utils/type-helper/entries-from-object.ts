/**
 * Тип-помощник для EntriesFromObject
 * Делает Object.entries() типобезопасным
 */
export type EntriesFromObject<T extends Record<string, unknown>> = {
    [K in keyof T]-?: [K, T[K]];
  }[keyof T][];
  