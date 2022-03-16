import styled from 'styled-components';

interface IHeadingTertiary {
  opacity?: number;
  textDecoration?: string;
}

const HeadingTertiary = styled.h3<IHeadingTertiary>`
  font-size: ${(props) => props.theme.fonts.headingTertiary};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.hex};

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 2.3rem;
  }

  ${({ opacity }) => opacity && `opacity: ${opacity};`}

  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration};`}
`;

export default HeadingTertiary;
