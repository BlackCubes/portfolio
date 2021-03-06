import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div).attrs(() => ({
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
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

export const ImageWrapper = styled.div`
  width: 50rem;
  margin-bottom: 5rem;

  @media ${({ theme }) => theme.responsive.below899} {
    width: 40rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    width: 90%;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    width: 95%;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    width: 100%;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  width: 50rem;
  margin-bottom: 5rem;
  text-align: center;

  & p {
    font-size: ${({ theme }) => theme.fonts.headingSecondary};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.hex};

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 2.7rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 2.5rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 2.3rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 2rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    width: 40rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    width: 90%;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    width: 95%;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    width: 100%;
  }
`;

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary.hex};
  background-color: transparent;
  padding: 0.7rem;
  border-top: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0)`};
  border-right: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0)`};
  border-bottom: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0)`};
  border-left: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0)`};
  border-radius: 1rem;
  text-decoration: none;
  transition: all 0.05s linear;

  &:hover {
    color: ${({ theme }) => `rgba(${theme.colors.secondary.rgb}, 0.6)`};
    border-top: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-right: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-bottom: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-left: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    cursor: pointer;

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.79rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.59rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.49rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 1.39rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 1.9rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 1.7rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.5rem;
  }
`;
