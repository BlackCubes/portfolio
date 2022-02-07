import React, { FC } from 'react';

import {
  GlassContainer,
  GlassImage,
  GlassImageWrapper,
  GlassShape,
} from './styles';

export interface IGlassTriangle {
  glassDarkShadowBlur: number;
  glassDarkShadowHorizontalOffset: number;
  glassDarkShadowVerticalOffset: number;
  glassLightShadowBlur: number;
  glassLightShadowHorizontalOffset: number;
  glassLightShadowVerticalOffset: number;
  imageAlt: string;
  imageSrc: string;
  opacity: number;
  reverseClass?: string;
}

const GlassTriangle: FC<IGlassTriangle> = ({
  glassDarkShadowBlur,
  glassDarkShadowHorizontalOffset,
  glassDarkShadowVerticalOffset,
  glassLightShadowBlur,
  glassLightShadowHorizontalOffset,
  glassLightShadowVerticalOffset,
  imageAlt,
  imageSrc,
  opacity,
  reverseClass,
}) => (
  <GlassContainer
    className={reverseClass}
    boxDarkShadowBlur={glassDarkShadowBlur}
    boxDarkShadowHorizontalOffset={glassDarkShadowHorizontalOffset}
    boxDarkShadowVerticalOffset={glassDarkShadowVerticalOffset}
    boxLightShadowBlur={glassLightShadowBlur}
    boxLightShadowHorizontalOffset={glassLightShadowHorizontalOffset}
    boxLightShadowVerticalOffset={glassLightShadowVerticalOffset}
  >
    <GlassShape>
      <GlassImageWrapper className={reverseClass} opacity={opacity}>
        <GlassImage src={imageSrc} alt={imageAlt} />
      </GlassImageWrapper>
    </GlassShape>
  </GlassContainer>
);

export default GlassTriangle;
