import { keyframes } from '@vanilla-extract/css';

export const rippleAnimation = keyframes({
  '0%': {
    width: '40%',
    height: '40%',
    display: 'block',
    transform: 'scale(0)',
  },
  '40%': {
    width: '50%',
    height: '100%',
    transform: 'scale(2)',
  },
  '80%': {
    width: '100%',
    height: '100%',
    transform: 'scale(4)',
  },
  '100%': {
    opacity: 0,
    display: 'none',
  },
});

export const smallRippleAnimation = keyframes({
  '0%': {
    width: '40%',
    height: '40%',
    transform: 'scale(0)',
    display: 'block',
  },
  '40%': {
    width: '50%',
    height: '50%',
    transform: 'scale(2)',
  },
  '80%': {
    width: '100%',
    height: '100%',
    transform: 'scale(4)',
  },
  '100%': {
    opacity: 0,
    display: 'none',
  },
});
