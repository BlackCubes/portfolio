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
          At Aerobotics7, I spearheaded the creation of software architectures
          for controlling drones and efficiently storing landmine detection data
          at a high-speed receiver rate. Managing the full technology stack,
          including DevOps, SQL databases, and security protocols, I
          successfully ensured real-time communication and authentication
          between the drone and users. Additionally, I presented our hardware
          and software technology at the Geneva International Centre for
          Humanitarian Demining (held in Switzerland once a year) to showcase
          our capabilities to government officials, scientists, and engineers.
        </Paragraph>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <Paragraph>
          Previously at Listing Alert, I helped to develop the mobile app with
          bare React Native (non-Expo) along with developing our own API with
          Node.js, Express.js, MongoDB and AWS S3 to be used for the real estate
          agents to get notifications on property listings from potential
          buyers. Additionally, the team and I developed a web dashboard with
          React.js for companies to create agents, offices, and other tasks for
          their needs. In all of the development process, we used Apollo
          GraphQL. Over 1600 agents across the country from RE/MAX to Century 21
          Black Bear Realty use Listing Alert.
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
    </Section>
  );
};

export default ExperienceSection;
