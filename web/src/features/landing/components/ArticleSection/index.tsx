import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import noImage from 'assets/img/no-image.png';

import LineSeparator from 'common/components/LineSeparator';

import { useIsHovering } from 'common/hooks';

import { IArticle } from 'common/models';

import HeadingSecondary from 'common/typography/HeadingSecondary';
import Paragraph from 'common/typography/Paragraph';

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
}

const ArticleSection: FC<IArticleSection> = ({ articlesData }) => {
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const introAnimateControls = useAnimation();
  const { inView: introInView, ref: introRef } = useInView();

  const viewMoreAnimateControls = useAnimation();
  const { inView: viewMoreInView, ref: viewMoreRef } = useInView();

  const [isHovering, setIsHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [titleAnimateControls, titleInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (introInView) {
        introAnimateControls.start('visible');
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [introAnimateControls, introInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (viewMoreInView) {
        viewMoreAnimateControls.start('visible');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [viewMoreAnimateControls, viewMoreInView]);

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
            Massa eget egestas purus viverra accumsan in nisl nisi scelerisque
            eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius
            vel pharetra velh.
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
                      ? `http://localhost:8000${articleData.header_image}`
                      : noImage
                  }
                  articleLinkPath={`/articles/${articleData.meta.slug}`}
                  articleTitle={articleData.title}
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
