import { LoadingOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import React from "react";

const Loading = () => {
  return (
    <Flex className="h-screen" align="center" justify="center">
      {/* <Spin size="large" /> */}
      <LoadingOutlined spin size={60} />
    </Flex>
  );
};

export default Loading;
