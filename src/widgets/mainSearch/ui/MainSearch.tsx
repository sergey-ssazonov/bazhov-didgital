import { TypewriterBlock } from "@/src/features/typeWriter";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

const MainSearch: FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleSearch = (q: string) => {
    if (!q.trim()) return;
    router.push(`/?tab=2&q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <section className="mt-24 flex flex-col items-center">
      <h1 className="xl:text-[74px] lg:text-[64px] md:text-[44px] sm:text-4xl text-3xl font-bukvoglot text-center">
        <span className="font-druzhok text-greenPrimary">Бажовский</span> сло
        <span className="font-sans font-semibold">в</span>арь
      </h1>
      <div className="w-full h-8" />
      <TypewriterBlock />
      <div className="flex gap-4 mt-16  max-lg:hidden">
        <Input
          placeholder="Поиск по слову"
          style={{ width: 520 }}
          suffix={<SearchOutlined />}
          size="large"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // onPressEnter={() => handleSearch(query)}
        />
        <Button size="large" type="primary" onClick={() => handleSearch(query)}>
          Найти
        </Button>
      </div>
    </section>
  );
};

export default MainSearch;
