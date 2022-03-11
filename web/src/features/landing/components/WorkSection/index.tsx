import React, { FC } from 'react';

import noImage from 'assets/img/no-image.png';

import LineSeparator from 'common/components/LineSeparator';

import { useIsHovering } from 'common/hooks';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import { IWork } from 'common/models';

import {
  Container,
  ExploreMoreLink,
  ExploreMoreWrapper,
  Section,
  SectionTitle,
} from './styles';
import WorkContainer from './WorkContainer';

type TWorksData = Pick<
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

interface IWorkSection {
  worksData: TWorksData[];
}

const WorkSection: FC<IWorkSection> = ({ worksData }) => {
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <Section className="default-container default-margin-bottom">
      <SectionTitle>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Work
        </HeadingSecondary>
      </SectionTitle>

      <Container>
        {worksData.length > 0 &&
          worksData.slice(0, 3).map((workData, workIndex) => (
            <React.Fragment key={workData.uuid}>
              <LineSeparator rotateClass="negative-rotate" />

              <WorkContainer
                isExploreLinkHovering={isHovering}
                workDescription={workData.description}
                workImageAlt={workData.title}
                workImageSrc={
                  workData.main_image
                    ? `http://localhost:8000${workData.main_image}`
                    : noImage
                }
                workLinkContent="View"
                workLinkPath={`/work/${workData.id}`}
                workTitle={workData.title}
                {...(workIndex % 2 !== 0 && {
                  reverseClass: 'reverse',
                })}
              />
            </React.Fragment>
          ))}
      </Container>

      <ExploreMoreWrapper>
        <ExploreMoreLink
          to="/work"
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
