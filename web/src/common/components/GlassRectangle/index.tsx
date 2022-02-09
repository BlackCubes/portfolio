import React, { FC } from 'react';

import {
  GlassContainer,
  GlassContent,
  GlassImage,
  GlassImageWrapper,
  GlassTitle,
} from './styles';

export interface IGlassRectangle {
  glassContentElement?: JSX.Element | JSX.Element[];
  glassDarkShadowBlur: number;
  glassDarkShadowHorizontalOffset: number;
  glassDarkShadowVerticalOffset: number;
  glassLightShadowBlur: number;
  glassLightShadowHorizontalOffset: number;
  glassLightShadowVerticalOffset: number;
  glassTitleElement?: JSX.Element | JSX.Element[];
  hasContent?: boolean;
  imageAlt: string;
  imageSize?: number;
  imageSrc: string;
  opacity: number;
}

const GlassRectangle: FC<IGlassRectangle> = ({
  glassContentElement,
  glassDarkShadowBlur,
  glassDarkShadowHorizontalOffset,
  glassDarkShadowVerticalOffset,
  glassLightShadowBlur,
  glassLightShadowHorizontalOffset,
  glassLightShadowVerticalOffset,
  glassTitleElement,
  hasContent,
  imageAlt,
  imageSize,
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
    hasContent={hasContent}
  >
    {glassTitleElement && <GlassTitle>{glassTitleElement}</GlassTitle>}

    <GlassImageWrapper
      hasContent={hasContent}
      imageSize={imageSize}
      opacity={opacity}
    >
      <GlassImage src={imageSrc} alt={imageAlt} />
    </GlassImageWrapper>

    {glassContentElement && <GlassContent>{glassContentElement}</GlassContent>}
  </GlassContainer>
);

export default GlassRectangle;
