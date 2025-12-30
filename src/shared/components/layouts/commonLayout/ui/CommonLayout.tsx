/* eslint-disable @next/next/no-head-element */
import React, { FC } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProviderAntd from "@/src/shared/antd/config.provider";
import { MainLayout } from "../../mainLayout";
import TLayout from "@/src/shared/types/layout";

const CommonLayout: FC<Readonly<TLayout>> = ({ children }) => {
  return (
    <html lang="ru">
      {/* <Providers> */}
      <AntdRegistry>
        <ConfigProviderAntd>
          <MainLayout>{children}</MainLayout>
        </ConfigProviderAntd>
      </AntdRegistry>
      {/* </Providers> */}
    </html>
  );
};

export default CommonLayout;
