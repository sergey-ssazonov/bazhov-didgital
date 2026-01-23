export type TNavigationItem = {
  href: string;
  label: string;
};

export const NAVIGATION_ITEMS: TNavigationItem[] = [
  { href: "/", label: "Главная" },
  { href: "/search/word", label: "Поиск по слову" },
  { href: "/search/tale", label: "Поиск по сказу" },
  { href: "/search/letter", label: "Поиск по алфавиту" },
  { href: "/about", label: "О проекте" },
];
