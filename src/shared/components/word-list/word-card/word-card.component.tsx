import React, { FC } from "react";
import { TWord } from "./word-card.type";

type TWordCardProps = TWord;

const WordCard: FC<TWordCardProps> = ({ word, description, example }) => {
  return (
    <div className="grid grid-cols-[416px_1fr]">
      <h2 className="text-greenPrimary text-3xl block ">{word} &mdash;</h2>
      <p className="text-xl">{description}</p>
      <div />
      <div>
        <span className="font-druzhok uppercase text-3xl text-greenDeep block">
          пример
        </span>
        <p className="text-xl">{example}</p>
      </div>
    </div>
  );
};

export default WordCard;
