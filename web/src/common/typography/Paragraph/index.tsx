import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fonts.paragraph};
  font-weight: 400;
  color: ${(props) => props.theme.colors.secondary};
`;

export default Paragraph;
