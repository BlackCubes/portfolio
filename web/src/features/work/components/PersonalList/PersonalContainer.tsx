import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GlassTriangle from 'common/components/GlassTriangle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import {
  PersonalContainerStyle,
  PersonalDescription,
  PersonalImageWrapper,
  PersonalLink,
  PersonalTitle,
} from './styles';

export interface IPortfolioContainer {
  reverseClass?: string;
  personalDescription: string;
  personalImageAlt: string;
  personalImageSrc: string;
  personalPath: string;
  personalTitle: string;
}

const PersonalContainer: FC<IPortfolioContainer> = ({
  reverseClass,
  personalDescription,
  personalImageAlt,
  personalImageSrc,
  personalPath,
  personalTitle,
}) => {
  const titleAnimateControls = useAnimation();

  const descriptionAnimateControls = useAnimation();

  const imageAnimateControls = useAnimation();
  const { inView: imageInView, ref: imageRef } = useInView();

  const [isPersonalLinkHovering, setIsPersonalLinkHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageInView) {
        imageAnimateControls.start('visible');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [imageAnimateControls, imageInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageInView) {
        titleAnimateControls.start('visible');
      }
    }, 1600);

    return () => clearTimeout(timer);
  }, [imageInView, titleAnimateControls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageInView) {
        descriptionAnimateControls.start('visible');
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, [descriptionAnimateControls, imageInView]);

  return (
    <PersonalContainerStyle>
      <PersonalDescription animate={descriptionAnimateControls}>
        <Paragraph
          {...(isPersonalLinkHovering && {
            opacity: 0.8,
          })}
        >
          {personalDescription}
        </Paragraph>
      </PersonalDescription>

      <PersonalLink
        to={personalPath}
        onMouseEnter={() => setIsPersonalLinkHovering(true)}
        onMouseLeave={() => setIsPersonalLinkHovering(false)}
      >
        <PersonalImageWrapper animate={imageAnimateControls} ref={imageRef}>
          <GlassTriangle
            glassDarkShadowBlur={isPersonalLinkHovering ? 0.4 : 0}
            glassDarkShadowHorizontalOffset={isPersonalLinkHovering ? 0.3 : 0.1}
            glassDarkShadowVerticalOffset={isPersonalLinkHovering ? 0.3 : 0.1}
            glassLightShadowBlur={isPersonalLinkHovering ? 0.4 : 0}
            glassLightShadowHorizontalOffset={
              isPersonalLinkHovering ? -0.3 : -0.1
            }
            glassLightShadowVerticalOffset={
              isPersonalLinkHovering ? -0.3 : -0.1
            }
            imageAlt={personalImageAlt}
            imageSrc={personalImageSrc}
            opacity={isPersonalLinkHovering ? 0.75 : 1}
            reverseClass={reverseClass}
          />
        </PersonalImageWrapper>
      </PersonalLink>

      <PersonalTitle animate={titleAnimateControls}>
        <HeadingTertiary
          {...(isPersonalLinkHovering && {
            opacity: 0.8,
          })}
        >
          {personalTitle}
        </HeadingTertiary>
      </PersonalTitle>
    </PersonalContainerStyle>
  );
};

export default PersonalContainer;
