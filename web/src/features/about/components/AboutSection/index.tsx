import React, { FC } from 'react';

import HeadingPrimary from 'common/typography/HeadingPrimary';
import Paragraph from 'common/typography/Paragraph';

import { MainAboutWrapper, SecondaryAboutWrapper, Section } from './styles';

const AboutSection: FC = () => (
  <Section>
    <MainAboutWrapper>
      <HeadingPrimary>
        Hello! I love drinking coffee while learning and improving on new and
        existing technologies
      </HeadingPrimary>
    </MainAboutWrapper>

    <SecondaryAboutWrapper>
      <Paragraph>
        I am based in California with a BS degree in Physics from UCLA currently
        working as an apprentice on React and React Native under Bitwise
        Industries. I have experience with Django, Node, React, and Figma on
        creating and solving real-world problems for the users to enjoy
      </Paragraph>
    </SecondaryAboutWrapper>
  </Section>
);

export default AboutSection;
