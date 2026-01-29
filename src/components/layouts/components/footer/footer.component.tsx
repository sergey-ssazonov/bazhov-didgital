import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import LogoWhite from '@/public/images/logo-white.svg';
import Navigation from '../navigation';
import { ArrowUpOutlined } from '@ant-design/icons';
import FondLogoImg from '@/public/images/about/logo-fond.png';

const Footer: FC = () => {
  return (
    <footer className="bg-blackPrimary section-px section-mx-neg py-8">
      <div className="flex justify-between gap-10 max-sm:flex-col items-center">
        <Link href="/">
          <div className="flex-shrink-0 z-[101]">
            <Image
              src={LogoWhite.src}
              width={160}
              height={40}
              alt="Логотип сайта Бажов Цифровой"
              priority
            />
          </div>
        </Link>
        <Navigation
          variant="flat"
          className="gap-5 max-sm:flex-col  text-xl"
          classNameItem="text-white hover:text-greenPrimary"
        />
      </div>

      <div className="flex items-center self-start gap-3 max-sm:flex-col max-sm:items-start mt-20">
        <Image
          src={FondLogoImg.src}
          alt="Президентского фонда культурных инициатив"
          height={50}
          width={200}
        />
        <p className="text-white">
          Проект реализуется при поддержке Президентского фонда культурных
          инициатив
          <br />
          заявка &#8470;ПФКИ-25-1-011059
        </p>
      </div>

      <div className="border-t border-greyPrimary flex flex-col gap-5 sm:gap-2 text-white pt-8 mt-8">
        <Link
          href="https://shulginadesign.ru/"
          className="hover:text-greenPrimary block "
          target="_blank"
        >
          <span className="underline">
            Дизайн сайта дизайн разработан в&nbsp;рамках проектного обучения
            УрФУ магистрантами направления &laquo;Цифровая
            гуманитаристика&raquo;
          </span>
          <ArrowUpOutlined style={{ transform: 'rotate(45deg)' }} />
        </Link>
        <Link
          href="https://imap66.ru/"
          className="hover:text-greenPrimary block underline"
          target="_blank"
        >
          <span className="underline">Разработка сайта</span>
          <ArrowUpOutlined style={{ transform: 'rotate(45deg)' }} />
        </Link>
        <div>© {new Date().getFullYear()} Бажовский словарь</div>
      </div>
    </footer>
  );
};

export default Footer;
