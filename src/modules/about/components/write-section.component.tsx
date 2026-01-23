import React, { FC } from 'react';
import Write1Img from '@/public/images/about/about-write-1-img.jpg';
import Write2Img from '@/public/images/about/about-write-2-img.jpg';
import Write3Img from '@/public/images/about/about-write-3-img.jpg';
import Image from 'next/image';
import Title from './title';
import SectionSpace from '../../../components/section-space';

const WriteSection: FC = () => {
  const WRITE_IMG = [Write1Img, Write2Img, Write3Img];
  return (
    <>
      <Title>Как писал Бажов?</Title>
      <section className="grid grid-cols-2 gap-x-6 gap-y-8 md:text-xl">
        <p className="block max-xl:col-span-2">
          Бажов, создавая сказы, в&nbsp;первую очередь заботился о&nbsp;запасе
          слов, которые помогут передать уникальную образность и&nbsp;мелодику
          речи героев-уральцев.
          <br />
          <br />
          С&nbsp;одной стороны, это действительно затрудняет чтение (писатель
          говорил, что и&nbsp;ему нелегко даётся такой подход
          к&nbsp;повествованию), однако с&nbsp;другой стороны, именно этот приём
          сделал тексты Бажова максимально яркими, узнаваемыми, полными обаяния,
          буквально заставляющими читателя поражаться неисчерпаемостью богатств
          русского языка.
          <br />
          <br />
          Вневременной успех сборника сказов
          <span className="text-greenPrimary">
            &laquo;Малахитовая шкатулка&raquo;
          </span>
          у&nbsp;&laquo;рядового&raquo; читателя и&nbsp;признание среди
          профессиональных литераторов убедительно показывают, что подход Бажова
          оказался абсолютно верным.
        </p>

        <div className="max-xl:col-span-2 grid grid-cols-3 max-xl:h-115 max-lg:h-[277px] max-md:h-36">
          {WRITE_IMG.map((img) => (
            <div key={img.src} className="relative">
              <Image
                src={img.src}
                alt="Иллюстрация из произведения П.П.Бажова"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="bg-paper max-lg:col-span-2 rounded-[20px] lg:p-6 p-4">
          <p>
            Бажов всегда подчёркивал важность сохранения народного языка
            и&nbsp;культуры регионов России. В&nbsp;одном из&nbsp;писем своему
            коллеге, дальневосточному писателю-фольклористу Д.Н. Нагишкину
            он&nbsp;писал так:
          </p>
          <br />
          <p className="text-greenPrimary md:text-2xl">
            &laquo;И&nbsp;какая все‑таки это изумительная вещь этот фольклор.
            Ведь ваша небольшая книжечка даёт больше, чем иное фундаментальное
            исследование. Не&nbsp;просто через эти сказки видишь жизнь,
            начинаешь её&nbsp;ощущать&raquo;
          </p>
        </div>

        <div className="max-lg:col-span-2">
          <p>
            Проект, во‑первых, привлекает внимание к&nbsp;важному,
            но&nbsp;малоизвестному языковому феномену региональных говоров
            (в&nbsp;повседневной жизни мы&nbsp;все используем те&nbsp;или иные
            диалектные слова, попавшие в&nbsp;наш лексикон благодаря бабушкам
            и&nbsp;дедушкам,&nbsp;&mdash; просто не&nbsp;осознаем этого).
            <br />
            <br />
            Во‑вторых, &laquo;Бажовский словарь&raquo;, облегчающий знакомство
            и&nbsp;погружение в&nbsp;мир сказов Бажова, поможет передать
            культуру &laquo;родителей наших родителей&raquo; следующим
            поколениям и&nbsp;тем самым внести вклад в&nbsp;то, чтобы наши дети
            жили в&nbsp;сложной, интересной, насыщенной тысячами оттенков
            и&nbsp;укоренённой в&nbsp;веках культуре.
          </p>
        </div>
      </section>
      <SectionSpace />
    </>
  );
};

export default WriteSection;
