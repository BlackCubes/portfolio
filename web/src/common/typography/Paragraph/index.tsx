import styled from 'styled-components';

interface IParagraph {
  opacity?: number;
}

const Paragraph = styled.p<IParagraph>`
  font-size: ${(props) => props.theme.fonts.paragraph};
  font-weight: 400;
  color: ${(props) => props.theme.colors.secondary.hex};

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 1.55rem;
  }

  ${({ opacity }) => opacity && `opacity: ${opacity};`}
`;

export default Paragraph;
