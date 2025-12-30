"use client";

import { AlphabetSearch } from "@/src/widgets/alphabetSearch";
import { MainSearch } from "@/src/widgets/mainSearch";
import { SearchTales } from "@/src/widgets/searchTales";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const MainPageContent = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "1";

  return (
    <>
      {activeTab === "1" && (
        <div className="flex flex-col gap-[120px]">
          <MainSearch />
          <SearchTales />
          <AlphabetSearch />
        </div>
      )}
      {activeTab === "2" && <h1>Вариант2</h1>}
      {activeTab === "3" && <h1>Вариант3</h1>}
      {activeTab === "4" && <h1>Вариант4</h1>}
      {activeTab === "5" && <h1>Вариант5</h1>}
    </>
  );
};

const MainPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainPageContent />
    </Suspense>
  );
};

export default MainPage;
