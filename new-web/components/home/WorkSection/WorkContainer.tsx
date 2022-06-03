import { FC, useEffect } from 'react';
import Link from 'next/link';
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
  WorkExternalLink,
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
  workExternalLinkPath: string;
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
  workExternalLinkPath,
  workImageAlt,
  workImageSrc,
  workLinkPath,
  workTitle,
}) => {
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const descriptionAnimateControls = useAnimation();
  const { inView: descriptionInView, ref: descriptionRef } = useInView();

  const externalLinkAnimateControls = useAnimation();
  const { inView: externalLinkInView, ref: externalLinkRef } = useInView();

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
      if (!finishIsFirstMount && externalLinkInView) {
        externalLinkAnimateControls.start('visible');
      }
    }, 1700);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, externalLinkAnimateControls, externalLinkInView]);

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
        <Link href={workLinkPath} passHref>
          <WorkTitleLink
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
        </Link>
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

        {workExternalLinkPath.length > 0 && (
          <WorkLinkWrapper
            animate={externalLinkAnimateControls}
            className={`external-link ${reverseClass}`}
            ref={externalLinkRef}
          >
            <WorkExternalLink
              href={workExternalLinkPath}
              rel="noopener"
              target="_blank"
            >
              App
            </WorkExternalLink>
          </WorkLinkWrapper>
        )}

        <WorkLinkWrapper
          animate={linkAnimateControls}
          className={reverseClass}
          ref={linkRef}
        >
          <Link href={workLinkPath} passHref>
            <WorkLink
              onMouseEnter={() => setIsWorkLinkHovering(true)}
              onMouseLeave={() => setIsWorkLinkHovering(false)}
            >
              About
            </WorkLink>
          </Link>
        </WorkLinkWrapper>
      </WorkDescriptionContainer>

      <WorkImageWrapper
        animate={imageAnimateControls}
        className={reverseClass}
        onHoverStart={() => setIsImageLinkHovering(true)}
        onHoverEnd={() => setIsImageLinkHovering(false)}
        ref={imageRef}
      >
        <Link href={workLinkPath} passHref>
          <WorkImageLink>
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
        </Link>
      </WorkImageWrapper>
    </WorkContainerStyle>
  );
};

export default WorkContainer;
