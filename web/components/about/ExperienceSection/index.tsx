import { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import HeadingSecondary from 'common/typography/HeadingSecondary';
import Paragraph from 'common/typography/Paragraph';

import { ParagraphWrapper, Section, SectionTitle } from './styles';

const ExperienceSection: FC = () => {
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
          Experience
        </HeadingSecondary>
      </SectionTitle>

      <ParagraphWrapper>
        <Paragraph>
          At Listing Alert, I help to develop the mobile app with bare React
          Native (non-Expo) along with developing our own API with Node,
          Express, MongoDB and AWS S3 to be used for the real estate agents to
          get notifications on property listings from potential buyers.
          Additionally, the team and I developed a web dashboard with React for
          companies to create agents, offices, and other tasks for their needs.
          In all of the development process, we used Apollo GraphQL. Over 1600
          agents across the country from RE/MAX to Century 21 Black Bear Realty
          use Listing Alert.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          I am proud of what we do at Listing Alert. I am proud of the work and
          vision we have. I am proud of the entire team from the devs to
          marketing to the designers to the CEO and COO. Till this day and
          forever in the future, I will have the Listing Alert logo sticker on
          my MacBook 💙.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          In addition, I worked on React for about two and a half years, and
          before that I worked on vanilla JavaScript for three years. I also
          worked on Django, Python, Node, Express, MongoDB, MySQL, and
          PostgreSQL for three to four years. Over the course of these years, I
          learned how to make better and reusable code that is readable along
          with clean file structure which follows best practices.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          Before becoming a React Developer for AlphaWorks under Bitwise
          Industries, I was taking courses from Bitwise starting with React
          which was an intensive 6-week journey on learning class and function
          components, React Router, React Context API, and Redux. I also took
          courses on CSS, JavaScript, and the Backend. For the Backend course,
          it lasted for 8-weeks on learning Python and databases, different
          types of databases (SQL and NoSQL), designing a database, using
          Django, and creating a final project that is full-stack using React
          and Django with our own database design.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          I also teach React and other web development courses at Bitwise
          Industries.
        </Paragraph>
      </ParagraphWrapper>
    </Section>
  );
};

export default ExperienceSection;
