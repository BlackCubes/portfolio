import { FC } from 'react';

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
        I am a California-based with a BS degree in Physics from UCLA currently
        working as a Software Developer at Listing Alert under Bitwise
        Industries. I have experiences with Django, Node, React, Figma/Lucid
        Charts and other platforms and tools to facilitate on creating and
        solving real-world problems for the users to enjoy, and the companies to
        succeed their vision
      </Paragraph>
    </SecondaryAboutWrapper>
  </Section>
);

export default AboutSection;
