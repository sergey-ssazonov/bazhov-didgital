import React, { FC, ReactNode, MouseEvent } from 'react';

interface ClickableProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

/**
 * Универсальный кликабельный компонент.
 * Использует <button> для доступности, но можно кастомизировать стили.
 */
const Clickable: FC<ClickableProps> = ({
  children,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Clickable;
