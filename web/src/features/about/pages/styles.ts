import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled(motion.div).attrs(() => ({
  animate: 'animate',
  exit: 'exit',
  initial: 'initial',
  key: 'about-list',
  transition: {
    duration: 1,
    ease: 'easeOut',
  },
  variants: {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: '-100%',
      transition: { duration: 0.3 },
    },
  },
}))``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  width: 50%;
`;
