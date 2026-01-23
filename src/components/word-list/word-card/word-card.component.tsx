import React, { FC } from 'react';
import { Word } from '@/src/shared/lib/models/word.model';
import Ellipse from '../../ellipse';
import parse from 'html-react-parser';

const WordCard: FC<Word> = ({ word, description, exampleText, tale }) => {
  return (
    <div className="lg:grid lg:grid-cols-[416px_1fr] md:text-xl border-b border-greySecondary last:border-b-0 pb-6">
      <h2 className="text-greenPrimary md:text-3xl text-xl block md:inline">
        {word}&nbsp;&mdash;&nbsp;
      </h2>
      <p className="block md:inline">{description}</p>

      <div className="mt-4" />
      <div className="bg-paper mt-4 md:p-6 p-3 flex flex-col gap-2 rounded-[20px]  lg:w-[480px] w-full justify-self-end">
        <span className="font-druzhok lg:text-3xl text-2xl text-greenDeep block">
          пример
        </span>
        <div suppressHydrationWarning>{parse(exampleText)}</div>
        <div className="flex justify-end">
          <Ellipse variant="flat">{`#${tale.name}`}</Ellipse>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
