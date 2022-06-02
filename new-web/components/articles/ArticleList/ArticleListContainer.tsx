import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GlassRectangle from 'common/components/GlassRectangle';

import { useIsHovering } from 'common/hooks';

import { ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import { dateFormat, isHoveringOverall } from 'utils';

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

interface IArticleListContainer {
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
  const containerAnimateControls = useAnimation();

  const { inView: containerInView, ref: containerRef } = useInView();

  const [isLinkHovering, setIsLinkHovering] = useIsHovering();
  const [isImageHovering, setIsImageHovering] = useIsHovering();
  const [isTitleHovering, setIsTitleHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerInView) {
        containerAnimateControls.start('visible');
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [containerAnimateControls, containerInView]);

  return (
    <ArticleContainerStyle
      animate={containerAnimateControls}
      ref={containerRef}
    >
      <ArticleImageWrapper>
        <Link href={articleLinkPath} passHref>
          <ArticleImageLink
            onMouseEnter={() => setIsImageHovering(true)}
            onMouseLeave={() => setIsImageHovering(false)}
          >
            <GlassRectangle
              customClassName="article-list-page"
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
        </Link>
      </ArticleImageWrapper>

      <ArticleDescriptionContainer>
        <ArticleAdditionalInfo>
          <ArticleCategory
            {...(articleTags.length > 0 && {
              className: 'has-tags',
            })}
          >
            <Paragraph>{articleCategory}</Paragraph>
          </ArticleCategory>

          {articleTags.length > 0 && (
            <ArticleTags>
              {articleTags.map((tag) => (
                <Paragraph key={`${tag.slug}-${tag.id}`}>{tag.name}</Paragraph>
              ))}
            </ArticleTags>
          )}
        </ArticleAdditionalInfo>

        <ArticleAdditionalInfo className="article__date-readtime">
          <ArticleDate>
            <Paragraph>{dateFormat('en-US', articleDate)}</Paragraph>
          </ArticleDate>

          <ArticleReadTime>
            <Paragraph>
              {articleReadingTime < 60
                ? `${Math.round(articleReadingTime)} sec`
                : `${Math.floor(articleReadingTime / 60)} min`}
              &nbsp;read
            </Paragraph>
          </ArticleReadTime>
        </ArticleAdditionalInfo>

        <ArticleTitle>
          <Link href={articleLinkPath} passHref>
            <ArticleTitleLink
              onMouseEnter={() => setIsTitleHovering(true)}
              onMouseLeave={() => setIsTitleHovering(false)}
            >
              <HeadingTertiary
                {...(isHoveringOverall(isTitleHovering, isLinkHovering) && {
                  opacity: 0.8,
                })}
              >
                {articleTitle}
              </HeadingTertiary>
            </ArticleTitleLink>
          </Link>
        </ArticleTitle>

        <ArticleDescription>
          <Paragraph>{articleDescription}</Paragraph>
        </ArticleDescription>

        <ArticleLinkWrapper>
          <Link href={articleLinkPath} passHref>
            <ArticleLink
              onMouseEnter={() => setIsLinkHovering(true)}
              onMouseLeave={() => setIsLinkHovering(false)}
            >
              Read more
            </ArticleLink>
          </Link>
        </ArticleLinkWrapper>
      </ArticleDescriptionContainer>
    </ArticleContainerStyle>
  );
};

export default ArticleListContainer;
