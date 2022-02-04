import styled from 'styled-components';

const HeadingPrimary = styled.h1`
  font-size: ${(props) => props.theme.fonts.headingPrimary};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export default HeadingPrimary;
