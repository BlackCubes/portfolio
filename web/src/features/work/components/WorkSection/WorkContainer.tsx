import React, { FC } from 'react';

import GlassRectangle from 'common/components/GlassRectangle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import { WorkContainerStyle, WorkLink } from './styles';

export interface IWorkContainer {
  reverseClass?: string;
  workDescription: string;
  workImageAlt: string;
  workImageSrc: string;
  workLinkPath: string;
  workTitle: string;
}

const WorkContainer: FC<IWorkContainer> = ({
  reverseClass,
  workDescription,
  workImageAlt,
  workImageSrc,
  workLinkPath,
  workTitle,
}) => {
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <WorkContainerStyle className={reverseClass}>
      <WorkLink
        to={workLinkPath}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <GlassRectangle
          glassDarkShadowBlur={isHovering ? 0.4 : 0}
          glassDarkShadowHorizontalOffset={isHovering ? 0.3 : 0.1}
          glassDarkShadowVerticalOffset={isHovering ? 0.3 : 0.1}
          glassLightShadowBlur={isHovering ? 0.4 : 0}
          glassLightShadowHorizontalOffset={isHovering ? -0.3 : -0.1}
          glassLightShadowVerticalOffset={isHovering ? -0.3 : -0.1}
          glassContentElement={
            <Paragraph opacity={isHovering ? 0.8 : 0}>
              {workDescription}
            </Paragraph>
          }
          glassTitleElement={
            <HeadingTertiary opacity={isHovering ? 0.8 : 0}>
              {workTitle}
            </HeadingTertiary>
          }
          hasContent
          imageAlt={workImageAlt}
          imageSrc={workImageSrc}
          opacity={isHovering ? 0.75 : 1}
        />
      </WorkLink>
    </WorkContainerStyle>
  );
};

export default WorkContainer;
