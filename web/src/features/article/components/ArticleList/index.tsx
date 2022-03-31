import React, { FC } from 'react';

import noImage from 'assets/img/no-image.png';

import LineSeparator from 'common/components/LineSeparator';

import { IArticle } from 'common/models';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import ArticleListContainer from './ArticleListContainer';
import { Container, Section, SectionTitle } from './styles';

type TArticlesData = Pick<
  IArticle,
  | 'description'
  | 'header_image'
  | 'id'
  | 'reading_time'
  | 'title'
  | 'uuid'
  | 'reading_time'
  | 'category'
  | 'tags'
> & {
  meta: Pick<IArticle['meta'], 'slug' | 'first_published_at'>;
};

interface IArticleList {
  articlesData: TArticlesData[] | [];
}

const ArticleList: FC<IArticleList> = ({ articlesData }) => (
  <Section>
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        Articles
      </HeadingSecondary>
    </SectionTitle>

    <Container>
      <LineSeparator rotateClass="positive-rotate" />

      {articlesData &&
        articlesData.length > 0 &&
        articlesData.map((article) => (
          <ArticleListContainer
            key={article.uuid}
            articleCategory={article.category?.name ?? ''}
            articleDate={article.meta.first_published_at}
            articleDescription={article.description}
            articleImageAlt={article.title}
            articleImageSrc={
              article.header_image
                ? `http://localhost:8000${article.header_image}`
                : noImage
            }
            articleLinkPath={`/articles/${article.meta.slug}`}
            articleReadingTime={article.reading_time}
            articleTags={article.tags}
            articleTitle={article.title}
          />
        ))}
    </Container>
  </Section>
);

export default ArticleList;
