import styled from 'styled-components';
import { motion } from 'framer-motion';

// GENERAL
export const ClearFilter = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      x: -20,
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
  margin-bottom: 1rem;
  text-align: right;

  @media ${({ theme }) => theme.responsive.below1199} {
    text-align: left;
  }
`;

export const ClearFilterButton = styled.button`
  font-size: 1.2rem;
  color: ${({ theme }) => `rgba(${theme.colors.secondary.rgb}, 0.9)`};
  background: none;
  appearance: none;
  padding: 0.4rem 0.8rem;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 0.4rem 0.5rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.15rem;
  }
`;

export const SidebarContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      margin-bottom: 1.5rem;
    }
  }
`;

export const SidebarTitle = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.5,
      },
    },
  },
}))`
  margin-bottom: 1rem;

  & h3 {
    font-size: 2rem;

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.7rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 1.65rem;
    }
  }
`;

export const SidebarList = styled.ul`
  color: ${({ theme }) => theme.colors.secondary.hex};

  @media ${({ theme }) => theme.responsive.below1199} {
    display: flex;
    flex-wrap: wrap;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
