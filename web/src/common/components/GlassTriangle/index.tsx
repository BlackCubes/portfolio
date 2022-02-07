import React, { FC } from 'react';

import {
  DummyGlass,
  GlassContainer,
  GlassImage,
  GlassImageWrapper,
  GlassWrapper,
  GlassShadow,
  MultiGlass,
} from './styles';

interface IGlassTriangle {
  imageAlt: string;
  imageSrc: string;
}

const GlassTriangle: FC<IGlassTriangle> = ({ imageAlt, imageSrc }) => (
  <GlassContainer>
    <MultiGlass>
      <GlassWrapper className="triangle1">
        <GlassShadow />
      </GlassWrapper>

      <GlassWrapper className="triangle2 vertical-flip">
        <GlassShadow />
      </GlassWrapper>

      <GlassWrapper className="triangle3">
        <GlassShadow />
      </GlassWrapper>
    </MultiGlass>

    <DummyGlass />

    <GlassImageWrapper>
      <GlassImage src={imageSrc} alt={imageAlt} />
    </GlassImageWrapper>
  </GlassContainer>
);

export default GlassTriangle;
