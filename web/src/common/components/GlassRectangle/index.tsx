import React, { FC } from 'react';

import { GlassContainer, GlassImage, GlassImageWrapper } from './styles';

interface IGlassRectangle {
  imageAlt: string;
  imageSrc: string;
  opacity: number;
}

const GlassRectangle: FC<IGlassRectangle> = ({
  imageAlt,
  imageSrc,
  opacity,
}) => (
  <GlassContainer>
    <GlassImageWrapper opacity={opacity}>
      <GlassImage src={imageSrc} alt={imageAlt} />
    </GlassImageWrapper>
  </GlassContainer>
);

export default GlassRectangle;
