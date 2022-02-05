import styled from 'styled-components';

interface IGlassImageWrapper {
  opacity?: number;
}

export const GlassContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.glass};
`;

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  width: 12rem;

  ${({ opacity }) => opacity && `opacity: ${opacity};`}
`;

export const GlassImage = styled.img`
  width: 100%;
`;
