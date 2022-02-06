import React, { FC } from 'react';

import LineSeparator from 'common/components/LineSeparator';

import { useIsHovering } from 'common/hooks';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import {
  Container,
  ExploreMoreLink,
  ExploreMoreWrapper,
  Section,
  SectionTitle,
} from './styles';

const ArticleSection: FC = () => {
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <Section className="default-container">
      <SectionTitle>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Articles
        </HeadingSecondary>
      </SectionTitle>

      <Container>
        <LineSeparator rotateClass="positive-rotate" />

        {isHovering ? 'Hovering' : 'Not hovering'}
      </Container>

      <ExploreMoreWrapper>
        <ExploreMoreLink
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
