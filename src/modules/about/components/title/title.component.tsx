import React, { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className=" lg:mb-8 md:mb-5 mb-4 xl:text-6xl text-2xl sm:text-[32px] md:text-[40px] lg:text-5xl text-greenPrimary ">
      {children}
    </h2>
  );
};

export default Title;
