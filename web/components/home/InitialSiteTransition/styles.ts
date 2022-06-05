import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div).attrs(() => ({
  variants: {
    animate: {
      opacity: 0,
      transition: { duration: 2 },
    },
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110vh;
  z-index: 999;
`;

export const Wrapper = styled(motion.div).attrs(({ theme }) => ({
  animate: 'animate',
  initial: 'initial',
  variants: {
    animate: {
      backgroundColor: theme.colors.black.hex,
      transition: {
        when: 'afterChildren',
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    initial: {
      backgroundColor: theme.colors.white.hex,
    },
  },
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const Svg = styled(motion.svg).attrs(() => ({
  id: 'Initial_Site_Transition_Layer_1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 550 550',
}))`
  position: absolute;
  transform: scale(0.2);
  z-index: 999;

  @media ${({ theme }) => theme.responsive.below1199} {
    transform: scale(0.25);
  }

  @media ${({ theme }) => theme.responsive.below899} {
    transform: scale(0.3);
  }
`;

export const Defs = styled.defs``;

export const Stop = styled.stop``;

export const LinearGradient1 = styled.linearGradient.attrs(() => ({
  gradientUnits: 'userSpaceOnUse',
  id: 'initial-site-icon-transition-linear-gradient-1',
  x1: '24',
  x2: '506',
  y1: '276',
  y2: '276',
}))``;

export const LinearGradient2 = styled.linearGradient.attrs(() => ({
  gradientUnits: 'userSpaceOnUse',
  id: 'initial-site-icon-transition-linear-gradient-2',
  x1: '23.98',
  x2: '522',
  y1: '276',
  y2: '276',
}))``;

export const Polygon = styled(motion.polygon).attrs(() => ({
  points:
    '506 60.75 506 60.75 502 60.75 502 21.25 502 21.25 502 60.75 225.87 60.75 231.87 54.75 231.87 54.75 225.87 60.75 218 60.75 218 60.75 225.87 60.75 38.13 248.5 38.13 248.5 225.87 60.75 502 60.75 502 316.75 312 316.75 312 254.75 349.5 254.75 312 254.75 312 242.75 312 242.75 312 254.75 24.5 254.75 24.5 254.75 312 254.75 312 316.75 226 316.75 231.87 310.88 231.87 310.88 226 316.75 218 316.75 218 316.75 226 316.75 38.13 504.62 38.13 504.62 226 316.75 312 316.75 312 510.75 24 510.75 24 510.75 312 510.75 312 530.75 312 530.75 312 316.75 502 316.75 502 336.25 502 336.25 502 316.75 506 316.75 506 316.75 502 316.75 502 60.75 506 60.75',
}))`
  fill: url(#initial-site-icon-transition-linear-gradient-1);
  stroke: url(#initial-site-icon-transition-linear-gradient-2);
  stroke-miterlimit: 10;
  stroke-width: 4rem;

  @media ${({ theme }) => theme.responsive.below479} {
    stroke-width: 3.5rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    stroke-width: 3.2rem;
  }
`;
