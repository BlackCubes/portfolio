import React, { FC } from 'react';

import LineSeparator from 'common/components/LineSeparator';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { Container, Section, SectionTitle } from './styles';

const WorkSection: FC = () => (
  <Section className="default-container default-margin-bottom navbar-footer-space">
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        Work
      </HeadingSecondary>
    </SectionTitle>

    <Container>
      <LineSeparator rotateClass="negative-rotate" />
    </Container>
  </Section>
);

export default WorkSection;
