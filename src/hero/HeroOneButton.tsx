import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1
      id="join"
      className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero"
    >
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    <div className="center text-center inline-block">{props.button}</div>
  </header>
);

export { HeroOneButton };
