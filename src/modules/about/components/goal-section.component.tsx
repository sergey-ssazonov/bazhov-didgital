import React, { FC } from 'react';
import Ellipse from '../../../components/ellipse';
import GoalImg from '@/public/images/about/goal-img.jpg';
import Image from 'next/image';
import Title from './title';
import SectionSpace from '../../../components/section-space';

const GoalSection: FC = () => {
  const firstTags: string[] = [
    'Народный язык',
    'Фольклор',
    'История Урала',
    'Литература Урала',
  ];

  const secondTags: string[] = ['Угрузнуть', 'Чернознай', 'Шатало', 'Пимишки'];

  return (
    <>
      <Title>Цель</Title>
      <section className="grid grid-cols-2 border divide-x divide-y border-greySecondary md:text-xl">
        <div className="max-lg:col-span-2 lg:p-6 p-4">
          <p>
            Создание Словаря языка П.П. Бажова позволяет продолжить дело
            писателя, который привлекал внимание общественности к&nbsp;народному
            языку, фольклору, истории и&nbsp;литературе Урала и&nbsp;80&nbsp;лет
            назад, и&nbsp;по&nbsp;сей день.
          </p>
          <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
            {firstTags.map((tag) => (
              <Ellipse key={tag} variant={'outlined'}>
                #{tag}
              </Ellipse>
            ))}
          </div>
        </div>

        <div className="relative max-lg:h-52 max-sm:h-40 h-full max-lg:col-span-2">
          <Image
            src={GoalImg.src}
            alt="Президентского фонда культурных инициатив"
            fill
            className="object-cover"
          />
        </div>

        <div className="lg:p-6 p-4 max-md:col-span-2">
          <p>
            Проект направлен на&nbsp;популяризацию и&nbsp;истолкование для
            широкого круга читателей &laquo;великого русского слова&raquo;
            (точнее, его диалектных &laquo;запасов&raquo; &mdash; слов,
            используемых только на&nbsp;конкретных территориях нашей страны).
          </p>
        </div>

        <div className="max-md:col-span-2 lg:p-6 p-4">
          <p>
            В&nbsp;нашем случае это специфические уральские слова, которые
            не&nbsp;входят в&nbsp;обычные словари, но&nbsp;обладают удивительной
            выразительностью и&nbsp;художественной глубиной.
          </p>
          <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
            {secondTags.map((tag) => (
              <Ellipse key={tag} variant={'flat'}>
                #{tag}
              </Ellipse>
            ))}
          </div>
        </div>
      </section>
      <SectionSpace />
    </>
  );
};

export default GoalSection;
