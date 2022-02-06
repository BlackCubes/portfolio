import React, { FC } from 'react';

import kovviImage from 'assets/img/kovvi.png';
import pokedexAppImage from 'assets/img/pokedex-app.png';
import toadTribuneImage from 'assets/img/toad-tribune.png';

import LineSeparator from 'common/components/LineSeparator';

import { useIsHovering } from 'common/hooks';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import {
  Container,
  ExploreMoreLink,
  ExploreMoreWrapper,
  Section,
  SectionTitle,
} from './styles';
import WorkContainer, { IWorkContainer } from './WorkContainer';

const workContainerData: Omit<IWorkContainer, 'isExploreLinkHovering'>[] = [
  {
    workDescription:
      'A cross-platform mobile app built with React Native that allows users to search COVID-19 data in a region, and view vaccine trial data.',
    workImageAlt: 'Kovvi',
    workImageSrc: kovviImage,
    workLinkContent: 'View',
    workLinkPath: '#',
    workTitle: 'Kovvie',
  },
  {
    reverseClass: 'reverse',
    workDescription:
      'A web app built with React and Node.js to provide top headline news from around the world: Politics, sports, stonks, movies, animals and your local weather.',
    workImageAlt: 'The Toad Tribune',
    workImageSrc: toadTribuneImage,
    workLinkContent: 'View',
    workLinkPath: '#',
    workTitle: 'The Toad Tribune',
  },
  {
    workDescription:
      'A web app built with React that checks the type matchups of your Pokémon vs. any other Pokémon. With over 900 Pokémon in the Pokémon API database, the combinations are almost endless.',
    workImageAlt: 'The Pokédex App',
    workImageSrc: pokedexAppImage,
    workLinkContent: 'View',
    workLinkPath: '#',
    workTitle: 'The Pokédex App',
  },
];

const WorkSection: FC = () => {
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <Section className="default-container">
      <SectionTitle>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Work
        </HeadingSecondary>
      </SectionTitle>

      <Container>
        {workContainerData.map((workData) => (
          <React.Fragment
            key={workData.workTitle.toLowerCase().split(' ').join('-')}
          >
            <LineSeparator rotateClass="negative-rotate" />

            <WorkContainer
              isExploreLinkHovering={isHovering}
              reverseClass={workData.reverseClass}
              workDescription={workData.workDescription}
              workImageAlt={workData.workImageAlt}
              workImageSrc={workData.workImageSrc}
              workLinkContent={workData.workLinkContent}
              workLinkPath={workData.workLinkPath}
              workTitle={workData.workTitle}
            />
          </React.Fragment>
        ))}
      </Container>

      <ExploreMoreWrapper>
        <ExploreMoreLink
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Explore all work
        </ExploreMoreLink>
      </ExploreMoreWrapper>
    </Section>
  );
};

export default WorkSection;
