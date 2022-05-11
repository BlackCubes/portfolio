import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import noImage from 'assets/img/no-image.png';

import Body from 'common/components/Body';
import GlassRectangle from 'common/components/GlassRectangle';

import { IWork } from 'common/models';

import HeadingPrimary from 'common/typography/HeadingPrimary';
import Paragraph from 'common/typography/Paragraph';

import environment from 'environment';

import { dateFormat } from 'utils';
import {
  Work,
  WorkAdditionalInfo,
  WorkAppWrapper,
  WorkAppLink,
  WorkBodyContainer,
  WorkCategory,
  WorkCompany,
  WorkDate,
  WorkDescription,
  WorkMainImage,
  WorkTitle,
} from './styles';

interface IWorkDetail {
  workData: IWork;
}

const WorkDetail: FC<IWorkDetail> = ({ workData }) => {
  const categoryAnimateControls = useAnimation();
  const { inView: categoryInView, ref: categoryRef } = useInView();

  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const companyAnimateControls = useAnimation();
  const { inView: companyInView, ref: companyRef } = useInView();

  const dateAnimateControls = useAnimation();
  const { inView: dateInView, ref: dateRef } = useInView();

  const appLinkAnimateControls = useAnimation();
  const { inView: appLinkInView, ref: appLinkRef } = useInView();

  const descriptionAnimateControls = useAnimation();
  const { inView: descriptionInView, ref: descriptionRef } = useInView();

  const mainImageAnimateControls = useAnimation();
  const { inView: mainImageInView, ref: mainImageRef } = useInView();

  const bodyContainerAnimateControls = useAnimation();
  const { inView: bodyContainerInView, ref: bodyContainerRef } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoryInView) {
        categoryAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [categoryAnimateControls, categoryInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [titleAnimateControls, titleInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (companyInView) {
        companyAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [companyAnimateControls, companyInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dateInView) {
        dateAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [dateAnimateControls, dateInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (appLinkInView) {
        appLinkAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [appLinkAnimateControls, appLinkInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (descriptionInView) {
        descriptionAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [descriptionAnimateControls, descriptionInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mainImageInView) {
        mainImageAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [mainImageAnimateControls, mainImageInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bodyContainerInView) {
        bodyContainerAnimateControls.start('visible');
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [bodyContainerAnimateControls, bodyContainerInView]);

  return (
    <Work>
      <WorkAdditionalInfo ref={categoryRef}>
        <WorkCategory animate={categoryAnimateControls}>
          <Paragraph>{workData.category?.name ?? ''}</Paragraph>
        </WorkCategory>
      </WorkAdditionalInfo>

      <WorkTitle animate={titleAnimateControls} ref={titleRef}>
        <HeadingPrimary>{workData.title}</HeadingPrimary>
      </WorkTitle>

      {workData.company && workData.company.length > 0 && (
        <WorkCompany animate={companyAnimateControls} ref={companyRef}>
          <Paragraph>{workData.company}</Paragraph>
        </WorkCompany>
      )}

      <WorkAdditionalInfo ref={dateRef}>
        <WorkDate animate={dateAnimateControls}>
          <Paragraph>
            {dateFormat('en-US', workData.first_released_at)}
          </Paragraph>
        </WorkDate>
      </WorkAdditionalInfo>

      {workData.work_url && workData.work_url.length > 0 && (
        <WorkAppWrapper ref={appLinkRef}>
          <WorkAppLink
            animate={appLinkAnimateControls}
            href={workData.work_url}
            rel="noopener"
            target="_blank"
          >
            View app
          </WorkAppLink>
        </WorkAppWrapper>
      )}

      <WorkDescription
        animate={descriptionAnimateControls}
        ref={descriptionRef}
      >
        <Paragraph>{workData.description}</Paragraph>
      </WorkDescription>

      <WorkMainImage animate={mainImageAnimateControls} ref={mainImageRef}>
        <GlassRectangle
          customClassName="work-detail-page__main-image"
          glassDarkShadowBlur={0.4}
          glassDarkShadowHorizontalOffset={0.3}
          glassDarkShadowVerticalOffset={0.3}
          glassLightShadowBlur={0.4}
          glassLightShadowHorizontalOffset={-0.3}
          glassLightShadowVerticalOffset={-0.3}
          imageAlt="Header image for article"
          imageSrc={
            workData.main_image
              ? `${
                  environment.isProduction
                    ? workData.main_image
                    : environment.apiRoute + workData.main_image
                }`
              : noImage
          }
          opacity={1}
        />
      </WorkMainImage>

      <WorkBodyContainer
        animate={bodyContainerAnimateControls}
        ref={bodyContainerRef}
      >
        {workData.body.map((body) => (
          <Body key={body.id} bodyType={body.type} bodyValue={body.value} />
        ))}
      </WorkBodyContainer>
    </Work>
  );
};

export default WorkDetail;
