import styled from 'styled-components';

const Button = styled.button.attrs(() => ({
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

export const PaginationList = styled.div`
  display: flex;
`;

export const PaginationWrapper = styled.div``;

export const PaginationNumberButton = styled(Button)``;

export const PaginationCurrentNumber = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => `rgba(${theme.colors.secondary.rgb}, 0.6)`};
  padding: 0.7rem;
  border-top: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
  border-right: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
  border-bottom: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
  border-left: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
  border-radius: 1rem;

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

export const PaginationNextPrevButton = styled(Button)`
  &:hover span {
    border: solid ${({ theme }) => `rgba(${theme.colors.secondary.rgb}, 0.6)`};
    border-width: 0 0.3rem 0.3rem 0;
    border-radius: 0.1rem;
  }
`;

export const PaginationNextPrevArrow = styled.span`
  display: inline-block;
  border: solid ${({ theme }) => theme.colors.secondary.hex};
  border-width: 0 0.3rem 0.3rem 0;
  border-radius: 0.1rem;
  padding: 0.3rem;

  &.prev-arrow {
    margin: 0 -0.3rem 0.3rem 0; /* THIS IS TO KEEP IT AT THE CENTER DUE TO PADDING */
    transform: rotate(135deg);
  }

  &.next-arrow {
    margin: 0 0.3rem 0.3rem 0;
    transform: rotate(-45deg);
  }
`;
