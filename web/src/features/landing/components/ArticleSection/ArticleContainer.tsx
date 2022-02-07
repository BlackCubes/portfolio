import React, { FC } from 'react';

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
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <ArticleContainerStyle className={articleClass}>
      <ArticleDescriptionContainer>
        <ArticleImageWrapper>
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
          href={articleLinkPath}
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
