import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// PERSONAL LIST
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

// PERSONAL CONTAINER
export const PersonalContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9rem;
  margin-bottom: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media ${({ theme }) => theme.responsive.below899} {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-right: 5rem;
    padding-left: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    margin-top: 5rem;
    margin-bottom: 2rem;
    padding-top: 0;
    padding-right: 1rem;
    padding-bottom: 0;
    padding-left: 1rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    margin-top: 4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const PersonalDescription = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
    },
  },
}))`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
  text-align: right;

  @media ${({ theme }) => theme.responsive.below899} {
    display: block;
    text-align: center;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    padding: 1rem 0.5rem;
  }
`;

export const PersonalImageWrapper = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      y: -100,
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
  & img {
    width: 60%;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const PersonalLink = styled(Link)``;

export const PersonalTitle = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
    },
  },
}))`
  display: flex;
  align-items: center;
  width: 40%;
  padding-left: 1rem;

  @media ${({ theme }) => theme.responsive.below899} {
    display: block;
    width: 100%;
    padding-left: 0;
    text-align: center;
  }
`;
