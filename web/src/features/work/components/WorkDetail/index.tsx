import React, { FC } from 'react';

import noImage from 'assets/img/no-image.png';

import Body from 'common/components/Body';
import GlassRectangle from 'common/components/GlassRectangle';

import { IWork } from 'common/models';

import HeadingPrimary from 'common/typography/HeadingPrimary';
import Paragraph from 'common/typography/Paragraph';

import { dateFormat } from 'utils';
import {
  Work,
  WorkAdditionalInfo,
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

const WorkDetail: FC<IWorkDetail> = ({ workData }) => (
  <Work>
    <WorkAdditionalInfo>
      <WorkCategory>
        <Paragraph>{workData.category?.name ?? ''}</Paragraph>
      </WorkCategory>
    </WorkAdditionalInfo>

    <WorkTitle>
      <HeadingPrimary>{workData.title}</HeadingPrimary>
    </WorkTitle>

    {workData.company && workData.company.length > 0 && (
      <WorkCompany>
        <Paragraph>{workData.company}</Paragraph>
      </WorkCompany>
    )}

    <WorkAdditionalInfo>
      <WorkDate>
        <Paragraph>{dateFormat('en-US', workData.first_released_at)}</Paragraph>
      </WorkDate>
    </WorkAdditionalInfo>

    <WorkDescription>
      <Paragraph>{workData.description}</Paragraph>
    </WorkDescription>

    <WorkMainImage>
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
            ? `http://localhost:8000${workData.main_image}`
            : noImage
        }
        opacity={1}
      />
    </WorkMainImage>

    <WorkBodyContainer>
      {workData.body.map((body) => (
        <Body key={body.id} bodyType={body.type} bodyValue={body.value} />
      ))}
    </WorkBodyContainer>
  </Work>
);

export default WorkDetail;
