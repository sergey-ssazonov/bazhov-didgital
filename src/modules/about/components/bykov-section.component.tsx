import React, { FC } from "react";
import SectionSpace from "./section-space";
import BykovImg from "@/public/images/about/bykov-img.png";
import Image from "next/image";

const BykovSection: FC = () => {
  return (
    <>
      <section className="border border-greySecondary lg:p-6 p-4 ">
        <figure className="flex max-lg:flex-col gap-6">
          <div className="relative flex-shrink-0 max-sm:w-full w-[277px] h-[178px]">
            <Image
              src={BykovImg.src}
              alt="Леонид Петрович Быков"
              fill
              className="object-cover object-[50%_20%]"
            />
          </div>

          <div className="flex flex-col justify-between">
            <p className="block xl:text-[32px] lg:text-[28px] md:text-2xl sm:text-xl text-lg max-lg:mb-6 max-sm:mb-4">
              Словарь Бажова&nbsp;&mdash; издание, нужное для каждого человека,
              читавшего Бажова в&nbsp;школе или взрослом возрасте
            </p>
            <figcaption className="block">
              <h3 className="text-greenPrimary lg:text-xl md:text-lg">
                Леонид Петрович Быков
              </h3>
              <p className="text-sm">
                Поэт, литературовед, критик, доктор филологических наук,
                профессор, член Союза российских писателей, член редколлегии
                литературного журнала &laquo;Урал&raquo;
              </p>
            </figcaption>
          </div>
        </figure>
      </section>
      <SectionSpace />
    </>
  );
};

export default BykovSection;
