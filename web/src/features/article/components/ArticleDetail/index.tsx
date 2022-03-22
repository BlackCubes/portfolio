import React, { FC } from 'react';

import noImage from 'assets/img/no-image.png';
import twitterIconBlack from 'assets/img/twitter-logo_black.png';

import Body from 'common/components/Body';
import GlassRectangle from 'common/components/GlassRectangle';

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

const ArticleDetail: FC<IArticleDetail> = ({ articleData }) => (
  <Article>
    <ArticleAdditionalInfo>
      <ArticleCategory
        {...(articleData.tags.length > 0 && {
          className: 'has-tags',
        })}
      >
        <Paragraph>{articleData.category?.name ?? ''}</Paragraph>
      </ArticleCategory>

      {articleData.tags.length > 0 && (
        <ArticleTags>
          {articleData.tags.map((tag) => (
            <Paragraph key={`${tag.slug}-${tag.id}`}>{tag.name}</Paragraph>
          ))}
        </ArticleTags>
      )}
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

export default ArticleDetail;
