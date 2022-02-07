import React, { FC } from 'react';

import { GlassWrapper, GlassShadow, MultiGlass } from './styles';

const GlassTriangle: FC = () => (
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
);

export default GlassTriangle;
