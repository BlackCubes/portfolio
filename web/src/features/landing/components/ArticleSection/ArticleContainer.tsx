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
  ArticleImageWrapper,
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
  const imageAnimateControls = useAnimation();
  const { inView: imageInView, ref: imageRef } = useInView();

  const [isHovering, setIsHovering] = useIsHovering();

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
        <ArticleImageWrapper animate={imageAnimateControls} ref={imageRef}>
          <GlassCircle
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
            imageAlt={articleImageAlt}
            imageSrc={articleImageSrc}
            opacity={
              isHoveringOverall(isHovering, isExploreLinkHovering) ? 0.75 : 1
            }
          />
        </ArticleImageWrapper>

        <ArticleTitleLink
          to={articleLinkPath}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <HeadingTertiary
            {...(isHoveringOverall(isHovering, isExploreLinkHovering) && {
              opacity: 0.8,
              textDecoration: 'underline',
            })}
          >
            {articleTitle}
          </HeadingTertiary>
        </ArticleTitleLink>
      </ArticleDescriptionContainer>
    </ArticleContainerStyle>
  );
};

export default ArticleContainer;
