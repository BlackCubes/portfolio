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
  display: flex;
  align-items: center;
  width: 15rem;
  height: 15rem;
  background-color: ${(props) => `rgba(${props.theme.colors.glass.rgb}, 0.17)`};
  border-radius: 50%;
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

  &.related-sidebar {
    width: 8.5rem;
    height: 8.5rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    width: 13rem;
    height: 13rem;
  }
`;

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  position: relative;
  width: 14rem;
  height: 14rem;
  margin-left: auto;
  margin-right: auto;
  border: ${(props) =>
    `0.1rem solid rgba(${props.theme.colors.glassLightShadow.rgb}, 0.17)`};
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity ?? '1'};
  overflow: hidden;

  &.related-sidebar {
    width: 7.5rem;
    height: 7.5rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    width: 12rem;
    height: 12rem;
  }
`;

export const GlassImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  transform: translate(-50%, -50%);
`;
