import React, { FC } from 'react';

import GlassTriangle from 'common/components/GlassTriangle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  TalkContainerStyle,
  TalkDescriptionContainer,
  TalkImageWrapper,
  TalkTitleLink,
} from './styles';

export interface ITalkContainer {
  reverseClass?: string;
  talkImageAlt: string;
  talkImageSrc: string;
  talkLinkPath: string;
  talkTitle: string;
}

const TalkContainer: FC<ITalkContainer> = ({
  reverseClass,
  talkImageAlt,
  talkImageSrc,
  talkLinkPath,
  talkTitle,
}) => {
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <TalkContainerStyle>
      <TalkDescriptionContainer className={reverseClass}>
        <TalkImageWrapper className={reverseClass}>
          <GlassTriangle
            glassDarkShadowBlur={isHovering ? 0.4 : 0}
            glassDarkShadowHorizontalOffset={isHovering ? 0.3 : 0.1}
            glassDarkShadowVerticalOffset={isHovering ? 0.3 : 0.1}
            glassLightShadowBlur={isHovering ? 0.4 : 0}
            glassLightShadowHorizontalOffset={isHovering ? -0.3 : -0.1}
            glassLightShadowVerticalOffset={isHovering ? -0.3 : -0.1}
            imageAlt={talkImageAlt}
            imageSrc={talkImageSrc}
            opacity={isHovering ? 0.75 : 1}
            reverseClass={reverseClass}
          />
        </TalkImageWrapper>

        <TalkTitleLink
          to={talkLinkPath}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <HeadingTertiary
            {...(isHovering && {
              opacity: 0.8,
              textDecoration: 'underline',
            })}
          >
            {talkTitle}
          </HeadingTertiary>
        </TalkTitleLink>
      </TalkDescriptionContainer>
    </TalkContainerStyle>
  );
};

export default TalkContainer;
