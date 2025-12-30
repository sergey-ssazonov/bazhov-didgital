import { ButtonLink } from "@/src/shared/components/buttons/buttonLink";
import ArrowRightTop from "@/src/shared/components/icons/ArrowRightTop";
import { SectionTitle } from "@/src/shared/components/SectionTitle";
import { TALES_Data } from "@/src/shared/data/constants/tales.data";
import Image from "next/image";
import React from "react";

const SearchTales = () => {
  return (
    <section>
      <SectionTitle>сказу</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {TALES_Data.map((tale) => (
          <figure
            key={tale.id}
            className="p-6 border border-greySecondary hover:bg-greenSecondary hover:text-greenPrimary "
            // onClick={() => handleClickTale(tale.id)}
          >
            <div className="relative w-full h-[400px] overflow-hidden">
              <Image
                src={tale.previewSrc}
                alt={tale.title}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-xl font-semibold">
              {tale.title}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto w-fit">
        <ButtonLink
          href="?tab=3"
          iconPosition="end"
          type="text"
          color="primary"
          variant="text"
          shape="default"
          style={{ color: "#10790C" }}
          icon={<ArrowRightTop style={{ color: "#10790C" }} />}
        >
          Все сказы
        </ButtonLink>
      </div>
    </section>
  );
};

export default SearchTales;
