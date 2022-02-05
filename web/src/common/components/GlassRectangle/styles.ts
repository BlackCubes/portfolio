import styled from 'styled-components';

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
  display: flex;
  align-items: center;
  width: 15rem;
  height: 15rem;
  background-color: ${(props) => `rgba(${props.theme.colors.glass.rgb}, 0.17)`};
  border-radius: 2rem;
  box-shadow: ${(props) => `
  ${`${props.boxLightShadowHorizontalOffset}rem` ?? '-0.1rem'} ${
    `${props.boxLightShadowVerticalOffset}rem` ?? '-0.1rem'
  }
    ${`${props.boxLightShadowBlur}rem` ?? '0'} 0 rgba(${
    props.theme.colors.glassLightShadow.rgb
  }, 0.17),
  ${`${props.boxDarkShadowHorizontalOffset}rem` ?? '0.1rem'} ${
    `${props.boxDarkShadowVerticalOffset}rem` ?? '0.1rem'
  }
    ${`${props.boxDarkShadowBlur}rem` ?? '0'} 0 rgba(${
    props.theme.colors.glassDarkShadow.rgb
  }, 0.27)`};
`;

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  width: 12rem;
  margin-left: auto;
  margin-right: auto;
  opacity: ${({ opacity }) => opacity ?? '1'};
`;

export const GlassImage = styled.img`
  width: 100%;
`;
