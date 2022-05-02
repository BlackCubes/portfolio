import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Work = styled.article`
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${({ theme }) => theme.responsive.below899} {
    max-width: 95%;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    max-width: 93%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const WorkAdditionalInfo = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const WorkCategory = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
}))`
  position: relative;
  text-transform: uppercase;
  margin-right: 0.5rem;

  & p {
    font-size: 1.3rem;
    letter-spacing: 0.06rem;
  }
`;

export const WorkTitle = styled(motion.div).attrs(() => ({
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
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const WorkCompany = styled(motion.div).attrs(() => ({
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
}))``;

export const WorkDate = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      y: 10,
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
  margin-right: 1.5rem;

  & p {
    font-size: 1.3rem;
  }
`;

export const WorkAppWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const WorkAppLink = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary.hex};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
`;

export const WorkDescription = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
}))`
  max-width: 54rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  & p {
    font-size: 1.8rem;
    line-height: 1.55;

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.75rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.7rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.65rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 1.6rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below479} {
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const WorkMainImage = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
}))`
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.responsive.below379} {
    width: 107%;
    transform: translateX(-0.7rem);
  }
`;

export const WorkBodyContainer = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
}))`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 2rem;
  }
`;
