import React, { FC } from 'react';

import talkPresentation1 from 'assets/img/talk-presentation1.png';
import talkPresentation2 from 'assets/img/talk-presentation2.png';

import LineSeparator from 'common/components/LineSeparator';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { Container, Section, SectionTitle } from './styles';
import TalkContainer, { ITalkContainer } from './TalkContainer';

const talkContainerData: ITalkContainer[] = [
  {
    talkImageAlt: 'Django Part 1 Presentation',
    talkImageSrc: talkPresentation1,
    talkLinkPath: 'https://vimeo.com/659389997',
    talkTitle:
      '"Django Magic: MVT" Developer Connect Presentation @ Bitwise Industries',
  },
  {
    reverseClass: 'reverse',
    talkImageAlt: 'Redux Toolkit Presentation',
    talkImageSrc: talkPresentation2,
    talkLinkPath:
      'https://us02web.zoom.us/rec/play/coJ_z0w_gxEy5gP6iFtG1FLEuzuWey7dumrFH2xZ3rQQwGCBdy91Exb3Jyu2odOXj39rp-WKgEmPad2J.9De7TgEACj6xPmx3?continueMode=true',
    talkTitle:
      '"Converting Legacy Redux To Redux Toolkit" Developer Connect Presentation @ Bitwise Industries',
  },
];

const TalkSection: FC = () => (
  <Section>
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        Talks
      </HeadingSecondary>
    </SectionTitle>

    <LineSeparator />

    <Container>
      {talkContainerData.map((talkData) => (
        <React.Fragment
          key={talkData.talkImageAlt.toLowerCase().split(' ').join('-')}
        >
          <TalkContainer
            reverseClass={talkData.reverseClass}
            talkImageAlt={talkData.talkImageAlt}
            talkImageSrc={talkData.talkImageSrc}
            talkLinkPath={talkData.talkLinkPath}
            talkTitle={talkData.talkTitle}
          />
        </React.Fragment>
      ))}
    </Container>
  </Section>
);

export default TalkSection;
