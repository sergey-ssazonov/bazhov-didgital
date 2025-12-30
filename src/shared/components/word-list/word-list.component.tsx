import { WORDS_DATA } from "@/src/shared/data/constants/words.data";
import React, { FC } from "react";
import WordCard from "./word-card";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

type TWordListProps = {
  title?: string;
  variant: "flat" | "trasparent";
};

const WordList: FC<TWordListProps> = ({ title, variant }) => {
  const isFlat = variant === "flat";
  return (
    <div
      className={`${isFlat ? "bg-whiteSecondary p-6 rounded-3xl" : "bg-transparent"}`}
    >
      {isFlat && (
        <div className="flex justify-between">
          {title && (
            <h1
              className={` text-greenPrimary text-4xl ${title.length === 1 && "font-druzhok text-6xl"}`}
            >
              {title}
            </h1>
          )}
          <Button type="text" icon={<CloseOutlined />} />
        </div>
      )}
      {WORDS_DATA.map((word, index) => (
        <WordCard key={index} {...word} />
      ))}
    </div>
  );
};

export default WordList;
