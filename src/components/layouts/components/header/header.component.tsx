'use client';

import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/images/logo.svg';
import LogoMob from '@/public/images/logo-mob.svg';
import Navigation from '../navigation';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="h-16 flex justify-between items-center">
      {/* TODO:  сделать нормальные z index*/}
      <Link href="/">
        <div className="flex-shrink-0 z-[101]">
          <Image
            src={Logo.src}
            width={160}
            height={40}
            alt="Логотип сайта Бажов Цифровой"
            priority
            className="max-sm:hidden"
          />
          <Image
            src={LogoMob.src}
            width={32}
            height={32}
            alt="Логотип сайта Бажов Цифровой"
            priority
            className="sm:hidden"
          />
        </div>
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-grow justify-center">
        <Navigation variant="horizontal" />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-[101]">
        <Button
          size="large"
          type="text"
          icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={toggleMenu}
        />
      </div>
      {/* TODO: сделать анимацию выдвижения */}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full absolute left-0 top-0 z-[100] bg-whiteSecondary flex flex-col items-center pt-16 pb-4">
          <Navigation variant="flat" className="flex-col" />
        </div>
      )}
    </header>
  );
};

export default Header;
