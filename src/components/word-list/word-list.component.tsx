import React, { FC } from 'react';
import WordCard from './word-card';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Word } from '@/src/shared/lib/models/word.model';
import Link from 'next/link';

export type TWordListProps = {
  words: Word[];
  title?: string;
  variant: 'flat' | 'trasparent';
  hrefClose?: string;
};

const WordList: FC<TWordListProps> = ({ words, title, variant, hrefClose }) => {
  const isFlat = variant === 'flat';

  return (
    <div
      className={`w-full ${isFlat ? 'bg-whiteSecondary p-6 rounded-3xl' : 'bg-transparent'}`}
    >
      {isFlat && (
        <div className="flex justify-between lg:mb-6 mb-5">
          {title && (
            <h1
              className={` text-greenPrimary xl:text-[64px] lg:text-5xl sm:text-[32px] text-[28px] ${title.length === 1 && 'font-druzhok text-6xl'}`}
            >
              {title}
            </h1>
          )}
          <Link href={hrefClose ?? '/'}>
            <Button
              type="text"
              size="large"
              icon={<CloseOutlined style={{ fontSize: '21px' }} />}
            />
          </Link>
        </div>
      )}
      {words.length > 0 ? (
        <div className="flex flex-col gap-4">
          {words.map((word) => (
            <WordCard key={word.id} {...word} />
          ))}
        </div>
      ) : (
        <div className="mx-auto text-center font-semibold text-xl">Таких слов не нашли, попробуйте другие</div>
      )}
    </div>
  );
};

export default WordList;
