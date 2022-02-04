import styled from 'styled-components';

interface IHeadingPrimary {
  opacity?: number;
}

const HeadingPrimary = styled.h1<IHeadingPrimary>`
  font-size: ${(props) => props.theme.fonts.headingPrimary};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};

  ${({ opacity }) => opacity && `opacity: ${opacity};`}
`;

export default HeadingPrimary;
