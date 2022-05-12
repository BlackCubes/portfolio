import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// WORK LIST
export const Section = styled.section``;

export const SectionTitle = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
}))`
  text-align: right;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-top: 2.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-top: 1rem;
  }
`;

// WORK CONTAINER
export const WorkContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-left: 17rem;

  &.reverse {
    flex-direction: row-reverse;
    padding-right: 17rem;
    padding-left: 0;

    @media ${({ theme }) => theme.responsive.below1199} {
      padding-right: 10rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      padding-right: 0;
    }
  }

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-left: 10rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    display: block;
    margin-top: 5rem;
    margin-bottom: 2rem;
    padding-left: 0;
    overflow-x: hidden;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    margin-top: 4rem;
  }
`;

export const WorkImageWrapper = styled(motion.div).attrs(({ className }) => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      x: className?.includes('reverse') ? 100 : -100,
    },
    hovering: {
      scale: 1.05,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.2,
      },
    },
    nonHovering: {
      scale: 1,
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
  @media ${({ theme }) => theme.responsive.below599} {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export const WorkLink = styled(Link)`
  text-decoration: none;
`;
