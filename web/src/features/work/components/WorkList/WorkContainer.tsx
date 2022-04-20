import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const workAnimateControls = useAnimation();

  const { inView: workInView, ref: workRef } = useInView();

  const [isWorkLinkHovering, setIsWorkLinkHovering] = useIsHovering();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (workInView) {
        workAnimateControls.start('visible');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [workAnimateControls, workInView]);

  return (
    <WorkContainerStyle
      animate={workAnimateControls}
      className={reverseClass}
      ref={workRef}
    >
      <WorkLink
        to={workLinkPath}
        onMouseEnter={() => setIsWorkLinkHovering(true)}
        onMouseLeave={() => setIsWorkLinkHovering(false)}
      >
        <GlassRectangle
          glassDarkShadowBlur={isWorkLinkHovering ? 0.4 : 0}
          glassDarkShadowHorizontalOffset={isWorkLinkHovering ? 0.3 : 0.1}
          glassDarkShadowVerticalOffset={isWorkLinkHovering ? 0.3 : 0.1}
          glassLightShadowBlur={isWorkLinkHovering ? 0.4 : 0}
          glassLightShadowHorizontalOffset={isWorkLinkHovering ? -0.3 : -0.1}
          glassLightShadowVerticalOffset={isWorkLinkHovering ? -0.3 : -0.1}
          glassContentElement={
            <Paragraph
              {...(isWorkLinkHovering && {
                opacity: 0.8,
              })}
            >
              {workDescription}
            </Paragraph>
          }
          glassTitleElement={
            <HeadingTertiary
              {...(isWorkLinkHovering && {
                opacity: 0.8,
              })}
            >
              {workTitle}
            </HeadingTertiary>
          }
          hasContent
          imageAlt={workImageAlt}
          imageSrc={workImageSrc}
          opacity={isWorkLinkHovering ? 0.75 : 1}
        />
      </WorkLink>
    </WorkContainerStyle>
  );
};

export default WorkContainer;
