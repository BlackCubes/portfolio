import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import HeadingSecondary from 'common/typography/HeadingSecondary';
import Paragraph from 'common/typography/Paragraph';

import {
  ExternalLink,
  Italic,
  ParagraphWrapper,
  Section,
  SectionTitle,
} from './styles';

const MoreSection: FC = () => {
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
    <Section animate={sectionAnimateControls} ref={sectionRef}>
      <SectionTitle animate={titleAnimateControls} ref={titleRef}>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          More
        </HeadingSecondary>
      </SectionTitle>

      <ParagraphWrapper>
        <Paragraph>
          I enjoy reading as many books as I can. I am currently reading George
          R.R. Martin&apos;s&nbsp;<Italic>Game of Thrones</Italic> series
          (currently at the fourth book 😄), Isaac Asimov&apos;s&nbsp;
          <Italic>Foundation</Italic>
          &nbsp;series (at the third book 😮), J.R.R. Tolkien&apos;s&nbsp;
          <Italic>Unfinished Tales</Italic>, and Stephen King&apos;s&nbsp;
          <Italic>It</Italic>. My favorite book is <Italic>Dune</Italic> by
          Frank Herbert.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          I also enjoy watching films and television with&nbsp;
          <Italic>Children of Men</Italic> by Alfonso Cuarón being my favorite
          movie of all time, and my favorite TV show is a tie between&nbsp;
          <Italic>Breaking Bad</Italic> and <Italic>Attack on Titan</Italic>.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          A few minor things about me is that I like to be active by going to
          the gym, running, and hiking with rock climbing as my next goal. I
          love videogames with <Italic>Half-Life 2</Italic> being my all-time
          favorite. From time-to-time, I continue to learn physics and how to
          apply them computationally. Lastly, I enjoy helping others whether it
          is community service or teaching.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          If you want to connect with me for coffee, collaboration, or anything
          else, then&nbsp;
          <ExternalLink
            href="https://twitter.com/_BlackCubes_"
            target="_blank"
            rel="noopener"
          >
            hit me up on Twitter
          </ExternalLink>
          &nbsp;or email (
          <ExternalLink href="mailto:gutierrezelias1991@gmail.com">
            gutierrezelias1991@gmail.com
          </ExternalLink>
          ).
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          This site was created with React, TypeScript, Redux Toolkit, React
          Router, Styled-Components, and Framer for the Frontend. It was also
          created with Django, Wagtail CMS, and Django REST Framework for the
          Backend.
        </Paragraph>
      </ParagraphWrapper>
    </Section>
  );
};

export default MoreSection;
