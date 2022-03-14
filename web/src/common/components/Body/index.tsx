import React, { FC } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import noImage from 'assets/img/no-image.png';

import GlassRectangle from 'common/components/GlassRectangle';

import Paragraph from 'common/typography/Paragraph';

import {
  BlockQuoteContent,
  BlockQuoteQuotation,
  BodyBlockQuote,
  BodyCode,
  BodyEquation,
  BodyImageCaption,
  BodyParagraph,
  CodePreTag,
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

interface IBody {
  bodyType: string;
  bodyValue: string | TCode | TImageCaption;
}

const Body: FC<IBody> = ({ bodyType, bodyValue }) => {
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
            customClassName="work-detail-page__caption-image"
            glassDarkShadowBlur={0.2}
            glassDarkShadowHorizontalOffset={0.1}
            glassDarkShadowVerticalOffset={0.1}
            glassLightShadowBlur={0.2}
            glassLightShadowHorizontalOffset={-0.1}
            glassLightShadowVerticalOffset={-0.1}
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
        <BlockQuoteQuotation>&ldquo;</BlockQuoteQuotation>

        <BlockQuoteContent>
          <Paragraph>{bodyValue}</Paragraph>
        </BlockQuoteContent>
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
        <SyntaxHighlighter
          language={bodyValue.language}
          PreTag={CodePreTag}
          showLineNumbers
          style={materialLight}
          wrapLongLines
        >
          {bodyValue.code}
        </SyntaxHighlighter>
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

export default Body;
