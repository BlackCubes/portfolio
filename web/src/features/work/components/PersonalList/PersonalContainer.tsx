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
  const [isPersonalLinkHovering, setIsPersonalLinkHovering] = useIsHovering();

  return (
    <PersonalContainerStyle>
      <PersonalDescription>
        <Paragraph
          {...(isPersonalLinkHovering && {
            opacity: 0.8,
          })}
        >
          {personalDescription}
        </Paragraph>
      </PersonalDescription>

      <PersonalLink
        to={personalPath}
        onMouseEnter={() => setIsPersonalLinkHovering(true)}
        onMouseLeave={() => setIsPersonalLinkHovering(false)}
      >
        <PersonalImageWrapper>
          <GlassTriangle
            glassDarkShadowBlur={isPersonalLinkHovering ? 0.4 : 0}
            glassDarkShadowHorizontalOffset={isPersonalLinkHovering ? 0.3 : 0.1}
            glassDarkShadowVerticalOffset={isPersonalLinkHovering ? 0.3 : 0.1}
            glassLightShadowBlur={isPersonalLinkHovering ? 0.4 : 0}
            glassLightShadowHorizontalOffset={
              isPersonalLinkHovering ? -0.3 : -0.1
            }
            glassLightShadowVerticalOffset={
              isPersonalLinkHovering ? -0.3 : -0.1
            }
            imageAlt={personalImageAlt}
            imageSrc={personalImageSrc}
            opacity={isPersonalLinkHovering ? 0.75 : 1}
            reverseClass={reverseClass}
          />
        </PersonalImageWrapper>
      </PersonalLink>

      <PersonalTitle>
        <HeadingTertiary
          {...(isPersonalLinkHovering && {
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
