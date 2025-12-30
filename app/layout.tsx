import type { Metadata } from "next";
import "@/src/shared/styles/globals.scss";
import { CommonLayout } from "@/src/shared/components/layouts/commonLayout";
import TLayout from "@/src/shared/types/layout";

export const metadata: Metadata = {
  title: "Бажовский словарь — Великое слово Урала",
  description:
    "Электронный словарь уральских слов из сказов Павла Бажова. Погрузитесь в мир народной речи, фольклора и литературного языка Урала. Проект реализуется при поддержке Президентского фонда культурных инициатив.",
  openGraph: {
    title: "Бажовский словарь — Великое слово Урала",
    url: "https://bazhov.vercel.app/",
    description:
      "Электронный словарь уральских слов из сказов Павла Бажова. Погрузитесь в мир народной речи, фольклора и литературного языка Урала. Проект реализуется при поддержке Президентского фонда культурных инициатив.",
    images: [
      {
        url: "../public/Open Graph.png",
        width: 1024,
        height: 1024,
        alt: "Онлайн расшифровка медицинских анализов от 50 рублей",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

export default function RootLayout({ children }: Readonly<TLayout>) {
  return <CommonLayout>{children} </CommonLayout>;
}
