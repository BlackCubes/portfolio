import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import LineSeparator from 'common/components/LineSeparator';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { Container, Section, SectionTitle } from './styles';
import TalkContainer, { ITalkContainer } from './TalkContainer';

const talkContainerData: Omit<ITalkContainer, 'finishIsFirstMount'>[] = [
  {
    talkImageAlt: 'Django Part 1 Presentation',
    talkImageSrc: '/talk-presentation1.png',
    talkLinkPath: 'https://vimeo.com/659389997',
    talkTitle:
      '"Django Magic: MVT" Developer Connect Presentation @ Bitwise Industries',
  },
  {
    reverseClass: 'reverse',
    talkImageAlt: 'Redux Toolkit Presentation',
    talkImageSrc: '/talk-presentation2.png',
    talkLinkPath:
      'https://us02web.zoom.us/rec/play/coJ_z0w_gxEy5gP6iFtG1FLEuzuWey7dumrFH2xZ3rQQwGCBdy91Exb3Jyu2odOXj39rp-WKgEmPad2J.9De7TgEACj6xPmx3?continueMode=true',
    talkTitle:
      '"Converting Legacy Redux To Redux Toolkit" Developer Connect Presentation @ Bitwise Industries',
  },
];

interface ITalkSection {
  finishIsFirstMount: boolean;
}

const TalkSection: FC<ITalkSection> = ({ finishIsFirstMount }) => {
  const controls = useAnimation();
  const { inView, ref } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && inView) {
        controls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, controls, inView]);

  return (
    <Section>
      <SectionTitle animate={controls} ref={ref}>
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
              finishIsFirstMount={finishIsFirstMount}
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
};

export default TalkSection;
