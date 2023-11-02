import { ReactNode } from 'react';

interface Props {
  variant: 'won' | 'lost';
  children: ReactNode;
}

const Banner = ({ variant, children }: Props) => {
  return <div className={`${variant} banner`}>{children}</div>;
};

export default Banner;
