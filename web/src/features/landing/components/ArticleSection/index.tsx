import React, { FC } from 'react';

import dummyArticle1 from 'assets/img/dummy-article1.png';
import dummyArticle2 from 'assets/img/dummy-article2.png';
import dummyArticle3 from 'assets/img/dummy-article3.jpg';

import LineSeparator from 'common/components/LineSeparator';

import { useIsHovering } from 'common/hooks';

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
import ArticleContainer, { IArticleContainer } from './ArticleContainer';

const articleContainerData: Omit<IArticleContainer, 'isExploreLinkHovering'>[] =
  [
    {
      articleClass: 'article1',
      articleImageAlt: 'Dummy Article 1',
      articleImageSrc: dummyArticle1,
      articleLinkPath: '/',
      articleTitle: 'Article Title',
    },
    {
      articleClass: 'article2',
      articleImageAlt: 'Dummy Article 2',
      articleImageSrc: dummyArticle2,
      articleLinkPath: '/',
      articleTitle: 'Article Title',
    },
    {
      articleClass: 'article3',
      articleImageAlt: 'Dummy Article 3',
      articleImageSrc: dummyArticle3,
      articleLinkPath: '/',
      articleTitle: 'Article Title',
    },
  ];

const ArticleSection: FC = () => {
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <Section className="default-container default-margin-bottom">
      <SectionTitle>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Articles
        </HeadingSecondary>
      </SectionTitle>

      <Container>
        <LineSeparator rotateClass="positive-rotate" />

        <Introduction>
          <Paragraph>
            Massa eget egestas purus viverra accumsan in nisl nisi scelerisque
            eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius
            vel pharetra velh.
          </Paragraph>
        </Introduction>

        <Wrapper>
          {articleContainerData.map((articleData) => (
            <React.Fragment
              key={articleData.articleTitle.toLowerCase().split(' ').join('-')}
            >
              <ArticleContainer
                isExploreLinkHovering={isHovering}
                articleClass={articleData.articleClass}
                articleImageAlt={articleData.articleImageAlt}
                articleImageSrc={articleData.articleImageSrc}
                articleLinkPath={articleData.articleLinkPath}
                articleTitle={articleData.articleTitle}
              />
            </React.Fragment>
          ))}
        </Wrapper>
      </Container>

      <ExploreMoreWrapper>
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
