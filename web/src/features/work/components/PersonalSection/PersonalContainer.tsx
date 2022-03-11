import React, { FC } from 'react';

import GlassTriangle from 'common/components/GlassTriangle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import {
  PersonalContainerStyle,
  PersonalDescription,
  PersonalImageWrapper,
  PersonalLink,
  PersonalTitle,
} from './styles';

export interface IPortfolioContainer {
  reverseClass?: string;
  personalDescription: string;
  personalImageAlt: string;
  personalImageSrc: string;
  personalPath: string;
  personalTitle: string;
}

const PersonalContainer: FC<IPortfolioContainer> = ({
  reverseClass,
  personalDescription,
  personalImageAlt,
  personalImageSrc,
  personalPath,
  personalTitle,
}) => {
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <PersonalContainerStyle>
      <PersonalDescription>
        <Paragraph
          {...(isHovering && {
            opacity: 0.8,
          })}
        >
          {personalDescription}
        </Paragraph>
      </PersonalDescription>

      <PersonalLink
        to={personalPath}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <PersonalImageWrapper>
          <GlassTriangle
            glassDarkShadowBlur={isHovering ? 0.4 : 0}
            glassDarkShadowHorizontalOffset={isHovering ? 0.3 : 0.1}
            glassDarkShadowVerticalOffset={isHovering ? 0.3 : 0.1}
            glassLightShadowBlur={isHovering ? 0.4 : 0}
            glassLightShadowHorizontalOffset={isHovering ? -0.3 : -0.1}
            glassLightShadowVerticalOffset={isHovering ? -0.3 : -0.1}
            imageAlt={personalImageAlt}
            imageSrc={personalImageSrc}
            opacity={isHovering ? 0.75 : 1}
            reverseClass={reverseClass}
          />
        </PersonalImageWrapper>
      </PersonalLink>

      <PersonalTitle>
        <HeadingTertiary
          {...(isHovering && {
            opacity: 0.8,
          })}
        >
          {personalTitle}
        </HeadingTertiary>
      </PersonalTitle>
    </PersonalContainerStyle>
  );
};

export default PersonalContainer;
