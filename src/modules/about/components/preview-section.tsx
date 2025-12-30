import Image from "next/image";
import React, { FC } from "react";
import AboutPreviewImg from "@/public/images/about/about-preview-img.jpg";
import FondLogoImg from "@/public/images/about/fond-logo.png";
import SectionSpace from "./section-space";

const PreviewSection: FC = () => {
  return (
    <>
      <section className="grid grid-cols-2 mt-8 md:mt-16 lg:mt-24 bg-greenDark">
        <div className="m relative mx-auto w-full sm:aspect-[1.75] max-sm:h-60 max-xs:h-32 max-lg:col-span-2">
          <Image
            src={AboutPreviewImg.src}
            fill
            alt="Белые уральские горы"
            className="object-cover object-[50%_20%]"
          />
        </div>
        {/* TODO: сделалать нормальную верстку на пограничных размерах */}
        {/* TODO: убрать рамку вокруг фотки */}
        <div className=" flex flex-col items-center justify-between lg:py-14 pt-2 pb-5 px-6 max-lg:col-span-2 sm:gap-8 gap-7">
          <h1 className="xl:text-[40px] md:text-4xl sm:text-3xl text-xl text-center text-white ">
            Великое слово Урала:
            <br />
            <span className="font-druzhok">Бажовский словарь</span>
          </h1>
          <div className="flex items-center justify-center gap-3 max-sm:flex-col max-sm:items-start">
            <Image
              src={FondLogoImg.src}
              alt="Президентского фонда культурных инициатив"
              height={40}
              width={130}
            />
            <p className="text-white w-3/4 max-lg:text-sm max-sm:text-xs">
              Проект реализуется при поддержке Президентского фонда культурных
              инициатив
              <br />
              заявка &#8470;ПФКИ-25-1-011059
            </p>
          </div>
        </div>
      </section>
      <SectionSpace />
    </>
  );
};

export default PreviewSection;
