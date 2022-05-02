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
  WorkImageLink,
  WorkImageWrapper,
  WorkLink,
  WorkLinkWrapper,
  WorkTitle,
  WorkTitleLink,
} from './styles';

export interface IWorkContainer {
  finishIsFirstMount: boolean;
  isExploreLinkHovering: boolean;
  reverseClass?: string;
  workDescription: string;
  workImageAlt: string;
  workImageSrc: string;
  workLinkPath: string;
  workTitle: string;
}

const WorkContainer: FC<IWorkContainer> = ({
  finishIsFirstMount,
  isExploreLinkHovering,
  reverseClass,
  workDescription,
  workImageAlt,
  workImageSrc,
  workLinkPath,
  workTitle,
}) => {
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const descriptionAnimateControls = useAnimation();
  const { inView: descriptionInView, ref: descriptionRef } = useInView();

  const linkAnimateControls = useAnimation();
  const { inView: linkInView, ref: linkRef } = useInView();

  const imageAnimateControls = useAnimation();
  const { inView: imageInView, ref: imageRef } = useInView();

  const [isTitleLinkHovering, setIsTitleLinkHovering] = useIsHovering();
  const [isImageLinkHovering, setIsImageLinkHovering] = useIsHovering();
  const [isWorkLinkHovering, setIsWorkLinkHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, titleAnimateControls, titleInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && descriptionInView) {
        descriptionAnimateControls.start('visible');
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, descriptionAnimateControls, descriptionInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && linkInView) {
        linkAnimateControls.start('visible');
      }
    }, 1700);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, linkAnimateControls, linkInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && imageInView) {
        imageAnimateControls.start('visible');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, imageAnimateControls, imageInView]);

  useEffect(() => {
    if (
      !finishIsFirstMount &&
      isHoveringOverall(
        isImageLinkHovering,
        isWorkLinkHovering,
        isExploreLinkHovering
      )
    ) {
      imageAnimateControls.start('hovering');
    } else {
      imageAnimateControls.start('nonHovering');
    }
  }, [
    finishIsFirstMount,
    isImageLinkHovering,
    isWorkLinkHovering,
    isExploreLinkHovering,
    imageAnimateControls,
  ]);

  return (
    <WorkContainerStyle className={reverseClass}>
      <WorkTitle
        animate={titleAnimateControls}
        className={reverseClass}
        ref={titleRef}
      >
        <WorkTitleLink
          to={workLinkPath}
          onMouseEnter={() => setIsTitleLinkHovering(true)}
          onMouseLeave={() => setIsTitleLinkHovering(false)}
        >
          <HeadingTertiary
            {...(isHoveringOverall(
              isTitleLinkHovering,
              isWorkLinkHovering,
              isExploreLinkHovering
            ) && {
              opacity: 0.8,
              textDecoration: 'underline',
            })}
          >
            {workTitle}
          </HeadingTertiary>
        </WorkTitleLink>
      </WorkTitle>

      <WorkDescriptionContainer>
        <WorkDescription
          animate={descriptionAnimateControls}
          className={reverseClass}
          ref={descriptionRef}
        >
          <Paragraph
            {...(isHoveringOverall(
              isWorkLinkHovering,
              isExploreLinkHovering
            ) && {
              opacity: 0.8,
            })}
          >
            {workDescription}
          </Paragraph>
        </WorkDescription>

        <WorkLinkWrapper
          animate={linkAnimateControls}
          className={reverseClass}
          ref={linkRef}
        >
          <WorkLink
            to={workLinkPath}
            onMouseEnter={() => setIsWorkLinkHovering(true)}
            onMouseLeave={() => setIsWorkLinkHovering(false)}
          >
            View
          </WorkLink>
        </WorkLinkWrapper>
      </WorkDescriptionContainer>

      <WorkImageWrapper
        animate={imageAnimateControls}
        className={reverseClass}
        onHoverStart={() => setIsImageLinkHovering(true)}
        onHoverEnd={() => setIsImageLinkHovering(false)}
        ref={imageRef}
      >
        <WorkImageLink to={workLinkPath}>
          <GlassRectangle
            glassDarkShadowBlur={
              isHoveringOverall(
                isImageLinkHovering,
                isWorkLinkHovering,
                isExploreLinkHovering
              )
                ? 0.4
                : 0
            }
            glassDarkShadowHorizontalOffset={
              isHoveringOverall(
                isImageLinkHovering,
                isWorkLinkHovering,
                isExploreLinkHovering
              )
                ? 0.3
                : 0.1
            }
            glassDarkShadowVerticalOffset={
              isHoveringOverall(
                isImageLinkHovering,
                isWorkLinkHovering,
                isExploreLinkHovering
              )
                ? 0.3
                : 0.1
            }
            glassLightShadowBlur={
              isHoveringOverall(
                isImageLinkHovering,
                isWorkLinkHovering,
                isExploreLinkHovering
              )
                ? 0.4
                : 0
            }
            glassLightShadowHorizontalOffset={
              isHoveringOverall(
                isImageLinkHovering,
                isWorkLinkHovering,
                isExploreLinkHovering
              )
                ? -0.3
                : -0.1
            }
            glassLightShadowVerticalOffset={
              isHoveringOverall(
                isImageLinkHovering,
                isWorkLinkHovering,
                isExploreLinkHovering
              )
                ? -0.3
                : -0.1
            }
            imageAlt={workImageAlt}
            imageSrc={workImageSrc}
            opacity={
              isHoveringOverall(
                isImageLinkHovering,
                isWorkLinkHovering,
                isExploreLinkHovering
              )
                ? 0.75
                : 1
            }
          />
        </WorkImageLink>
      </WorkImageWrapper>
    </WorkContainerStyle>
  );
};

export default WorkContainer;
