// pages/index.tsx (или другой файл, где находится компонент)
"use client";

import { Col, Flex, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import AlphabetSection from "./AlphabetSection";
import TaleSection from "./TaleSection";
import { IWord } from "@/src/shared/types/Word";
import { getWords } from "../api/getWords";

const MainPage = () => {
  const [words, setWords] = useState<IWord[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Стейт для поиска
  const [error, setError] = useState<string | null>(null);

  // Функция для загрузки слов
  const fetchWords = async (query: string) => {
    try {
      const result = await getWords(query);
      setWords(result);
    } catch (err) {
      setError("Не удалось загрузить слова");
      console.error(err);
    }
  };

  console.log(words);

  // Загружаем слова при монтировании компонента и при изменении поискового запроса
  useEffect(() => {
    fetchWords(searchQuery);
  }, [searchQuery]); // Зависимость от searchQuery

  // Обработчик изменения текста в поле поиска
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Flex vertical align="center" gap={15}>
      <h1 className="text-3xl">СЛОВАРЬ ЯЗЫКА П. П. БАЖОВА</h1>
      <Input.Search
        placeholder="поиск"
        value={searchQuery}
        onChange={handleSearchChange}
        enterButton
      />
      {error && <div className="text-red-500">{error}</div>}{" "}
      {/* Показываем ошибку, если она есть */}
      <Row gutter={[20, 20]}>
        <Col xs={24} lg={12}>
          <AlphabetSection setWords={setWords} />
        </Col>
        <Col xs={24} lg={12}>
          <TaleSection setWords={setWords} />
        </Col>
      </Row>
      <section className="p-9 bg-white rounded-3xl flex flex-col items-center gap-4 w-full">
        {/* Здесь выводим список слов */}
        <div className="w-full">
          {words.length > 0 ? (
            <ul>
              {words.map((word) => (
                <li key={word.id} className="text-primaryGreen">
                  {word.word} — {word.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>Нет слов</p>
          )}
        </div>
      </section>
    </Flex>
  );
};
export default MainPage;
