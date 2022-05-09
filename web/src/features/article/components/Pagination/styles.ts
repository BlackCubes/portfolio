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
  margin-top: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-right: 0;
    padding-left: 0;
  }
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

export const PaginationOtherNumbers = styled(PaginationCurrentNumber)``;

export const PaginationNextPrevButton = styled(Button)`
  &:hover svg {
    fill: ${({ theme }) => `rgba(${theme.colors.secondary.rgb}, 0.6)`};
  }
`;

export const NextPrevArrowSvg = styled.svg.attrs(() => ({
  height: '12',
  viewBox: '0 0 6 12',
  width: '6',
}))`
  fill: ${({ theme }) => theme.colors.secondary.hex};

  &.next-arrow {
    transform: rotate(180deg);
  }
`;

export const NextPrevArrowPath = styled.path.attrs(() => ({
  d: 'M6 11.5 1.5 6 6 .5 5.5 0 0 5.75v.5L5.5 12l.5-.5Z',
}))``;
