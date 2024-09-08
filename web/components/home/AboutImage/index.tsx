import { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GlassRectangle from 'common/components/GlassRectangle';

import { ImageWrapper } from './styles';

interface IAboutImageProps {
  customClassName?: string;
  imgAlt: string;
  imgSrc: string;
}

const AboutImage: FC<IAboutImageProps> = ({
  customClassName,
  imgAlt,
  imgSrc,
}) => {
  const imageAnimateControls = useAnimation();

  const { inView: imageInView, ref: imageRef } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageInView) {
        imageAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [imageAnimateControls, imageInView]);

  return (
    <ImageWrapper
      animate={imageAnimateControls}
      className="default-margin-bottom"
      ref={imageRef}
    >
      <GlassRectangle
        customClassName={customClassName}
        glassDarkShadowBlur={0.4}
        glassDarkShadowHorizontalOffset={0.3}
        glassDarkShadowVerticalOffset={0.3}
        glassLightShadowBlur={0.4}
        glassLightShadowHorizontalOffset={-0.3}
        glassLightShadowVerticalOffset={-0.3}
        imageAlt={imgAlt}
        imageSrc={imgSrc}
        opacity={1}
      />
    </ImageWrapper>
  );
};

export default AboutImage;
