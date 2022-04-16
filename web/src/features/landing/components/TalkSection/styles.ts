import styled from 'styled-components';
import { motion } from 'framer-motion';

// TALK SECTION
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
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  padding-top: 4rem;

  @media ${({ theme }) => theme.responsive.below899} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-top: 1rem;
  }
`;

// TALK CONTAINER
export const TalkContainerStyle = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media ${({ theme }) => theme.responsive.below899} {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-bottom: 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    padding-top: 3rem;
  }
`;

export const TalkDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &.reverse {
    flex-direction: column-reverse;
    padding-top: 10rem;

    @media ${({ theme }) => theme.responsive.below899} {
      padding-top: 0;
    }
  }
`;

export const TalkImageWrapper = styled(motion.div).attrs(({ className }) => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      x: className?.includes('reverse') ? 100 : -100,
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
  margin-bottom: 2rem;

  &.reverse {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export const TalkImageLink = styled.a``;

export const TalkTitle = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
}))``;

export const TalkTitleLink = styled.a`
  padding-left: 7rem;
  padding-right: 7rem;
  text-decoration: none;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
