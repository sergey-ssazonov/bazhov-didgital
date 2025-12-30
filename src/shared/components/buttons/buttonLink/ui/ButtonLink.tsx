"use client";

import { Button, ButtonProps } from "antd";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type TTarget = "_blank" | "_self";

interface IButtonLinkProps extends ButtonProps {
  href?: string;
  target?: TTarget;
  backButton?: boolean;
}

const ButtonLink: FC<IButtonLinkProps> = ({
  href,
  target = "_self",
  backButton,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (target === "_blank") window.open(href, "_blank");
    else router.push(href ? href : "/");
  };

  const handleClickBack = () => {
    router.back();
  };
  return (
    <Button
      size="large"
      shape="round"
      type="primary"
      onClick={backButton ? handleClickBack : handleClick}
      {...props}
    />
  );
};

export default ButtonLink;
