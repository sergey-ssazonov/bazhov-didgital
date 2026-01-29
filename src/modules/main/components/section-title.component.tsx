import React, { FC } from 'react';

type TSectionTitleProps = {
  children: string;
};

const SectionTitle: FC<TSectionTitleProps> = ({ children }) => {
  return (
    <h2 className="font-druzhok text-6xl lg:mb-8 md:mb-5 mb-4">
      Поиск{' '}
      <span className="font-sans text-7xl">
        по <span className="text-greenPrimary">{children}</span>
      </span>
    </h2>
  );
};

export default SectionTitle;
