import { PropsWithChildren } from 'react';

export default function SearchLayout({ children }: PropsWithChildren) {
  return (
    <section className="lg:pt-12 pt-8 flex flex-col lg:gap-12 gap-8">
      {children}
    </section>
  );
}
