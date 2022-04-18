import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GlassCircle from 'common/components/GlassCircle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import { isHoveringOverall } from 'utils';

import {
  ArticleContainerStyle,
  ArticleDescriptionContainer,
  ArticleImageLink,
  ArticleImageWrapper,
  ArticleTitle,
  ArticleTitleLink,
} from './styles';

export interface IArticleContainer {
  articleClass: string;
  articleImageAlt: string;
  articleImageSrc: string;
  articleLinkPath: string;
  articleTitle: string;
  finishIsFirstMount: boolean;
  isExploreLinkHovering: boolean;
}

const ArticleContainer: FC<IArticleContainer> = ({
  articleClass,
  articleImageAlt,
  articleImageSrc,
  articleLinkPath,
  articleTitle,
  finishIsFirstMount,
  isExploreLinkHovering,
}) => {
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const imageAnimateControls = useAnimation();
  const { inView: imageInView, ref: imageRef } = useInView();

  const [isTitleLinkHovering, setIsTitleLinkHovering] = useIsHovering();
  const [isImageLinkHovering, setIsImageLinkHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && titleInView) {
        titleAnimateControls.start('visible');
      }

      return () => clearTimeout(timer);
    }, 600);
  }, [finishIsFirstMount, titleAnimateControls, titleInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && imageInView) {
        imageAnimateControls.start('visible');
      }
    }, 900);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, imageAnimateControls, imageInView]);

  useEffect(() => {
    if (
      !finishIsFirstMount &&
      isHoveringOverall(isImageLinkHovering, isExploreLinkHovering)
    ) {
      imageAnimateControls.start('hovering');
    } else {
      imageAnimateControls.start('nonHovering');
    }
  }, [
    finishIsFirstMount,
    isImageLinkHovering,
    isExploreLinkHovering,
    imageAnimateControls,
  ]);

  return (
    <ArticleContainerStyle className={articleClass}>
      <ArticleDescriptionContainer>
        <ArticleImageWrapper
          animate={imageAnimateControls}
          className={articleClass}
          onHoverStart={() => setIsImageLinkHovering(true)}
          onHoverEnd={() => setIsImageLinkHovering(false)}
          ref={imageRef}
        >
          <ArticleImageLink to={articleLinkPath}>
            <GlassCircle
              glassDarkShadowBlur={
                isHoveringOverall(isImageLinkHovering, isExploreLinkHovering)
                  ? 0.4
                  : 0
              }
              glassDarkShadowHorizontalOffset={
                isHoveringOverall(isImageLinkHovering, isExploreLinkHovering)
                  ? 0.3
                  : 0.1
              }
              glassDarkShadowVerticalOffset={
                isHoveringOverall(isImageLinkHovering, isExploreLinkHovering)
                  ? 0.3
                  : 0.1
              }
              glassLightShadowBlur={
                isHoveringOverall(isImageLinkHovering, isExploreLinkHovering)
                  ? 0.4
                  : 0
              }
              glassLightShadowHorizontalOffset={
                isHoveringOverall(isImageLinkHovering, isExploreLinkHovering)
                  ? -0.3
                  : -0.1
              }
              glassLightShadowVerticalOffset={
                isHoveringOverall(isImageLinkHovering, isExploreLinkHovering)
                  ? -0.3
                  : -0.1
              }
              imageAlt={articleImageAlt}
              imageSrc={articleImageSrc}
              opacity={
                isHoveringOverall(isImageLinkHovering, isExploreLinkHovering)
                  ? 0.75
                  : 1
              }
            />
          </ArticleImageLink>
        </ArticleImageWrapper>

        <ArticleTitle animate={titleAnimateControls} ref={titleRef}>
          <ArticleTitleLink
            to={articleLinkPath}
            onMouseEnter={() => setIsTitleLinkHovering(true)}
            onMouseLeave={() => setIsTitleLinkHovering(false)}
          >
            <HeadingTertiary
              {...(isHoveringOverall(
                isTitleLinkHovering,
                isExploreLinkHovering
              ) && {
                opacity: 0.8,
                textDecoration: 'underline',
              })}
            >
              {articleTitle}
            </HeadingTertiary>
          </ArticleTitleLink>
        </ArticleTitle>
      </ArticleDescriptionContainer>
    </ArticleContainerStyle>
  );
};

export default ArticleContainer;
