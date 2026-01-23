'use client';

import { FC } from 'react';
import Typewriter from 'typewriter-effect';

const phrases: string[] = [
  'Абы — лишь бы, только бы.',
  'Прошенье написать, пробу смыть, знаки оглядеть асе.',
  'По совести, не по лукавству.',
  'Времени отпущено — не в долг, а в счёт.',
  'Сделал — не хвались, не сделал — не оправдывайся.',
  'Не словами сильны, а делом верны.',
  'Не всякая тропа ведёт к свету, да вся оставляет след.',
  'Мыслю чисто — значит делаю прочно.',
  'Начал — не забудь, зачем начал.',
  'Прежде понять, потом решить, после — отвечать.',
];

const PAUSE_MS = 10_000;

const TypewriterBlock: FC = () => {
  return (
    <div className="lg:text-[32px] md:text-2xl sm:text-xl font-semibold mt-6 lg:mt-8 mb-12 lg:mb-16">
      <Typewriter
        options={{
          delay: 70,
          deleteSpeed: 40,
          cursor: '|',
        }}
        onInit={(tw) => {
          const run = () => {
            phrases.forEach((text) => {
              tw.typeString(text)
                .pauseFor(PAUSE_MS)
                .deleteAll(40);
            });

            tw.callFunction(() => run());
          };

          run();
          tw.start();
        }}
      />
    </div>
  );
};

export default TypewriterBlock;
