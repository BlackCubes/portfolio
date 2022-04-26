import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoryItemContainer = styled.li`
  list-style: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      margin-bottom: 1.5rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-right: 1rem;
  }
`;

export const CategoryName = styled(motion.span).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.5,
      },
    },
  },
}))`
  font-size: 1.4rem;
  font-style: normal;
  text-decoration: none;
  text-transform: capitalize;

  &.checked {
    font-style: italic;
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 1.35rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.25rem;
  }
`;
