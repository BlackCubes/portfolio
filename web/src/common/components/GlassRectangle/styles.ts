import styled from 'styled-components';

interface IGlassContainer {
  boxDarkShadowBlur: number;
  boxDarkShadowHorizontalOffset: number;
  boxDarkShadowVerticalOffset: number;
  boxLightShadowBlur: number;
  boxLightShadowHorizontalOffset: number;
  boxLightShadowVerticalOffset: number;
  hasContent?: boolean;
}

interface IGlassImageWrapper {
  opacity?: number;
}

export const GlassContainer = styled.div<IGlassContainer>`
  display: flex;
  flex-direction: ${(props) => (props.hasContent ? 'column' : 'row')};
  align-items: center;
  width: ${(props) => (props.hasContent ? '27rem' : '15rem')};
  height: ${(props) => (props.hasContent ? 'auto' : '15rem')};
  padding: ${(props) => (props.hasContent ? '0.5rem' : '0')};
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

export const GlassTitle = styled.div`
  padding: 1rem;
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

export const GlassContent = styled.div`
  padding: 2rem;
  text-align: center;
`;
