import { FC } from 'react';
import Image from 'next/image';

import IntelbrasLogoSVG from '../../assets/logos/intelbras.svg';
import { DefenseLogoProps } from './types';

export const DefenseLogo: FC<DefenseLogoProps> = (props) => {
  const { className, size } = props;

  if (size === 'small')
    return <Image className={className} src={IntelbrasLogoSVG} alt="IA" />;

  if (size === 'large')
    return (
      <Image className={className} src={IntelbrasLogoSVG} alt="Defense IA" />
    );

  return (
    <Image
      className={className}
      src={IntelbrasLogoSVG}
      alt="Intelbras"
      height={54}
    />
  );
};
