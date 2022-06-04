import { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import LineSeparator from 'common/components/LineSeparator';

import { IArticle } from 'common/models';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import environment from 'environment';

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

const ArticleList: FC<IArticleList> = ({ articlesData }) => {
  const titleAnimateControls = useAnimation();

  const { inView: titleInView, ref: titleRef } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [titleAnimateControls, titleInView]);

  return (
    <Section>
      <SectionTitle animate={titleAnimateControls} ref={titleRef}>
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
                  ? `${
                      environment.isProduction
                        ? article.header_image
                        : environment.apiRoute + article.header_image
                    }`
                  : '/no-image.png'
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
};

export default ArticleList;
