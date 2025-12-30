import React, { FC, PropsWithChildren } from "react";
import { ButtonLink } from "../buttons/buttonLink";

const DemoVersion: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Подложка для блокировки кликов */}
      <div className="absolute inset-0 bg-white opacity-80 z-30 pointer-events-none"></div>

      <div className="text-center max-w-80 bg-white shadow-md border border-greenPrimary p-4 rounded-2xl flex flex-col gap-2 items-center justify-center fixed left-10 bottom-10 z-[100]">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Это демо-версия сайта
        </h2>
        <p className="text-gray-600 mb-4">
          Сайт еще в разработке. Мы активно работаем над его функционалом, а
          пока вы можете ознакомиться с проектом подробнее.
        </p>
        <ButtonLink type="primary" size="large" href={"/about"}>
          О проекте
        </ButtonLink>
      </div>

      {/* Основной контент страницы */}
      <div className="z-10">{children}</div>
    </div>
  );
};

export default DemoVersion;
