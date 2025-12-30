"use client";

import { SectionTitle } from "@/src/shared/components/SectionTitle";
import { ALPHABET_DATA } from "@/src/shared/data/constants/alphabet.data";
import React from "react";

const AlphabetSearch = () => {
  // const router = useRouter();
  // const handleLetterClick = (letter: string) => {
  //   router.push(`/?tab=4&letter=${letter}`);
  // };

  return (
    <section>
      <SectionTitle>алфавиту</SectionTitle>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 mt-10 mb-6">
        {ALPHABET_DATA.split("").map((letter, index) => (
          <div
            key={index}
            className="flex justify-center items-center text-[64px] font-druzhok border h-36 w-full border-greySecondary 
           text-center transition-all duration-200 cursor-pointer 
           hover:bg-greenSecondary hover:text-greenPrimary "
            // onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlphabetSearch;
