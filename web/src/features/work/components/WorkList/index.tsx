import React, { FC } from 'react';

import noImage from 'assets/img/no-image.png';

import LineSeparator from 'common/components/LineSeparator';

import { IWork } from 'common/models';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { Container, Section, SectionTitle } from './styles';
import WorkContainer from './WorkContainer';

type TWorksData = Pick<
  IWork,
  | 'category'
  | 'description'
  | 'first_released_at'
  | 'id'
  | 'logo_image'
  | 'title'
  | 'uuid'
> & {
  meta: Pick<IWork['meta'], 'first_published_at' | 'slug'>;
};

interface IWorkList {
  worksData: TWorksData[];
}

const WorkList: FC<IWorkList> = ({ worksData }) => (
  <Section className="default-margin-bottom">
    <SectionTitle>
      <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
        Work
      </HeadingSecondary>
    </SectionTitle>

    <Container>
      <LineSeparator rotateClass="negative-rotate" />

      {worksData.map((workData, workIndex) => (
        <WorkContainer
          key={workData.uuid}
          workDescription={workData.description}
          workImageAlt={workData.title}
          workImageSrc={
            workData.logo_image
              ? `http://localhost:8000${workData.logo_image}`
              : noImage
          }
          workLinkPath={`/work/${workData.meta.slug}`}
          workTitle={workData.title}
          {...(workIndex % 2 === 0 && {
            reverseClass: 'reverse',
          })}
        />
      ))}
    </Container>
  </Section>
);

export default WorkList;
