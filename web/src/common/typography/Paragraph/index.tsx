import styled from 'styled-components';

interface IParagraph {
  opacity?: number;
}

const Paragraph = styled.p<IParagraph>`
  font-size: ${(props) => props.theme.fonts.paragraph};
  font-weight: 400;
  color: ${(props) => props.theme.colors.secondary};

  ${({ opacity }) => opacity && `opacity: ${opacity};`}
`;

export default Paragraph;
