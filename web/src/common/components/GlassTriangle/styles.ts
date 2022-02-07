import styled from 'styled-components';

export const GlassContainer = styled.div`
  width: 30rem;
  height: 19rem;
  filter: ${(props) =>
    `drop-shadow(-0.1rem -0.1rem 0rem rgba(${props.theme.colors.glassLightShadow.rgb}, 0.17)) 
    drop-shadow(0.1rem 0.1rem 0rem rgba(${props.theme.colors.glassDarkShadow.rgb}, 0.27))`};
`;

export const GlassShape = styled.div`
  width: 30rem;
  height: 19rem;
  clip-path: polygon(
    0% 100%,
    25% 21%,
    21.3% 10%,
    71.7% 10%,
    75.1% 0%,
    100% 78.6%,
    50% 78.6%,
    46.5% 89%,
    50% 100%
  );
  background-color: ${(props) => `rgba(${props.theme.colors.glass.rgb}, 0.17)`};
`;

export const GlassImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const GlassImage = styled.img`
  width: 100%;
`;
