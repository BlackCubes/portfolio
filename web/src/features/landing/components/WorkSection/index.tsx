import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  | 'logo_image'
  | 'title'
  | 'uuid'
  | 'work_url'
> & {
  meta: Pick<IWork['meta'], 'first_published_at' | 'slug'>;
};

interface IWorkSection {
  finishIsFirstMount: boolean;
  worksData: TWorksData[];
}

const WorkSection: FC<IWorkSection> = ({ finishIsFirstMount, worksData }) => {
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const viewMoreAnimateControls = useAnimation();
  const { inView: viewMoreInView, ref: viewMoreRef } = useInView();

  const [isHovering, setIsHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, titleAnimateControls, titleInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!finishIsFirstMount && viewMoreInView) {
        viewMoreAnimateControls.start('visible');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [finishIsFirstMount, viewMoreAnimateControls, viewMoreInView]);

  return (
    <Section className="default-margin-bottom">
      <SectionTitle animate={titleAnimateControls} ref={titleRef}>
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
                finishIsFirstMount={finishIsFirstMount}
                isExploreLinkHovering={isHovering}
                workDescription={workData.description}
                workExternalLinkPath={workData.work_url ?? ''}
                workImageAlt={workData.title}
                workImageSrc={
                  workData.logo_image
                    ? `http://localhost:8000${workData.logo_image}`
                    : noImage
                }
                workLinkPath={`/work/${workData.meta.slug}`}
                workTitle={workData.title}
                {...(workIndex % 2 !== 0 && {
                  reverseClass: 'reverse',
                })}
              />
            </React.Fragment>
          ))}
      </Container>

      <ExploreMoreWrapper animate={viewMoreAnimateControls} ref={viewMoreRef}>
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
