"use client";

import React, { FC } from "react";
import { NAVIGATION_ITEMS } from "./navigation.data";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TNavigationProps = {
  variant: "vertical" | "horizontal";
};

const Navigation: FC<TNavigationProps> = ({ variant }) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isHorizontal = variant === "horizontal";

  return (
    <nav className="z-20">
      <ul
        className={`flex ${isHorizontal ? "bg-whiteSecondary  rounded-full p-2 gap-2" : "flex-col"} `}
      >
        {NAVIGATION_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              {isHorizontal ? (
                <span
                  className={` block py-3 xl:px-4 px-3 text-greyPrimary rounded-full transition-all duration-200   ${
                    isActive(item.href)
                      ? "bg-white text-blackPrimary font-bold"
                      : "hover:text-blackPrimary"
                  }`}
                >
                  {item.label}
                </span>
              ) : (
                <span
                  className={`block text-center text-greyPrimary py-3 ${
                    isActive(item.href)
                      ? "text-blackPrimary font-bold"
                      : "hover:text-blackPrimary"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
