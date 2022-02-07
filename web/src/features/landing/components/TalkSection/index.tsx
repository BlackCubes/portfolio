import React, { FC } from 'react';

import LineSeparator from 'common/components/LineSeparator';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { Container, Section, SectionTitle } from './styles';

const TalkSection: FC = () => (
  <Section className="default-container">
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        Talks
      </HeadingSecondary>
    </SectionTitle>

    <Container>
      <LineSeparator />
    </Container>
  </Section>
);

export default TalkSection;
