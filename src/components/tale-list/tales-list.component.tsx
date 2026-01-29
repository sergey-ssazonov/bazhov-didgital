import { TTale } from '@/src/shared/lib/models/tale.model';
import Image from 'next/image';
import React, { FC } from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

type TTalesListProps = {
  tales: TTale[];
  isPreview?: boolean;
};

const TalesList: FC<TTalesListProps> = ({ isPreview, tales }) => {
  const visibleTales = isPreview ? tales.slice(0, 6) : tales;

  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-2 md:grid-cols-3 ">
        {visibleTales.map((tale) => (
          <Link key={tale.slug} href={`/search/tale/${tale.slug}`}>
            <figure className="lg:p-6 p-4 border border-greySecondary hover:bg-greenSecondary hover:text-greenPrimary ">
              <div className="relative w-full aspect-[0.875] overflow-hidden">
                {tale.taleImage && (
                  <Image
                    src={tale.taleImage.link}
                    alt={tale.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 480px) 50vw, 30vw"
                  />
                )}
              </div>
              <figcaption className="mt-4 md:text-xl font-semibold">
                {tale.name}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
      {isPreview && (
        <div className="mx-auto w-fit mt-4 md:mt-5 lg:mt-8">
          <Link href="/search/tale">
            <Button
              iconPosition="end"
              type="text"
              style={{ color: '#10790C' }}
              icon={
                <ArrowUpOutlined
                  style={{ color: '#10790C', transform: 'rotate(45deg)' }}
                />
              }
            >
              Все сказы
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TalesList;
