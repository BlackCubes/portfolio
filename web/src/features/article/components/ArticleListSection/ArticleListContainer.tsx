import React, { FC } from 'react';

import GlassRectangle from 'common/components/GlassRectangle';

import { useIsHovering } from 'common/hooks';

import { ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import { isHoveringOverall } from 'utils';

import {
  ArticleAdditionalInfo,
  ArticleCategory,
  ArticleContainerStyle,
  ArticleDate,
  ArticleDescription,
  ArticleDescriptionContainer,
  ArticleImageLink,
  ArticleImageWrapper,
  ArticleLink,
  ArticleLinkWrapper,
  ArticleReadTime,
  ArticleTags,
  ArticleTitle,
  ArticleTitleLink,
} from './styles';

export interface IArticleListContainer {
  articleCategory: string;
  articleDate: string;
  articleDescription: string;
  articleImageAlt: string;
  articleImageSrc: string;
  articleLinkPath: string;
  articleReadingTime: number;
  articleTags: ITag[] | [];
  articleTitle: string;
}

const ArticleListContainer: FC<IArticleListContainer> = ({
  articleCategory,
  articleDate,
  articleDescription,
  articleImageAlt,
  articleImageSrc,
  articleLinkPath,
  articleReadingTime,
  articleTags,
  articleTitle,
}) => {
  const [isLinkHovering, setIsLinkHovering] = useIsHovering();
  const [isImageHovering, setIsImageHovering] = useIsHovering();
  const [isTitleHovering, setIsTitleHovering] = useIsHovering();

  return (
    <ArticleContainerStyle>
      <ArticleImageWrapper>
        <ArticleImageLink
          to={articleLinkPath}
          onMouseEnter={() => setIsImageHovering(true)}
          onMouseLeave={() => setIsImageHovering(false)}
        >
          <GlassRectangle
            articleListPageClassName="article-list-page"
            glassDarkShadowBlur={
              isHoveringOverall(isImageHovering, isLinkHovering) ? 0.4 : 0
            }
            glassDarkShadowHorizontalOffset={
              isHoveringOverall(isImageHovering, isLinkHovering) ? 0.3 : 0.1
            }
            glassDarkShadowVerticalOffset={
              isHoveringOverall(isImageHovering, isLinkHovering) ? 0.3 : 0.1
            }
            glassLightShadowBlur={
              isHoveringOverall(isImageHovering, isLinkHovering) ? 0.4 : 0
            }
            glassLightShadowHorizontalOffset={
              isHoveringOverall(isImageHovering, isLinkHovering) ? -0.3 : -0.1
            }
            glassLightShadowVerticalOffset={
              isHoveringOverall(isImageHovering, isLinkHovering) ? -0.3 : -0.1
            }
            imageAlt={articleImageAlt}
            imageSrc={articleImageSrc}
            opacity={
              isHoveringOverall(isImageHovering, isLinkHovering) ? 0.75 : 1
            }
          />
        </ArticleImageLink>
      </ArticleImageWrapper>

      <ArticleDescriptionContainer>
        <ArticleAdditionalInfo>
          <ArticleCategory>
            <Paragraph
              {...(isHoveringOverall(isTitleHovering, isLinkHovering) && {
                opacity: 0.8,
              })}
            >
              {articleCategory}
            </Paragraph>
          </ArticleCategory>

          <ArticleTags>
            {articleTags.map((tag) => (
              <Paragraph key={`${tag.slug}-${tag.id}`}>{tag.name}</Paragraph>
            ))}
          </ArticleTags>
        </ArticleAdditionalInfo>

        <ArticleAdditionalInfo>
          <ArticleDate>{articleDate}</ArticleDate>

          <ArticleReadTime>
            {articleReadingTime < 60
              ? `${Math.round(articleReadingTime)} sec`
              : `${Math.floor(articleReadingTime / 60)} min`}
            &nbsp;read
          </ArticleReadTime>
        </ArticleAdditionalInfo>

        <ArticleTitle>
          <ArticleTitleLink
            to={articleLinkPath}
            onMouseEnter={() => setIsTitleHovering(true)}
            onMouseLeave={() => setIsTitleHovering(false)}
          >
            <HeadingTertiary>{articleTitle}</HeadingTertiary>
          </ArticleTitleLink>
        </ArticleTitle>

        <ArticleDescription>
          <Paragraph>{articleDescription}</Paragraph>
        </ArticleDescription>

        <ArticleLinkWrapper>
          <ArticleLink
            to={articleLinkPath}
            onMouseEnter={() => setIsLinkHovering(true)}
            onMouseLeave={() => setIsLinkHovering(false)}
          >
            Read more
          </ArticleLink>
        </ArticleLinkWrapper>
      </ArticleDescriptionContainer>
    </ArticleContainerStyle>
  );
};

export default ArticleListContainer;
