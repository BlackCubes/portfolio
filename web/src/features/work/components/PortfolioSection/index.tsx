import React, { FC } from 'react';

import portfolio1 from 'assets/img/portfolio1.png';
import portfolio2 from 'assets/img/portfolio2.png';
import portfolio3 from 'assets/img/portfolio3.png';

import LineSeparator from 'common/components/LineSeparator';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { Container, Section, SectionTitle } from './styles';
import PortfolioContainer, { IPortfolioContainer } from './PortfolioContainer';

const portfolioContainerData: IPortfolioContainer[] = [
  {
    portfolioDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    portfolioImageAlt: 'Errez Shop',
    portfolioImageSrc: portfolio1,
    portfolioPath: '/',
    portfolioTitle: 'Errez Shop',
  },
  {
    portfolioDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    portfolioImageAlt: 'Kinetotickets',
    portfolioImageSrc: portfolio2,
    portfolioPath: '/',
    portfolioTitle: 'Kinetotickets',
    reverseClass: 'reverse',
  },
  {
    portfolioDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    portfolioImageAlt: 'Film E-commerce',
    portfolioImageSrc: portfolio3,
    portfolioPath: '/',
    portfolioTitle: 'Film E-commerce',
  },
];

const PortfolioSection: FC = () => (
  <Section className="default-container">
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        Portfolio
      </HeadingSecondary>
    </SectionTitle>

    <Container>
      <LineSeparator rotateClass="negative-rotate" />

      {portfolioContainerData.map((portfolioData) => (
        <PortfolioContainer
          key={portfolioData.portfolioTitle.toLowerCase().split(' ').join('-')}
          reverseClass={portfolioData.reverseClass}
          portfolioDescription={portfolioData.portfolioDescription}
          portfolioImageAlt={portfolioData.portfolioImageAlt}
          portfolioImageSrc={portfolioData.portfolioImageSrc}
          portfolioPath={portfolioData.portfolioPath}
          portfolioTitle={portfolioData.portfolioTitle}
        />
      ))}
    </Container>
  </Section>
);

export default PortfolioSection;
