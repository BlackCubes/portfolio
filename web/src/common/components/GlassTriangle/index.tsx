import React, { FC } from 'react';

import {
  GlassContainer,
  GlassImage,
  GlassImageWrapper,
  GlassShape,
} from './styles';

interface IGlassTriangle {
  imageAlt: string;
  imageSrc: string;
}

const GlassTriangle: FC<IGlassTriangle> = ({ imageAlt, imageSrc }) => (
  <GlassContainer>
    <GlassShape>
      <GlassImageWrapper>
        <GlassImage src={imageSrc} alt={imageAlt} />
      </GlassImageWrapper>
    </GlassShape>
  </GlassContainer>
);

export default GlassTriangle;
