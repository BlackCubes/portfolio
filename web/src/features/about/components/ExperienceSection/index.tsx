import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import HeadingSecondary from 'common/typography/HeadingSecondary';
import Paragraph from 'common/typography/Paragraph';

import { Italic, ParagraphWrapper, Section, SectionTitle } from './styles';

const ExperienceSection: FC = () => {
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const sectionAnimateControls = useAnimation();
  const { inView: sectionInView, ref: sectionRef } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [titleAnimateControls, titleInView]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionInView) {
        sectionAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [sectionAnimateControls, sectionInView]);

  return (
    <Section
      animate={sectionAnimateControls}
      className="default-margin-bottom"
      ref={sectionRef}
    >
      <SectionTitle animate={titleAnimateControls} ref={titleRef}>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Experience
        </HeadingSecondary>
      </SectionTitle>

      <ParagraphWrapper>
        <Paragraph>
          As an apprentice, I learned the fundamentals of React, TypeScript,
          Redux Toolkit, and other technologies such as Framer and
          Styled-Components. I also learned about the different design styles
          and wireframing, and how to use Figma individually and as a team. I
          was also taught on algorithms, data structure, web performance, and
          the importance of accessibility.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          In the apprenticeship, I was put with different teams on setting up
          projects in GitHub, creating project boards, setting up pull request
          and issue templates, creating a README for projects, and code
          versioning (tagging and releases). We were also taught on branch
          structure and protections, managing branches, how to write commit
          messages, and writing code reviews.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          During my apprenticeship, I was given an opportunity to co-teach a
          React course from Bitwise for 6-weeks, and currently help to sub
          co-teach on React and other courses such as
          <Italic>Websites for Beginners</Italic>.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          Before becoming an apprentice, I was taking courses from Bitwise
          starting with React which was an intensive 6-week journey on learning
          class and function components, React Router, React Context API, and
          Redux. I also took courses on CSS, JavaScript, and the Backend. For
          the Backend course, it lasted for 8-weeks on learning Python and
          databases, different types of databases (SQL and NoSQL), designing a
          database, using Django, and creating a final project that is full
          stack using React and Django with our own database design.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          I also currently tutor at Bitwise&apos;s study groups including when I
          was taking their courses before my apprenticeship.
        </Paragraph>
      </ParagraphWrapper>
    </Section>
  );
};

export default ExperienceSection;
