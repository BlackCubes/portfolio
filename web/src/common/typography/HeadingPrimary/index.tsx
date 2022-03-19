import styled from 'styled-components';

interface IHeadingPrimary {
  opacity?: number;
}

const HeadingPrimary = styled.h1<IHeadingPrimary>`
  font-size: ${({ theme }) => theme.fonts.headingPrimary};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.hex};

  ${({ opacity }) => opacity && `opacity: ${opacity};`}

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 3.3rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    font-size: 2.7rem;
  }
`;

export default HeadingPrimary;
