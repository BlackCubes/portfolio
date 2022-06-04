import { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import LineSeparator from 'common/components/LineSeparator';

import { IWork } from 'common/models';

import HeadingSecondary from 'common/typography/HeadingSecondary';

import environment from 'environment';

import { Container, Section, SectionTitle } from './styles';
import PersonalContainer from './PersonalContainer';

type TPersonalsData = Pick<
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

interface IPersonalList {
  personalsData: TPersonalsData[];
}

const PersonalList: FC<IPersonalList> = ({ personalsData }) => {
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
    <Section>
      <SectionTitle animate={titleAnimateControls} ref={titleRef}>
        <HeadingSecondary letterSpacing={1.6} opacity={0.8}>
          Personal
        </HeadingSecondary>
      </SectionTitle>

      <Container>
        <LineSeparator rotateClass="negative-rotate" />

        {personalsData.map((personalData, personalIndex) => (
          <PersonalContainer
            key={personalData.uuid}
            personalDescription={personalData.description}
            personalImageAlt={personalData.title}
            personalImageSrc={
              personalData.logo_image
                ? `${
                    environment.isProduction
                      ? personalData.logo_image
                      : environment.apiRoute + personalData.logo_image
                  }`
                : '/no-image.png'
            }
            personalPath={`/work/${personalData.meta.slug}`}
            personalTitle={personalData.title}
            {...(personalIndex % 2 !== 0 && {
              reverseClass: 'reverse',
            })}
          />
        ))}
      </Container>
    </Section>
  );
};

export default PersonalList;
