import styled from 'styled-components';

interface IGlassImageWrapper {
  opacity?: number;
}

export const GlassContainer = styled.div`
  display: flex;
  align-items: center;
  width: 15rem;
  height: 15rem;
  background-color: ${(props) => `rgba(${props.theme.colors.glass.rgb}, 0.17)`};
  border-radius: 2rem;
  box-shadow: ${(props) => `
  -0.1rem -0.1rem 0 0 rgba(${props.theme.colors.glassLightShadow.rgb}, 0.17),
  0.1rem 0.1rem 0 0 rgba(${props.theme.colors.glassDarkShadow.rgb}, 0.27)`};
`;

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  width: 12rem;
  margin-left: auto;
  margin-right: auto;

  ${({ opacity }) => opacity && `opacity: ${opacity};`}
`;

export const GlassImage = styled.img`
  width: 100%;
`;
