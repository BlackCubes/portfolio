import { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import LineSeparator from 'common/components/LineSeparator';

import { IWork } from 'common/models';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import environment from 'environment';

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

const WorkList: FC<IWorkList> = ({ worksData }) => {
  const titleAnimateControls = useAnimation();

  const { inView: titleInView, ref: titleRef } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [titleAnimateControls, titleInView]);

  return (
    <Section className="default-margin-bottom">
      <SectionTitle animate={titleAnimateControls} ref={titleRef}>
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
                ? `${
                    environment.isProduction
                      ? workData.logo_image
                      : environment.apiRoute + workData.logo_image
                  }`
                : '/no-image.png'
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
};

export default WorkList;
