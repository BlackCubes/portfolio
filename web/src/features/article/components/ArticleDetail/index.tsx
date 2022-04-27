import React, { FC, useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import noImage from 'assets/img/no-image.png';
import twitterIconBlack from 'assets/img/twitter-logo_black.png';
import twitterIconWhite from 'assets/img/twitter-logo_white.png';

import Body from 'common/components/Body';
import GlassRectangle from 'common/components/GlassRectangle';

import { useThemeContext } from 'common/contexts';

import { IArticle } from 'common/models';

import HeadingPrimary from 'common/typography/HeadingPrimary';
import Paragraph from 'common/typography/Paragraph';

import { dateFormat } from 'utils';

import {
  Article,
  ArticleAdditionalInfo,
  ArticleAuthor,
  ArticleCategory,
  ArticleBodyContainer,
  ArticleDate,
  ArticleDescription,
  ArticleHeaderImage,
  ArticleReadTime,
  ArticleTags,
  ArticleTitle,
  AuthorTwitterContainer,
  AuthorTwitterIcon,
  AuthorTwitterIconWrapper,
  AuthorTwitterLink,
} from './styles';

interface IArticleDetail {
  articleData: IArticle;
}

const ArticleDetail: FC<IArticleDetail> = ({ articleData }) => {
  const [twitterIcon, setTwitterIcon] = useState(twitterIconBlack);

  const { isDark } = useThemeContext();

  const categoryTagsAnimateControls = useAnimation();
  const { inView: categoryTagsInView, ref: categoryTagsRef } = useInView();

  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const authorAnimateControls = useAnimation();
  const { inView: authorInView, ref: authorRef } = useInView();

  const twitterIconLinkAnimateControls = useAnimation();
  const { inView: twitterContainerInView, ref: twitterContainerRef } =
    useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTwitterIcon(!isDark ? twitterIconBlack : twitterIconWhite);
    }, 500);

    return () => clearTimeout(timer);
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoryTagsInView) {
        categoryTagsAnimateControls.start('visible');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [categoryTagsAnimateControls, categoryTagsInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [titleAnimateControls, titleInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (authorInView) {
        authorAnimateControls.start('visible');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [authorAnimateControls, authorInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (twitterContainerInView) {
        twitterIconLinkAnimateControls.start('visible');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [twitterIconLinkAnimateControls, twitterContainerInView]);

  return (
    <Article>
      <ArticleAdditionalInfo ref={categoryTagsRef}>
        <ArticleCategory
          animate={categoryTagsAnimateControls}
          {...(articleData.tags.length > 0 && {
            className: 'has-tags',
          })}
        >
          <Paragraph>{articleData.category?.name ?? ''}</Paragraph>
        </ArticleCategory>

        {articleData.tags.length > 0 && (
          <ArticleTags>
            {articleData.tags.map((tag, tagIndex) => (
              <Paragraph
                key={`${tag.slug}-${tag.id}`}
                // FOR ANIMATING WITH FRAMER-MOTION
                animate={categoryTagsAnimateControls}
                custom={tagIndex}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: (customDelay) => ({
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: customDelay * 0.1,
                    },
                  }),
                }}
              >
                {tag.name}
              </Paragraph>
            ))}
          </ArticleTags>
        )}
      </ArticleAdditionalInfo>

      <ArticleTitle animate={titleAnimateControls} ref={titleRef}>
        <HeadingPrimary>{articleData.title}</HeadingPrimary>
      </ArticleTitle>

      <ArticleAuthor animate={authorAnimateControls} ref={authorRef}>
        <Paragraph>Elias Gutierrez</Paragraph>
      </ArticleAuthor>

      <AuthorTwitterContainer ref={twitterContainerRef}>
        <AuthorTwitterIconWrapper animate={twitterIconLinkAnimateControls}>
          <AuthorTwitterIcon
            src={twitterIcon}
            alt="Twitter Logo"
            title="Follow Elias Gutierrez on Twitter"
          />
        </AuthorTwitterIconWrapper>

        <AuthorTwitterLink
          animate={twitterIconLinkAnimateControls}
          href="https://twitter.com/_BlackCubes_"
          target="_blank"
          rel="noopener"
        >
          @_BlackCubes_
        </AuthorTwitterLink>
      </AuthorTwitterContainer>

      <ArticleAdditionalInfo className="article__date-readtime">
        <ArticleDate>
          <Paragraph>
            {dateFormat('en-US', articleData.meta.first_published_at)}
          </Paragraph>
        </ArticleDate>

        <ArticleReadTime>
          <Paragraph>
            {articleData.reading_time < 60
              ? `${Math.round(articleData.reading_time)} sec`
              : `${Math.floor(articleData.reading_time / 60)} min`}
            &nbsp;read
          </Paragraph>
        </ArticleReadTime>
      </ArticleAdditionalInfo>

      <ArticleDescription>
        <Paragraph>{articleData.description}</Paragraph>
      </ArticleDescription>

      <ArticleHeaderImage>
        <GlassRectangle
          customClassName="article-detail-page__header-image"
          glassDarkShadowBlur={0.4}
          glassDarkShadowHorizontalOffset={0.3}
          glassDarkShadowVerticalOffset={0.3}
          glassLightShadowBlur={0.4}
          glassLightShadowHorizontalOffset={-0.3}
          glassLightShadowVerticalOffset={-0.3}
          imageAlt="Header image for article"
          imageSrc={
            articleData.header_image
              ? `http://localhost:8000${articleData.header_image}`
              : noImage
          }
          opacity={1}
        />
      </ArticleHeaderImage>

      <ArticleBodyContainer>
        {articleData.body.map((body) => (
          <Body key={body.id} bodyType={body.type} bodyValue={body.value} />
        ))}
      </ArticleBodyContainer>
    </Article>
  );
};

export default ArticleDetail;
