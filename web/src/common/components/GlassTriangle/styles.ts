import styled from 'styled-components';

export const GlassContainer = styled.div`
  width: 15rem;
  height: 15rem;
  filter: ${(props) =>
    `drop-shadow(-0.1rem -0.1rem 0 rgba(${props.theme.colors.glassLightShadow.rgb}, 0.17)) 
    drop-shadow(0.1rem 0.1rem 0 rgba(${props.theme.colors.glassDarkShadow.rgb}, 0.27))`};
`;

export const GlassInnerContainer = styled.div`
  background-color: ${(props) => `rgba(${props.theme.colors.glass.rgb}, 0.17)`};
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
`;

export const GlassImageWrapper = styled.div``;

export const GlassImage = styled.img``;
