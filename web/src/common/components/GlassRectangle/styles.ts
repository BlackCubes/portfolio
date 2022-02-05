import styled from 'styled-components';

interface IGlassImageWrapper {
  opacity?: number;
}

export const GlassContainer = styled.div`
  padding: 2rem;
`;

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  width: 35.5rem;

  ${({ opacity }) => opacity && `opacity: ${opacity};`}
`;

export const GlassImage = styled.img`
  width: 100%;
`;
