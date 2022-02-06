import React, { FC } from 'react';

import { GlassContainer, GlassImage, GlassImageWrapper } from './styles';

interface IGlassCirlce {
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

const GlassCircle: FC<IGlassCirlce> = ({
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

export default GlassCircle;
