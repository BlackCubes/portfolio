import React, { FC } from 'react';

import { GlassContainer, GlassImage, GlassImageWrapper } from './styles';

export interface IGlassCirlce {
  glassContainerClassName?: string;
  glassDarkShadowBlur: number;
  glassDarkShadowHorizontalOffset: number;
  glassDarkShadowVerticalOffset: number;
  glassImageWrapperClassName?: string;
  glassLightShadowBlur: number;
  glassLightShadowHorizontalOffset: number;
  glassLightShadowVerticalOffset: number;
  imageAlt: string;
  imageSrc: string;
  opacity: number;
}

const GlassCircle: FC<IGlassCirlce> = ({
  glassContainerClassName,
  glassDarkShadowBlur,
  glassDarkShadowHorizontalOffset,
  glassDarkShadowVerticalOffset,
  glassImageWrapperClassName,
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
    className={glassContainerClassName}
  >
    <GlassImageWrapper className={glassImageWrapperClassName} opacity={opacity}>
      <GlassImage src={imageSrc} alt={imageAlt} layout="fill" />
    </GlassImageWrapper>
  </GlassContainer>
);

export default GlassCircle;
