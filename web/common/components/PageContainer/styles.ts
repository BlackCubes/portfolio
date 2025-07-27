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
  &.article-list-page {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media ${({ theme }) => theme.responsive.below1199} {
      display: block;
    }
  }

  &.article-detail-page {
    overflow-wrap: break-word;
  }

  &.landing-list-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
