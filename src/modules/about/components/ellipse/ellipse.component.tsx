import React, { FC, PropsWithChildren } from "react";

type TEllipseProps = {
  variant: "flat" | "outlined";
};

const Ellipse: FC<PropsWithChildren<TEllipseProps>> = ({
  variant,
  children,
}) => {
  const isFlat = variant === "flat";

  return (
    <div
      className={`rounded-full px-3 py-2 ${isFlat ? "bg-greenSecondary" : "border border-greenSecondary"}`}
    >
      {children}
    </div>
  );
};

export default Ellipse;
