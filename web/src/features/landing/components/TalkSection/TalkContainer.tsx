import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GlassTriangle from 'common/components/GlassTriangle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  TalkContainerStyle,
  TalkDescriptionContainer,
  TalkImageWrapper,
  TalkTitleLink,
} from './styles';

export interface ITalkContainer {
  reverseClass?: string;
  talkImageAlt: string;
  talkImageSrc: string;
  talkLinkPath: string;
  talkTitle: string;
}

const TalkContainer: FC<ITalkContainer> = ({
  reverseClass,
  talkImageAlt,
  talkImageSrc,
  talkLinkPath,
  talkTitle,
}) => {
  const imageAnimateControls = useAnimation();
  const { inView: imageInView, ref: imageRef } = useInView();

  const [isHovering, setIsHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageInView) {
        imageAnimateControls.start('visible');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [imageAnimateControls, imageInView]);

  return (
    <TalkContainerStyle>
      <TalkDescriptionContainer className={reverseClass}>
        <TalkImageWrapper
          animate={imageAnimateControls}
          className={reverseClass}
          ref={imageRef}
        >
          <GlassTriangle
            glassDarkShadowBlur={isHovering ? 0.4 : 0}
            glassDarkShadowHorizontalOffset={isHovering ? 0.3 : 0.1}
            glassDarkShadowVerticalOffset={isHovering ? 0.3 : 0.1}
            glassLightShadowBlur={isHovering ? 0.4 : 0}
            glassLightShadowHorizontalOffset={isHovering ? -0.3 : -0.1}
            glassLightShadowVerticalOffset={isHovering ? -0.3 : -0.1}
            imageAlt={talkImageAlt}
            imageSrc={talkImageSrc}
            opacity={isHovering ? 0.75 : 1}
            reverseClass={reverseClass}
          />
        </TalkImageWrapper>

        <TalkTitleLink
          href={talkLinkPath}
          target="_blank"
          rel="noopener"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <HeadingTertiary
            {...(isHovering && {
              opacity: 0.8,
              textDecoration: 'underline',
            })}
          >
            {talkTitle}
          </HeadingTertiary>
        </TalkTitleLink>
      </TalkDescriptionContainer>
    </TalkContainerStyle>
  );
};

export default TalkContainer;
