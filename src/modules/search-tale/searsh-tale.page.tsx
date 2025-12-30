// import { ButtonLink } from '@/src/shared/components/buttons/buttonLink';
// import ArrowRightTop from '@/src/shared/components/icons/ArrowRightTop';
// import { SectionTitle } from '@/src/shared/components/SectionTitle';
import React, { FC } from "react";
import TalesList from "./components/tales-list.component";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
// import WordCard from '@/src/shared/components/word-list/word-card/word-card.component';
// import { WORDS_DATA } from '@/src/shared/data/constants/words.data';
import WordList from "@/src/shared/components/word-list";

const SearchTalePage: FC = () => {
  return (
    <section>
      {/* //TODO: вынести в отдельный компонент поиска */}
      <div className="flex gap-4 my-12 justify-center">
        <Input
          placeholder="Поиск по названию сказа"
          style={{ width: 520 }}
          suffix={<SearchOutlined />}
          size="large"
          //   value={query}
          //   onChange={(e) => setQuery(e.target.value)}
          //   onPressEnter={() => handleSearch(query)}
        />
        <Button
          size="large"
          type="primary"
          // onClick={() => handleSearch(query)}
        >
          Найти
        </Button>
      </div>
      {/* <SectionTitle>сказу</SectionTitle> */}
      <TalesList />
      {/* <div className=" mt-10 mb-6">
        <TalesList />
      </div> */}
      {/* <div className="mx-auto w-fit">
        <ButtonLink
          href="?tab=3"
          iconPosition="end"
          type="text"
          color="primary"
          variant="text"
          shape="default"
          style={{ color: '#10790C' }}
          icon={<ArrowRightTop style={{ color: '#10790C' }} />}
        >
          Все сказы
        </ButtonLink>
      </div> */}
      <WordList title="Серебряное копытце" variant="flat" />
    </section>
  );
};

export default SearchTalePage;
