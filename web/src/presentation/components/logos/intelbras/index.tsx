import { FC } from 'react';
import Image from 'next/image';

import IntelbrasLogoSVG from '../../assets/logos/intelbras.svg';
import { IntelbrasLogoProps } from './types';

export const IntelbrasLogo: FC<IntelbrasLogoProps> = (props) => {
  const { className, size } = props;

  if (size === 'small') {
    return (
      <Image
        className={className}
        src={IntelbrasLogoSVG}
        alt="intelbras"
        height={24}
      />
    );
  }

  return <Image className={className} src={IntelbrasLogoSVG} alt="intelbras" />;
};
