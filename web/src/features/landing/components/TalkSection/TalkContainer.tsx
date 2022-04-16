import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GlassTriangle from 'common/components/GlassTriangle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  TalkContainerStyle,
  TalkDescriptionContainer,
  TalkImageLink,
  TalkImageWrapper,
  TalkTitle,
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
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const imageAnimateControls = useAnimation();
  const { inView: imageInView, ref: imageRef } = useInView();

  const [isTitleLinkHovering, setIsTitleLinkHovering] = useIsHovering();
  const [isImageLinkHovering, setIsImageLinkHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [titleAnimateControls, titleInView]);

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
          onHoverStart={() => setIsImageLinkHovering(true)}
          onHoverEnd={() => setIsImageLinkHovering(false)}
          ref={imageRef}
        >
          <TalkImageLink href={talkLinkPath} target="_blank" rel="noopener">
            <GlassTriangle
              glassDarkShadowBlur={isImageLinkHovering ? 0.4 : 0}
              glassDarkShadowHorizontalOffset={isImageLinkHovering ? 0.3 : 0.1}
              glassDarkShadowVerticalOffset={isImageLinkHovering ? 0.3 : 0.1}
              glassLightShadowBlur={isImageLinkHovering ? 0.4 : 0}
              glassLightShadowHorizontalOffset={
                isImageLinkHovering ? -0.3 : -0.1
              }
              glassLightShadowVerticalOffset={isImageLinkHovering ? -0.3 : -0.1}
              imageAlt={talkImageAlt}
              imageSrc={talkImageSrc}
              opacity={isImageLinkHovering ? 0.75 : 1}
              reverseClass={reverseClass}
            />
          </TalkImageLink>
        </TalkImageWrapper>

        <TalkTitle animate={titleAnimateControls} ref={titleRef}>
          <TalkTitleLink
            href={talkLinkPath}
            target="_blank"
            rel="noopener"
            onMouseEnter={() => setIsTitleLinkHovering(true)}
            onMouseLeave={() => setIsTitleLinkHovering(false)}
          >
            <HeadingTertiary
              {...(isTitleLinkHovering && {
                opacity: 0.8,
                textDecoration: 'underline',
              })}
            >
              {talkTitle}
            </HeadingTertiary>
          </TalkTitleLink>
        </TalkTitle>
      </TalkDescriptionContainer>
    </TalkContainerStyle>
  );
};

export default TalkContainer;
