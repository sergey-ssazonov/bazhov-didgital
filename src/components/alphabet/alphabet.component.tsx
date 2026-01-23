import React, { FC } from 'react';
import Link from 'next/link';
import { ALPHABET_DATA } from './alphabet.data';

const Alphabet: FC = () => {
  return (
    <div className="w-full grid grid-cols-4 sm:grid-cols-7 mb-6">
      {ALPHABET_DATA.split('').map((letter, index) => (
        <Link
          key={index}
          href={{ pathname: '/search/letter', query: { letter } }}
          className="flex justify-center items-center xl:text-[64px] lg:text-5xl sm:text-[32px] text-[28px]  font-druzhok border xl:h-36 lg:h-28 h-16 w-full border-greySecondary
            text-center transition-all duration-200 cursor-pointer
            hover:bg-greenSecondary hover:text-greenPrimary"
        >
          {letter}
        </Link>
      ))}
    </div>
  );
};

export default Alphabet;
