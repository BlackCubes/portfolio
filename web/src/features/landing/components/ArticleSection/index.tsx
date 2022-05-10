import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import noImage from 'assets/img/no-image.png';

import LineSeparator from 'common/components/LineSeparator';

import { useIsHovering } from 'common/hooks';

import { IArticle } from 'common/models';

import HeadingSecondary from 'common/typography/HeadingSecondary';
import Paragraph from 'common/typography/Paragraph';

import environment from 'environment';

import {
  Container,
  ExploreMoreLink,
  ExploreMoreWrapper,
  Introduction,
  Section,
  SectionTitle,
  Wrapper,
} from './styles';
import ArticleContainer from './ArticleContainer';

type TArticlesData = Pick<
  IArticle,
  | 'description'
  | 'header_image'
  | 'id'
  | 'title'
  | 'uuid'
  | 'reading_time'
  | 'category'
  | 'tags'
> & {
  meta: Pick<IArticle['meta'], 'slug' | 'first_published_at'>;
};

interface IArticleSection {
  articlesData: TArticlesData[] | [];
  finishIsFirstMount: boolean;
}

const ArticleSection: FC<IArticleSection> = ({
  articlesData,
  finishIsFirstMount,
}) => {
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const introAnimateControls = useAnimation();
  const { inView: introInView, ref: introRef } = useInView();

  const viewMoreAnimateControls = useAnimation();
  const { inView: viewMoreInView, ref: viewMoreRef } = useInView();

  const [isHovering, setIsHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, titleAnimateControls, titleInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && introInView) {
        introAnimateControls.start('visible');
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, introAnimateControls, introInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && viewMoreInView) {
        viewMoreAnimateControls.start('visible');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, viewMoreAnimateControls, viewMoreInView]);

  return (
    <Section className="default-margin-bottom">
      <SectionTitle animate={titleAnimateControls} ref={titleRef}>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Articles
        </HeadingSecondary>
      </SectionTitle>

      <Container>
        <LineSeparator rotateClass="positive-rotate" />

        <Introduction animate={introAnimateControls} ref={introRef}>
          <Paragraph>
            I like to write that helps others understand programming,
            mathematics, science, and other related technical fields. I also
            like to write film and book analysis, philosophy, and other things
            that I am interested in.
          </Paragraph>
        </Introduction>

        <Wrapper>
          {articlesData.length > 0 &&
            articlesData.map((articleData, articleIndex) => (
              <React.Fragment key={articleData.uuid}>
                <ArticleContainer
                  isExploreLinkHovering={isHovering}
                  articleClass={`article${articleIndex + 1}`}
                  articleImageAlt={articleData.title}
                  articleImageSrc={
                    articleData.header_image
                      ? environment.apiRoute + articleData.header_image
                      : noImage
                  }
                  articleLinkPath={`/articles/${articleData.meta.slug}`}
                  articleTitle={articleData.title}
                  finishIsFirstMount={finishIsFirstMount}
                />
              </React.Fragment>
            ))}
        </Wrapper>
      </Container>

      <ExploreMoreWrapper animate={viewMoreAnimateControls} ref={viewMoreRef}>
        <ExploreMoreLink
          to="/articles"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Explore all articles
        </ExploreMoreLink>
      </ExploreMoreWrapper>
    </Section>
  );
};

export default ArticleSection;
