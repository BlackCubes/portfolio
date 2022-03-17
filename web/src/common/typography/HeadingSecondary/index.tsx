import styled from 'styled-components';

interface IHeadingSecondary {
  letterSpacing?: number;
  opacity?: number;
}

const HeadingSecondary = styled.h2<IHeadingSecondary>`
  font-size: ${({ theme }) => theme.fonts.headingSecondary};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.hex};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}rem;`}

  ${({ opacity }) => opacity && `opacity: ${opacity};`}

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 2.7rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 2.5rem;
  }
`;

export default HeadingSecondary;
