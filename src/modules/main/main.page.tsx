"use client";

import DemoVersion from "@/src/shared/components/demo/demo.provider";
import { AlphabetSearch } from "@/src/widgets/alphabetSearch";
import { MainSearch } from "@/src/widgets/mainSearch";
import { SearchTales } from "@/src/widgets/searchTales";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <div className="flex flex-col gap-[120px]">
      <DemoVersion>
        <MainSearch />
        {/* <SectionTitle>сказу</SectionTitle> */}
        <SearchTales />
        <AlphabetSearch />
      </DemoVersion>
    </div>
  );
};

export default MainPage;
