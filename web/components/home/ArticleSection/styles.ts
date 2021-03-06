import styled from 'styled-components';
import { motion } from 'framer-motion';

// ARTICLE SECTION
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
}))``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-top: 2.5rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    padding-top: 2.3rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-top: 1rem;
  }
`;

export const Introduction = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
}))`
  text-align: center;
  padding: 5rem 15rem;

  @media ${({ theme }) => theme.responsive.below899} {
    padding: 5rem 8rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    padding: 5rem 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 5rem 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    padding: 4rem 1rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'article1 article1'
    'article2 article3';
  margin-bottom: 10rem;

  @media ${({ theme }) => theme.responsive.below899} {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    display: flex;
    flex-direction: column;
  }
`;

export const ExploreMoreWrapper = styled(motion.div).attrs(() => ({
  variants: {
    visible: {
      rotate: [0, 15, 7.5, 15, 0],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
      },
    },
  },
}))`
  margin-top: 10rem;
  text-align: center;

  @media ${({ theme }) => theme.responsive.below599} {
    margin-top: 6rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    margin-top: 3rem;
  }
`;

export const ExploreMoreLink = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.9;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    font-size: 1.7rem;
  }
`;

// ARTICLE CONTAINER
export const ArticleContainerStyle = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;

  &.article1 {
    position: relative;
    grid-area: article1;
  }

  &.article2 {
    position: relative;
    grid-area: article2;
    padding-left: 15rem;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 36rem;
      height: 0.2rem;
      background-color: ${({ theme }) =>
        `rgba(${theme.colors.primary.rgb}, 0.5)`};

      @media ${({ theme }) => theme.responsive.below899} {
        content: none;
      }
    }

    &:before {
      top: -4.7rem;
      left: 24.1rem;
      transform: rotate(40deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        left: 5.7rem;
      }
    }

    &:after {
      bottom: 5.4rem;
      left: 38rem;
      transform: rotate(90deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        left: 19.5rem;
      }
    }

    @media ${({ theme }) => theme.responsive.below899} {
      padding-left: 3rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-left: 2rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      padding-bottom: 3rem;
      padding-left: 0;
    }
  }

  &.article3 {
    position: relative;
    grid-area: article3;
    padding-right: 15rem;

    &:before {
      content: '';
      position: absolute;
      top: -4.7rem;
      right: 24.1rem;
      width: 36rem;
      height: 0.2rem;
      background-color: ${({ theme }) =>
        `rgba(${theme.colors.primary.rgb}, 0.5)`};
      transform: rotate(-40deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        right: 5.7rem;
      }

      @media ${({ theme }) => theme.responsive.below899} {
        content: none;
      }
    }

    @media ${({ theme }) => theme.responsive.below899} {
      padding-right: 3rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      padding-top: 2rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      padding-right: 0;
      padding-bottom: 3rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below599} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-bottom: 3rem;
  }
`;

export const ArticleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleImageWrapper = styled(motion.div).attrs(
  ({ className }) => ({
    initial: 'hidden',
    variants: {
      hidden: {
        opacity: 0,
        rotate: 0,
        scale: 0,
      },
      hovering: {
        rotate: !className?.includes('article2') ? -720 : 720,
        scale: 1.12,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 0.2,
        },
      },
      nonHovering: {
        rotate: 0,
        scale: 1,
      },
      visible: {
        opacity: 1,
        rotate: !className?.includes('article2') ? 720 : -720,
        scale: 1,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 0.5,
        },
      },
    },
  })
)`
  margin-bottom: 2rem;
`;

export const ArticleImageLink = styled.a``;

export const ArticleTitle = styled(motion.div).attrs(() => ({
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

export const ArticleTitleLink = styled.a`
  text-align: center;
  text-decoration: none;

  & h3 {
    max-width: 30.1rem;
    max-height: 3.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;

    @media ${({ theme }) => theme.responsive.below899} {
      max-height: 2.5rem;
    }
  }
`;
