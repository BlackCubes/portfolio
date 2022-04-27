import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Article = styled.article`
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

export const ArticleAdditionalInfo = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  &.article__date-readtime {
    @media ${({ theme }) => theme.responsive.below379} {
      justify-content: space-between;
    }
  }
`;

export const ArticleCategory = styled(motion.div).attrs(() => ({
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

  &.has-tags::after {
    content: '';
    position: absolute;
    top: 0.1rem;
    right: -0.3rem;
    display: block;
    height: 1.5rem;
    border-right: 0.1rem solid ${({ theme }) => theme.colors.primary.hex};
  }

  & p {
    font-size: 1.3rem;
    letter-spacing: 0.06rem;
  }
`;

export const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-style: italic;
  text-transform: lowercase;
  margin-left: 0.1rem;

  & p {
    position: relative;
    font-size: 1.3rem;

    &:not(:last-child) {
      margin-right: 0.7rem;
    }

    &:not(:last-child)::after {
      content: '\\2013';
      position: absolute;
    }
  }
`;

export const ArticleTitle = styled(motion.div).attrs(() => ({
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

export const ArticleAuthor = styled(motion.div).attrs(() => ({
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

export const AuthorTwitterContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const AuthorTwitterIconWrapper = styled(motion.div).attrs(() => ({
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
  width: 1rem;
  margin-right: 0.2rem;
`;

export const AuthorTwitterIcon = styled.img`
  width: 100%;
`;

export const AuthorTwitterLink = styled(motion.a).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
}))`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary.hex};
  text-decoration: none;
`;

export const ArticleDate = styled.div`
  margin-right: 1.5rem;

  & p {
    font-size: 1.3rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    margin-right: 0;
  }
`;

export const ArticleReadTime = styled.div`
  & p {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${({ theme }) => `rgba(${theme.colors.secondary.rgb}, 0.9)`};
  }
`;

export const ArticleDescription = styled.div`
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

export const ArticleHeaderImage = styled.div`
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.responsive.below379} {
    width: 107%;
    transform: translateX(-0.7rem);
  }
`;

export const ArticleBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 2rem;
  }
`;
