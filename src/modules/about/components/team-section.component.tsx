import React, { FC } from "react";
// import SectionSpace from './section-space';
import GoshaImg from "@/public/images/about/gosha-img.jpg";
import MariaImg from "@/public/images/about/maria-img.jpg";
import ZhenyaImg from "@/public/images/about/zhenya-img.jpg";
import Image from "next/image";
import Title from "./title";

type TTeam = {
  imgSrc: string;
  name: string;
  regalii: string[];
};

const TeamSection: FC = () => {
  const TEAM_DATA: TTeam[] = [
    {
      imgSrc: GoshaImg.src,
      name: "Георгий Григорьев",
      regalii: [
        "Кандидат филологических наук",
        "Заведующий Мемориальным  домом-музеем П. П. Бажова",
        "Лауреат Бажовской премии",
      ],
    },
    {
      imgSrc: MariaImg.src,
      name: "Мария Литовская",
      regalii: [
        "Доктор филологических наук, профессор",
        "Соавтор «Бажовской энциклопедии»",
        "Лауреат Бажовской премии",
      ],
    },
    {
      imgSrc: ZhenyaImg.src,
      name: "Евгения Потапова",
      regalii: [
        "Аспирантка кафедры русской и зарубежной литературы УрФУ",
        "Научный сотрудник Мемориального  дома-музея П. П. Бажова",
        "Победитель конкурсов на соискание  стипендий Правительства РФ, именной  стипендии А. И. Солженицына и др.",
      ],
    },
  ];

  return (
    <>
      <Title>Команда проекта</Title>
      <section className="border divide-y divide-x xl:grid grid-cols-3 border-greySecondary">
        {TEAM_DATA.map((el) => (
          <figure
            key={el.name}
            className="flex max-sm:flex-col xl:flex-col lg:p-6 p-4 gap-3"
          >
            <div className="relative max-sm:w-full flex-shrink-0 aspect-[0.88] max-xl:w-[277px] max-md:w-[198px]">
              <Image
                src={el.imgSrc}
                alt={el.name}
                fill
                className="object-cover object-[50%_20%]"
              />
            </div>

            <div>
              <figcaption className="md:text-xl">
                <h3 className="font-semibold mb-2">{el.name}</h3>
                {el.regalii.map((item) => (
                  <p key={item} className="block mb-2">
                    {item}
                  </p>
                ))}
              </figcaption>
            </div>
          </figure>
        ))}
      </section>
    </>
  );
};

export default TeamSection;
