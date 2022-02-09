import React, { FC } from 'react';

import GlassTriangle from 'common/components/GlassTriangle';

import { useIsHovering } from 'common/hooks';

import HeadingTertiary from 'common/typography/HeadingTertiary';
import Paragraph from 'common/typography/Paragraph';

import {
  PortfolioContainerStyle,
  PortfolioDescription,
  PortfolioImageWrapper,
  PortfolioLink,
  PortfolioTitle,
} from './styles';

export interface IPortfolioContainer {
  reverseClass?: string;
  portfolioDescription: string;
  portfolioImageAlt: string;
  portfolioImageSrc: string;
  portfolioPath: string;
  portfolioTitle: string;
}

const PortfolioContainer: FC<IPortfolioContainer> = ({
  reverseClass,
  portfolioDescription,
  portfolioImageAlt,
  portfolioImageSrc,
  portfolioPath,
  portfolioTitle,
}) => {
  const [isHovering, setIsHovering] = useIsHovering();

  return (
    <PortfolioContainerStyle>
      <PortfolioDescription>
        <Paragraph
          {...(isHovering && {
            opacity: 0.8,
          })}
        >
          {portfolioDescription}
        </Paragraph>
      </PortfolioDescription>

      <PortfolioLink
        to={portfolioPath}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <PortfolioImageWrapper>
          <GlassTriangle
            glassDarkShadowBlur={isHovering ? 0.4 : 0}
            glassDarkShadowHorizontalOffset={isHovering ? 0.3 : 0.1}
            glassDarkShadowVerticalOffset={isHovering ? 0.3 : 0.1}
            glassLightShadowBlur={isHovering ? 0.4 : 0}
            glassLightShadowHorizontalOffset={isHovering ? -0.3 : -0.1}
            glassLightShadowVerticalOffset={isHovering ? -0.3 : -0.1}
            imageAlt={portfolioImageAlt}
            imageSrc={portfolioImageSrc}
            opacity={isHovering ? 0.75 : 1}
            reverseClass={reverseClass}
          />
        </PortfolioImageWrapper>
      </PortfolioLink>

      <PortfolioTitle>
        <HeadingTertiary
          {...(isHovering && {
            opacity: 0.8,
          })}
        >
          {portfolioTitle}
        </HeadingTertiary>
      </PortfolioTitle>
    </PortfolioContainerStyle>
  );
};

export default PortfolioContainer;
