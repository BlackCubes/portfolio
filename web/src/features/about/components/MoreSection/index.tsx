import React, { FC } from 'react';

import HeadingSecondary from 'common/typography/HeadingSecondary';
import Paragraph from 'common/typography/Paragraph';

import { ParagraphWrapper, Section, SectionTitle } from './styles';

const MoreSection: FC = () => (
  <Section>
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        More
      </HeadingSecondary>
    </SectionTitle>

    <ParagraphWrapper>
      <Paragraph>
        I enjoy reading as many books as I can. I am currently reading George
        R.R. Martin&apos;s Game of Thrones series (currently at the fourth book
        😄), Isaac Asimov&apos;s Foundation series (at the third book 😮),
        J.R.R. Tolkien&apos;s Unfinished Tales, and Stephen King&apos;s It. My
        favorite book is Dune by Frank Herbert.
      </Paragraph>
    </ParagraphWrapper>

    <ParagraphWrapper>
      <Paragraph>
        I also enjoy watching films and television with Children of Men by
        Alfonso Cuarón being my favorite movie of all time, and my favorite TV
        show is a tie between Breaking Bad and Attack on Titan.
      </Paragraph>
    </ParagraphWrapper>

    <ParagraphWrapper>
      <Paragraph>
        A few minor things about me is that I like to be active by going to the
        gym, running, or hiking with rock climbing as my next goal. I love
        videogames with Half-Life 2 being my all-time favorite. From
        time-to-time, I continue to learn physics and how to apply them
        computationally. Lastly, I enjoy helping others whether it is community
        service or teaching.
      </Paragraph>
    </ParagraphWrapper>

    <ParagraphWrapper>
      <Paragraph>
        If you want to connect with me for coffee, collaboration, or anything
        else, then hit me up on Twitter or email (gutierrezelias1991@gmail.com).
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

export default MoreSection;
