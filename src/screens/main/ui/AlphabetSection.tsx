import { Button, Flex } from "antd";
import React, { Dispatch, FC, SetStateAction } from "react";
import { getWordsByFirstLetter } from "../api/getWords";
import { IWord } from "@/src/shared/types/Word";

interface IAlphabetProps {
  setWords: Dispatch<SetStateAction<IWord[]>>;
}

const AlphabetSection: FC<IAlphabetProps> = ({ setWords }) => {
  const ALPHABET_DATA: string = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

  const fetchWords = async (letter: string) => {
    try {
      const result = await getWordsByFirstLetter(letter);
      setWords(result);
    } catch (err) {
      // setError('Не удалось загрузить слова');
      console.error(err);
    }
  };

  return (
    <section className="p-9 bg-white rounded-3xl flex flex-col items-center gap-4">
      <h2 className="text-2xl">Поиск по алфавиту</h2>

      <Flex wrap gap={10}>
        {ALPHABET_DATA.split("").map((letter, i) => (
          <Button
            key={i}
            type="primary"
            shape="round"
            onClick={() => fetchWords(letter)}
          >
            {letter}
          </Button>
        ))}
      </Flex>
    </section>
  );
};

export default AlphabetSection;
