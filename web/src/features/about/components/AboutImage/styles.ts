import styled from 'styled-components';
import { motion } from 'framer-motion';

/* eslint-disable-next-line import/prefer-default-export */
export const ImageWrapper = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
}))`
  margin-top: 5rem;

  @media ${({ theme }) => theme.responsive.below899} {
    margin-top: 0;
  }
`;
