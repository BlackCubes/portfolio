import React, { FC, useEffect, useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import noImage from 'assets/img/no-image.png';
import twitterIconBlack from 'assets/img/twitter-logo_black.png';

import { useGetArticleByIdQuery } from 'common/api/articleExtendedApi';

import GlassRectangle from 'common/components/GlassRectangle';

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
  BodyBlockQuote,
  BodyCode,
  BodyEquation,
  BodyImageCaption,
  BodyParagraph,
  CodeContent,
  ImageCaptionContent,
  ImageCaptionImgWrapper,
} from './styles';

type TArticleParams = {
  articleId: string;
};

const mathJaxConfig = {
  loader: { load: ['[tex]/html'] },
  tex: {
    packages: { '[+]': ['html'] },
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
  },
};

const ArticleDetailSection: FC = () => {
  const [isParamsReady, setIsParamsReady] = useState<boolean>(false);
  const { articleId } = useParams<TArticleParams>();

  const {
    data: articleData,
    isError,
    isFetching,
    isSuccess,
  } = useGetArticleByIdQuery(articleId ? parseInt(articleId, 10) : 0, {
    skip: isParamsReady,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleId) {
        setIsParamsReady(true);
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
    <Article>
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

        <AuthorTwitterLink>@_BlackCubes_</AuthorTwitterLink>
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
          imageAlt="Profile image of Elias Gutierrez"
          imageSrc={articleData.header_image ?? noImage}
          opacity={1}
        />
      </ArticleHeaderImage>

      <ArticleBodyContainer>
        {articleData.body.map((body) => {
          let parsedHtml: React.ReactNode | string = '';

          if (body.type === 'paragraph' && typeof body.value === 'string') {
            parsedHtml = (
              <BodyParagraph>
                <MathJaxContext version={3} config={mathJaxConfig}>
                  <MathJax hideUntilTypeset="first">
                    {parse(body.value)}
                  </MathJax>
                </MathJaxContext>
              </BodyParagraph>
            );
          }

          if (
            body.type === 'image_with_caption' &&
            typeof body.value === 'object' &&
            body.value !== null &&
            'image' in body.value &&
            'caption' in body.value
          ) {
            parsedHtml = (
              <BodyImageCaption>
                <ImageCaptionImgWrapper>
                  <GlassRectangle
                    articleListPageClassName="article-list-page"
                    glassDarkShadowBlur={0.4}
                    glassDarkShadowHorizontalOffset={0.3}
                    glassDarkShadowVerticalOffset={0.3}
                    glassLightShadowBlur={0.4}
                    glassLightShadowHorizontalOffset={-0.3}
                    glassLightShadowVerticalOffset={-0.3}
                    imageAlt="Profile image of Elias Gutierrez"
                    imageSrc={body.value.image ?? noImage}
                    opacity={1}
                  />
                </ImageCaptionImgWrapper>

                <ImageCaptionContent>{body.value.caption}</ImageCaptionContent>
              </BodyImageCaption>
            );
          }

          if (body.type === 'block_quote' && typeof body.value === 'string') {
            parsedHtml = (
              <BodyBlockQuote>
                <Paragraph>{body.value}</Paragraph>
              </BodyBlockQuote>
            );
          }

          if (
            body.type === 'code' &&
            typeof body.value === 'object' &&
            body.value !== null &&
            'language' in body.value &&
            'code' in body.value
          ) {
            parsedHtml = (
              <BodyCode>
                <CodeContent className={body.value.language}>
                  {body.value.code}
                </CodeContent>
              </BodyCode>
            );
          }

          if (body.type === 'equation' && typeof body.value === 'string') {
            parsedHtml = (
              <BodyEquation>
                <MathJaxContext version={3} config={mathJaxConfig}>
                  <MathJax hideUntilTypeset="first">
                    {parse(body.value)}
                  </MathJax>
                </MathJaxContext>
              </BodyEquation>
            );
          }

          return <React.Fragment key={body.id}>{parsedHtml}</React.Fragment>;
        })}
      </ArticleBodyContainer>
    </Article>
  ) : null;
};

export default ArticleDetailSection;
