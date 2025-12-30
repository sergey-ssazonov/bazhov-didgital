import { ConfigProvider } from "antd";
import React from "react";
import { themeAntd } from "./theme";
import ru_RU from "antd/locale/ru_RU";

const ConfigProviderAntd = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider locale={ru_RU} theme={themeAntd}>
      {children}
    </ConfigProvider>
  );
};

export default ConfigProviderAntd;
