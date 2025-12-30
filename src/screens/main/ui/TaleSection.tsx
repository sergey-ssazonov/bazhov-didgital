"use client";

import { ITale } from "@/src/shared/types/Tale";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getTales } from "../api/getTales";

import { Flex } from "antd";
import { IWord } from "@/src/shared/types/Word";
import { getWordsByTale } from "../api/getWords";

interface ITalesProps {
  setWords: Dispatch<SetStateAction<IWord[]>>;
}

const TaleSection: FC<ITalesProps> = ({ setWords }) => {
  const [tales, setTales] = useState<ITale[]>([]);

  useEffect(() => {
    const fetchTales = async () => {
      try {
        const result = await getTales();
        setTales(result);
      } catch (err) {
        console.log(err);
        // setError('Failed to fetch tales');
      }
    };
    fetchTales();
  }, []);

  const fetchWords = async (taleId: number) => {
    try {
      const result = await getWordsByTale(taleId);
      setWords(result);
    } catch (err) {
      // setError('Не удалось загрузить слова');
      console.error(err);
    }
  };

  return (
    <section className="p-9 bg-white rounded-3xl flex flex-col items-center gap-4 h-full">
      <h2 className="text-2xl">Поиск по сказу</h2>

      <Flex vertical gap={8}>
        {tales.map((tale, index) => (
          <li
            className="text-primaryGreen hover:cursor-pointer hover:opacity-70 hover:text-primaryGreen"
            key={index}
          >
            <span
              className="text-xl font-medium"
              onClick={() => fetchWords(tale.id)}
            >
              {tale.title}
            </span>
          </li>
        ))}
      </Flex>
    </section>
  );
};

export default TaleSection;
