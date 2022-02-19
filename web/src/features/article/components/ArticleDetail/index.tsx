import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import noImage from 'assets/img/no-image.png';
import twitterIconBlack from 'assets/img/twitter-logo_black.png';

import { useGetArticleByIdQuery } from 'common/api/articleExtendedApi';

import GlassRectangle from 'common/components/GlassRectangle';

import HeadingPrimary from 'common/typography/HeadingPrimary';
import Paragraph from 'common/typography/Paragraph';

import { dateFormat } from 'utils';

import ArticleBody from './ArticleBody';
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

type TArticleParams = {
  articleId: string;
};

const ArticleDetail: FC = () => {
  const [doNotInitiateQuery, setDoNotInitiateQuery] = useState<boolean>(true);
  const { articleId } = useParams<TArticleParams>();

  const {
    data: articleData,
    isError,
    isFetching,
    isSuccess,
  } = useGetArticleByIdQuery(articleId ? parseInt(articleId, 10) : 0, {
    skip: doNotInitiateQuery,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleId) {
        setDoNotInitiateQuery(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [articleId]);

  if (isFetching) {
    return <HeadingPrimary>Fetching!</HeadingPrimary>;
  }

  if (isError) {
    return <HeadingPrimary>Error!</HeadingPrimary>;
  }

  if (isSuccess && !articleData) {
    return <HeadingPrimary>There is no article.</HeadingPrimary>;
  }

  return articleData ? (
    <Article className="default-container navbar-footer-space">
      <ArticleAdditionalInfo>
        <ArticleCategory>
          <Paragraph>{articleData.categories[0].name}</Paragraph>
        </ArticleCategory>

        <ArticleTags>
          {articleData.tags.length > 0 &&
            articleData.tags.map((tag) => (
              <Paragraph key={`${tag.slug}-${tag.id}`}>{tag.name}</Paragraph>
            ))}
        </ArticleTags>
      </ArticleAdditionalInfo>

      <ArticleTitle>
        <HeadingPrimary>{articleData.title}</HeadingPrimary>
      </ArticleTitle>

      <ArticleAuthor>
        <Paragraph>Elias Gutierrez</Paragraph>
      </ArticleAuthor>

      <AuthorTwitterContainer>
        <AuthorTwitterIconWrapper>
          <AuthorTwitterIcon
            src={twitterIconBlack}
            alt="Twitter Logo"
            title="Follow Elias Gutierrez on Twitter"
          />
        </AuthorTwitterIconWrapper>

        <AuthorTwitterLink
          href="https://twitter.com/_BlackCubes_"
          target="_blank"
          rel="noopener"
        >
          @_BlackCubes_
        </AuthorTwitterLink>
      </AuthorTwitterContainer>

      <ArticleAdditionalInfo>
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
          articleListPageClassName="article-list-page"
          glassDarkShadowBlur={0.4}
          glassDarkShadowHorizontalOffset={0.3}
          glassDarkShadowVerticalOffset={0.3}
          glassLightShadowBlur={0.4}
          glassLightShadowHorizontalOffset={-0.3}
          glassLightShadowVerticalOffset={-0.3}
          imageAlt="Header image for article"
          imageSrc={articleData.header_image ?? noImage}
          opacity={1}
        />
      </ArticleHeaderImage>

      <ArticleBodyContainer>
        {articleData.body.map((body) => (
          <ArticleBody
            key={body.id}
            bodyType={body.type}
            bodyValue={body.value}
          />
        ))}
      </ArticleBodyContainer>
    </Article>
  ) : null;
};

export default ArticleDetail;
