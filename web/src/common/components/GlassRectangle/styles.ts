import styled from 'styled-components';

import { IGlassContainer, IGlassImageWrapper } from './models';

export const GlassContainer = styled.div<IGlassContainer>`
  display: flex;
  align-items: center;
  width: 15rem;
  height: 15rem;
  background-color: ${(props) => `rgba(${props.theme.colors.glass.rgb}, 0.17)`};
  border-radius: 2rem;
  box-shadow: ${(props) => `
  -0.1rem -0.1rem 0 0 rgba(${props.theme.colors.glassLightShadow.rgb}, ${
    props.boxLightShadowRgbaOpacity ?? '0.17'
  }),
  0.1rem 0.1rem 0 0 rgba(${props.theme.colors.glassDarkShadow.rgb}, ${
    props.boxDarkShadowRgbaOpacity ?? '0.27'
  })`};
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
