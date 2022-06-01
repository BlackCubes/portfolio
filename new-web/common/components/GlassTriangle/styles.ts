import styled from 'styled-components';
import Image from 'next/image';

interface IGlassContainer {
  boxDarkShadowBlur: number;
  boxDarkShadowHorizontalOffset: number;
  boxDarkShadowVerticalOffset: number;
  boxLightShadowBlur: number;
  boxLightShadowHorizontalOffset: number;
  boxLightShadowVerticalOffset: number;
}

interface IGlassImageWrapper {
  opacity?: number;
}

export const GlassContainer = styled.div<IGlassContainer>`
  width: 30rem;
  /* MIGHT NEED THIS IF THE STYLING IS OFF?? */
  /* height: 19rem; */
  filter: ${(props) =>
    `drop-shadow(${props.boxLightShadowHorizontalOffset ?? '-0.1'}rem ${
      props.boxLightShadowVerticalOffset ?? '-0.1'
    }rem ${props.boxLightShadowBlur ?? '0'}rem rgba(${
      props.theme.colors.glassLightShadow.rgb
    }, 0.17)) 
    drop-shadow(${props.boxDarkShadowHorizontalOffset ?? '0.1'}rem ${
      props.boxDarkShadowVerticalOffset ?? '0.1'
    }rem ${props.boxDarkShadowBlur ?? '0'}rem rgba(${
      props.theme.colors.glassDarkShadow.rgb
    }, 0.27))`};

  &.reverse {
    transform: scaleY(-1);
  }

  @media ${({ theme }) => theme.responsive.below479} {
    width: 93%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const GlassShape = styled.div`
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

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: ${({ opacity }) => opacity ?? '1'};

  &.reverse {
    transform: scaleY(-1);
  }
`;

export const GlassImage = styled(Image)`
  width: 100%;
`;
