import Image from 'next/image';
import React, { FC } from 'react';
import NotFoundImg from '@/public/images/not-found-img.png';
import Link from 'next/link';
import { Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const NotFoundPage: FC = () => {
  return (
    <div>
      {/* <SearchWidget placeholder="Поиск по слову" shouldRedirect /> */}

      <section className="w-dvw bg-greenDark absolute left-0 top-1/4 h-96 flex items-center justify-center">
        <div>
          <h1 className="text-[140px] leading-none font-druzhok text-white ">
            404
          </h1>
          <p className="text-xl text-white text-center">Страница не найдена</p>
          <div className="mt-16 text-center">
            <Link href="/">
              <Button
                iconPosition="end"
                type="primary"
                size="large"
                icon={
                  <ArrowUpOutlined
                    style={{ transform: 'rotate(45deg)', fontSize: '16px' }}
                  />
                }
              >
                На главную
              </Button>
            </Link>
          </div>
        </div>
        <figure className="relative self-end h-3/4 aspect-[1.5] hidden md:block">
          <Image src={NotFoundImg.src} alt="П.П.Бажов" fill />
        </figure>
      </section>
    </div>
  );
};

export default NotFoundPage;
