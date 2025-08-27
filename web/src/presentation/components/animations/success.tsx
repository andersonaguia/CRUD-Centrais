import { FC } from 'react';
import Lottie from 'lottie-react';

import LottieSuccessAnimation from '../assets/animations/success.json';
import { AnimationProps } from './types';

export const SuccessAnimation: FC<AnimationProps> = (props) => {
  return <Lottie {...props} animationData={LottieSuccessAnimation} />;
};
