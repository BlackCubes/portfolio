import React, { FC } from 'react';

import { GlassContainer, GlassImage, GlassImageWrapper } from './styles';

interface IGlassRectangle {
  glassDarkShadowBlur: number;
  glassDarkShadowHorizontalOffset: number;
  glassDarkShadowVerticalOffset: number;
  glassLightShadowBlur: number;
  glassLightShadowHorizontalOffset: number;
  glassLightShadowVerticalOffset: number;
  imageAlt: string;
  imageSrc: string;
  opacity: number;
}

const GlassRectangle: FC<IGlassRectangle> = ({
  glassDarkShadowBlur,
  glassDarkShadowHorizontalOffset,
  glassDarkShadowVerticalOffset,
  glassLightShadowBlur,
  glassLightShadowHorizontalOffset,
  glassLightShadowVerticalOffset,
  imageAlt,
  imageSrc,
  opacity,
}) => (
  <GlassContainer
    boxDarkShadowBlur={glassDarkShadowBlur}
    boxDarkShadowHorizontalOffset={glassDarkShadowHorizontalOffset}
    boxDarkShadowVerticalOffset={glassDarkShadowVerticalOffset}
    boxLightShadowBlur={glassLightShadowBlur}
    boxLightShadowHorizontalOffset={glassLightShadowHorizontalOffset}
    boxLightShadowVerticalOffset={glassLightShadowVerticalOffset}
  >
    <GlassImageWrapper opacity={opacity}>
      <GlassImage src={imageSrc} alt={imageAlt} />
    </GlassImageWrapper>
  </GlassContainer>
);

export default GlassRectangle;
