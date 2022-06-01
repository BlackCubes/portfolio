import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainerStyle = styled(motion.div).attrs(() => ({
  animate: 'animate',
  exit: 'exit',
  initial: 'initial',
  transition: {
    duration: 1,
    ease: 'easeOut',
  },
}))`
  &.article-detail-page,
  &.article-list-page {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media ${({ theme }) => theme.responsive.below1199} {
      display: block;
    }
  }

  &.landing-list-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
