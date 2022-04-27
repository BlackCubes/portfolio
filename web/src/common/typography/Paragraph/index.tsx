import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IParagraph {
  opacity?: number;
}

const Paragraph = styled(motion.p)<IParagraph>`
  font-size: ${({ theme }) => theme.fonts.paragraph};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary.hex};

  ${({ opacity }) => opacity && `opacity: ${opacity};`}

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 1.55rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 1.5rem;
  }
`;

export default Paragraph;
