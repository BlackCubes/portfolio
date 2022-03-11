import React, { FC } from 'react';

import noImage from 'assets/img/no-image.png';

import LineSeparator from 'common/components/LineSeparator';

import { IWork } from 'common/models';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { Container, Section, SectionTitle } from './styles';
import PortfolioContainer from './PortfolioContainer';

type TPersonalsData = Pick<
  IWork,
  | 'category'
  | 'description'
  | 'first_released_at'
  | 'id'
  | 'main_image'
  | 'title'
  | 'uuid'
> & {
  meta: Pick<IWork['meta'], 'first_published_at' | 'slug'>;
};

interface IPersonalSection {
  personalsData: TPersonalsData[];
}

const PortfolioSection: FC<IPersonalSection> = ({ personalsData }) => (
  <Section className="default-container">
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        Personal
      </HeadingSecondary>
    </SectionTitle>

    <Container>
      <LineSeparator rotateClass="negative-rotate" />

      {personalsData.map((personalData, personalIndex) => (
        <PortfolioContainer
          key={personalData.uuid}
          portfolioDescription={personalData.description}
          portfolioImageAlt={personalData.title}
          portfolioImageSrc={
            personalData.main_image
              ? `http://localhost:8000${personalData.main_image}`
              : noImage
          }
          portfolioPath={`/work/${personalData.id}`}
          portfolioTitle={personalData.title}
          {...(personalIndex % 2 !== 0 && {
            reverseClass: 'reverse',
          })}
        />
      ))}
    </Container>
  </Section>
);

export default PortfolioSection;
