import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import HeadingSecondary from 'common/typography/HeadingSecondary';
import Paragraph from 'common/typography/Paragraph';

import { ParagraphWrapper, Section, SectionTitle } from './styles';

const BeliefsSection: FC = () => {
  const sectionAnimateControls = useAnimation();
  const { inView: sectionInView, ref: sectionRef } = useInView();

  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionInView) {
        sectionAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [sectionAnimateControls, sectionInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [titleAnimateControls, titleInView]);

  return (
    <Section
      animate={sectionAnimateControls}
      className="default-margin-bottom"
      ref={sectionRef}
    >
      <SectionTitle animate={titleAnimateControls} ref={titleRef}>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Beliefs
        </HeadingSecondary>
      </SectionTitle>

      <ParagraphWrapper>
        <Paragraph>
          As an avid learner, I was a self-taught programmer long before
          becoming an apprentice or taking the courses at Bitwise. Being
          self-taught was difficult for me and created imposter syndrome. I
          always felt like I was not good enough and needed to know more about
          the magic of coding. Overtime, I have learned to have self-confidence
          in my abilities, asking for guidance, and knowing when to just get up
          and take a walk.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          I believe that anyone can become a programmer no matter what
          background they come from. I believe that if you have tenacity,
          perseverance, and tolerance within yourself then you can understand
          the complexity of programming.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          I also believe in having good communication, understanding, and
          patience with others to develop healthy relationships. When these
          three pillars are achieved, then achieving three more are possible:
          Better user experience, painless documentation for developers to read,
          and accomplishing a feat together within the team.
        </Paragraph>
      </ParagraphWrapper>
    </Section>
  );
};

export default BeliefsSection;
