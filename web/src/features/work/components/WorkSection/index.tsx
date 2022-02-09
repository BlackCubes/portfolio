import React, { FC } from 'react';

import kovviImage from 'assets/img/kovvi.png';
import nodeNdesApiImage from 'assets/img/node-news-api.png';
import pokedexAppImage from 'assets/img/pokedex-app.png';
import toadTribuneImage from 'assets/img/toad-tribune.png';

import LineSeparator from 'common/components/LineSeparator';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { Container, Section, SectionTitle } from './styles';
import WorkContainer, { IWorkContainer } from './WorkContainer';

const workContainerData: IWorkContainer[] = [
  {
    reverseClass: 'reverse',
    workDescription:
      'A cross-platform mobile app built with React Native that allows users to search COVID-19 data in a region, and view vaccine trial data.',
    workImageAlt: 'Kovvi',
    workImageSize: 12,
    workImageSrc: kovviImage,
    workLinkPath: '/',
    workTitle: 'Kovvie',
  },
  {
    workDescription:
      'A web app built with React and Node.js to provide top headline news from around the world: Politics, sports, stonks, movies, animals and your local weather.',
    workImageAlt: 'The Toad Tribune',
    workImageSize: 12,
    workImageSrc: toadTribuneImage,
    workLinkPath: '/',
    workTitle: 'The Toad Tribune',
  },
  {
    reverseClass: 'reverse',
    workDescription:
      'A web app built with React that checks the type matchups of your Pokémon vs. any other Pokémon. With over 900 Pokémon in the Pokémon API database, the combinations are almost endless.',
    workImageAlt: 'The Pokédex App',
    workImageSize: 12,
    workImageSrc: pokedexAppImage,
    workLinkPath: '/',
    workTitle: 'The Pokédex App',
  },
  {
    workDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    workImageAlt: 'Node News API',
    workImageSize: 14,
    workImageSrc: nodeNdesApiImage,
    workLinkPath: '/',
    workTitle: 'Node News API',
  },
];

const WorkSection: FC = () => (
  <Section className="default-container default-margin-bottom navbar-footer-space">
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        Work
      </HeadingSecondary>
    </SectionTitle>

    <Container>
      <LineSeparator rotateClass="negative-rotate" />

      {workContainerData.map((workData) => (
        <WorkContainer
          key={workData.workTitle.toLowerCase().split(' ').join('-')}
          reverseClass={workData.reverseClass}
          workDescription={workData.workDescription}
          workImageAlt={workData.workImageAlt}
          workImageSize={workData.workImageSize}
          workImageSrc={workData.workImageSrc}
          workLinkPath={workData.workLinkPath}
          workTitle={workData.workTitle}
        />
      ))}
    </Container>
  </Section>
);

export default WorkSection;
