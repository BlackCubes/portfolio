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
  isExploreLinkHovering: boolean;
  articleClass: string;
  articleImageAlt: string;
  articleImageSrc: string;
  articleLinkPath: string;
  articleTitle: string;
}

const ArticleContainer: FC<IArticleContainer> = ({
  isExploreLinkHovering,
  articleClass,
  articleImageAlt,
  articleImageSrc,
  articleLinkPath,
  articleTitle,
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

      return () => clearTimeout(timer);
    }, 600);
  }, [titleAnimateControls, titleInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageInView) {
        imageAnimateControls.start('visible');
      }
    }, 900);

    return () => clearTimeout(timer);
  }, [imageAnimateControls, imageInView]);

  return (
    <ArticleContainerStyle className={articleClass}>
      <ArticleDescriptionContainer>
        <ArticleImageWrapper
          animate={imageAnimateControls}
          onHoverStart={() => setIsImageLinkHovering(true)}
          onHoverEnd={() => setIsImageLinkHovering(false)}
          ref={imageRef}
        >
          <ArticleImageLink to={articleLinkPath}>
            <GlassCircle
              glassDarkShadowBlur={
                isHoveringOverall(
                  isImageLinkHovering,
                  isTitleLinkHovering,
                  isExploreLinkHovering
                )
                  ? 0.4
                  : 0
              }
              glassDarkShadowHorizontalOffset={
                isHoveringOverall(
                  isImageLinkHovering,
                  isTitleLinkHovering,
                  isExploreLinkHovering
                )
                  ? 0.3
                  : 0.1
              }
              glassDarkShadowVerticalOffset={
                isHoveringOverall(
                  isImageLinkHovering,
                  isTitleLinkHovering,
                  isExploreLinkHovering
                )
                  ? 0.3
                  : 0.1
              }
              glassLightShadowBlur={
                isHoveringOverall(
                  isImageLinkHovering,
                  isTitleLinkHovering,
                  isExploreLinkHovering
                )
                  ? 0.4
                  : 0
              }
              glassLightShadowHorizontalOffset={
                isHoveringOverall(
                  isImageLinkHovering,
                  isTitleLinkHovering,
                  isExploreLinkHovering
                )
                  ? -0.3
                  : -0.1
              }
              glassLightShadowVerticalOffset={
                isHoveringOverall(
                  isImageLinkHovering,
                  isTitleLinkHovering,
                  isExploreLinkHovering
                )
                  ? -0.3
                  : -0.1
              }
              imageAlt={articleImageAlt}
              imageSrc={articleImageSrc}
              opacity={
                isHoveringOverall(
                  isImageLinkHovering,
                  isTitleLinkHovering,
                  isExploreLinkHovering
                )
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
