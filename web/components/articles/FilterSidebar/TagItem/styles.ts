import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TagItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const TagName = styled(motion.span).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: (customDelay) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.5,
        delay: customDelay * 0.1,
      },
    }),
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

export const TagCheckbox = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: (customDelay) => ({
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.5,
        delay: customDelay * 0.1,
      },
    }),
  },
}))`
  height: 1.4rem;
  margin-left: 1rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-left: 0.5rem;
  }
`;

export const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  height: 100%;
  cursor: pointer;

  @media ${({ theme }) => theme.responsive.below479} {
    width: 1.2rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    width: 1.15rem;
  }
`;
