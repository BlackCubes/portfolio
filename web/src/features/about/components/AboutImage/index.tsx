import React, { FC } from 'react';

import aboutImage from 'assets/img/about-pic.jpg';

import GlassRectangle from 'common/components/GlassRectangle';

import { ImageWrapper } from './styles';

const AboutImage: FC = () => (
  <ImageWrapper>
    <GlassRectangle
      customClassName="about-page"
      glassDarkShadowBlur={0.4}
      glassDarkShadowHorizontalOffset={0.3}
      glassDarkShadowVerticalOffset={0.3}
      glassLightShadowBlur={0.4}
      glassLightShadowHorizontalOffset={-0.3}
      glassLightShadowVerticalOffset={-0.3}
      imageAlt="Professional image of Elias Gutierrez"
      imageSrc={aboutImage}
      opacity={1}
    />
  </ImageWrapper>
);

export default AboutImage;
