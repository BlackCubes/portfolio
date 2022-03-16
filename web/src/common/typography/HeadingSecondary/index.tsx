import styled from 'styled-components';

interface IHeadingSecondary {
  letterSpacing?: number;
  opacity?: number;
}

const HeadingSecondary = styled.h2<IHeadingSecondary>`
  font-size: ${(props) => props.theme.fonts.headingSecondary};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.hex};

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 2.7rem;
  }

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}rem;`}

  ${({ opacity }) => opacity && `opacity: ${opacity};`}
`;

export default HeadingSecondary;
