import React, { FC } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import parse from 'html-react-parser';

import noImage from 'assets/img/no-image.png';

import GlassRectangle from 'common/components/GlassRectangle';

import Paragraph from 'common/typography/Paragraph';

import {
  BodyBlockQuote,
  BodyCode,
  BodyEquation,
  BodyImageCaption,
  BodyParagraph,
  CodeContent,
  ImageCaptionContent,
  ImageCaptionImgWrapper,
} from './styles';

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

type TImageCaption = {
  image: string | null;
  caption: string;
};

type TCode = {
  language: string;
  code: string;
};

interface IArticleBody {
  bodyType: string;
  bodyValue: string | TCode | TImageCaption;
}

const ArticleBody: FC<IArticleBody> = ({ bodyType, bodyValue }) => {
  if (bodyType === 'paragraph' && typeof bodyValue === 'string') {
    return (
      <BodyParagraph>
        <MathJaxContext version={3} config={mathJaxConfig}>
          <MathJax hideUntilTypeset="first">{parse(bodyValue)}</MathJax>
        </MathJaxContext>
      </BodyParagraph>
    );
  }

  if (
    bodyType === 'image_with_caption' &&
    typeof bodyValue === 'object' &&
    bodyValue !== null &&
    'image' in bodyValue &&
    'caption' in bodyValue
  ) {
    return (
      <BodyImageCaption>
        <ImageCaptionImgWrapper>
          <GlassRectangle
            customClassName="article-detail-page__caption-image"
            glassDarkShadowBlur={0.4}
            glassDarkShadowHorizontalOffset={0.3}
            glassDarkShadowVerticalOffset={0.3}
            glassLightShadowBlur={0.4}
            glassLightShadowHorizontalOffset={-0.3}
            glassLightShadowVerticalOffset={-0.3}
            imageAlt={bodyValue.caption}
            imageSrc={
              bodyValue.image
                ? `http://localhost:8000${bodyValue.image}`
                : noImage
            }
            opacity={1}
          />
        </ImageCaptionImgWrapper>

        <ImageCaptionContent>{bodyValue.caption}</ImageCaptionContent>
      </BodyImageCaption>
    );
  }

  if (bodyType === 'block_quote' && typeof bodyValue === 'string') {
    return (
      <BodyBlockQuote>
        <Paragraph>{bodyValue}</Paragraph>
      </BodyBlockQuote>
    );
  }

  if (
    bodyType === 'code' &&
    typeof bodyValue === 'object' &&
    bodyValue !== null &&
    'language' in bodyValue &&
    'code' in bodyValue
  ) {
    return (
      <BodyCode>
        <CodeContent className={bodyValue.language}>
          {bodyValue.code}
        </CodeContent>
      </BodyCode>
    );
  }

  if (bodyType === 'equation' && typeof bodyValue === 'string') {
    return (
      <BodyEquation>
        <MathJaxContext version={3} config={mathJaxConfig}>
          <MathJax hideUntilTypeset="first">{parse(bodyValue)}</MathJax>
        </MathJaxContext>
      </BodyEquation>
    );
  }

  return <Paragraph>No body</Paragraph>;
};

export default ArticleBody;
