import React, { FC, useState } from 'react';

import GlassRectangle from 'common/components/GlassRectangle';

import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import {
  WorkContainerStyle,
  WorkDescription,
  WorkDescriptionContainer,
  WorkImageWrapper,
  WorkLink,
  WorkLinkWrapper,
  WorkTitle,
} from './styles';

export interface IWorkContainer {
  reverseClass?: string;
  workDescription: string;
  workImageAlt: string;
  workImageSrc: string;
  workLinkContent: string;
  workLinkPath: string;
  workTitle: string;
}

const WorkContainer: FC<IWorkContainer> = ({
  reverseClass,
  workDescription,
  workImageAlt,
  workImageSrc,
  workLinkContent,
  workLinkPath,
  workTitle,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <WorkContainerStyle className={reverseClass}>
      <WorkTitle className={reverseClass}>
        <HeadingTertiary
          {...(isHovering && {
            opacity: 0.8,
            textDecoration: 'underline',
          })}
        >
          {workTitle}
        </HeadingTertiary>
      </WorkTitle>

      <WorkDescriptionContainer>
        <WorkDescription className={reverseClass}>
          <Paragraph
            {...(isHovering && {
              opacity: 0.8,
            })}
          >
            {workDescription}
          </Paragraph>
        </WorkDescription>

        <WorkLinkWrapper className={reverseClass}>
          <WorkLink
            href={workLinkPath}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...(isHovering && {
              opacity: 0.7,
            })}
          >
            {workLinkContent}
          </WorkLink>
        </WorkLinkWrapper>
      </WorkDescriptionContainer>

      <WorkImageWrapper className={reverseClass}>
        <GlassRectangle
          glassDarkShadowBlur={isHovering ? 0.4 : 0}
          glassDarkShadowHorizontalOffset={isHovering ? 0.3 : 0.1}
          glassDarkShadowVerticalOffset={isHovering ? 0.3 : 0.1}
          glassLightShadowBlur={isHovering ? 0.4 : 0}
          glassLightShadowHorizontalOffset={isHovering ? -0.3 : -0.1}
          glassLightShadowVerticalOffset={isHovering ? -0.3 : -0.1}
          imageAlt={workImageAlt}
          imageSrc={workImageSrc}
          opacity={isHovering ? 0.75 : 1}
        />
      </WorkImageWrapper>
    </WorkContainerStyle>
  );
};

export default WorkContainer;
