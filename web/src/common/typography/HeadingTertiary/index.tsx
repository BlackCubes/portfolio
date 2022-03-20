import styled from 'styled-components';

interface IHeadingTertiary {
  opacity?: number;
  textDecoration?: string;
}

const HeadingTertiary = styled.h3<IHeadingTertiary>`
  font-size: ${({ theme }) => theme.fonts.headingTertiary};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.hex};

  ${({ opacity }) => opacity && `opacity: ${opacity};`}

  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration};`}
  
  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 2.3rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    font-size: 1.7rem;
  }
`;

export default HeadingTertiary;
