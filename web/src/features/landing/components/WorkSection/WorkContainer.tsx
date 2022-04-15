import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GlassRectangle from 'common/components/GlassRectangle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import { isHoveringOverall } from 'utils';

import {
  WorkContainerStyle,
  WorkDescription,
  WorkDescriptionContainer,
  WorkImageWrapper,
  WorkLink,
  WorkLinkWrapper,
  WorkTitle,
} from './styles';

export interface IWorkContainer {
  isExploreLinkHovering: boolean;
  reverseClass?: string;
  workDescription: string;
  workImageAlt: string;
  workImageSrc: string;
  workLinkContent: string;
  workLinkPath: string;
  workTitle: string;
}

const WorkContainer: FC<IWorkContainer> = ({
  isExploreLinkHovering,
  reverseClass,
  workDescription,
  workImageAlt,
  workImageSrc,
  workLinkContent,
  workLinkPath,
  workTitle,
}) => {
  const imageAnimateControls = useAnimation();
  const { inView: imageInView, ref: imageRef } = useInView();

  const [isHovering, setIsHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageInView) {
        imageAnimateControls.start('visible');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [imageAnimateControls, imageInView]);

  return (
    <WorkContainerStyle className={reverseClass}>
      <WorkTitle className={reverseClass}>
        <HeadingTertiary
          {...(isHoveringOverall(isHovering, isExploreLinkHovering) && {
            opacity: 0.8,
            textDecoration: 'underline',
          })}
        >
          {workTitle}
        </HeadingTertiary>
      </WorkTitle>

      <WorkDescriptionContainer>
        <WorkDescription className={reverseClass}>
          <Paragraph
            {...(isHoveringOverall(isHovering, isExploreLinkHovering) && {
              opacity: 0.8,
            })}
          >
            {workDescription}
          </Paragraph>
        </WorkDescription>

        <WorkLinkWrapper className={reverseClass}>
          <WorkLink
            to={workLinkPath}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {workLinkContent}
          </WorkLink>
        </WorkLinkWrapper>
      </WorkDescriptionContainer>

      <WorkImageWrapper
        animate={imageAnimateControls}
        className={reverseClass}
        ref={imageRef}
      >
        <GlassRectangle
          glassDarkShadowBlur={
            isHoveringOverall(isHovering, isExploreLinkHovering) ? 0.4 : 0
          }
          glassDarkShadowHorizontalOffset={
            isHoveringOverall(isHovering, isExploreLinkHovering) ? 0.3 : 0.1
          }
          glassDarkShadowVerticalOffset={
            isHoveringOverall(isHovering, isExploreLinkHovering) ? 0.3 : 0.1
          }
          glassLightShadowBlur={
            isHoveringOverall(isHovering, isExploreLinkHovering) ? 0.4 : 0
          }
          glassLightShadowHorizontalOffset={
            isHoveringOverall(isHovering, isExploreLinkHovering) ? -0.3 : -0.1
          }
          glassLightShadowVerticalOffset={
            isHoveringOverall(isHovering, isExploreLinkHovering) ? -0.3 : -0.1
          }
          imageAlt={workImageAlt}
          imageSrc={workImageSrc}
          opacity={
            isHoveringOverall(isHovering, isExploreLinkHovering) ? 0.75 : 1
          }
        />
      </WorkImageWrapper>
    </WorkContainerStyle>
  );
};

export default WorkContainer;
