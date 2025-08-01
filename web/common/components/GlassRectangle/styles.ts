import styled from 'styled-components';

interface IGlassContainer {
  boxDarkShadowBlur: number;
  boxDarkShadowHorizontalOffset: number;
  boxDarkShadowVerticalOffset: number;
  boxLightShadowBlur: number;
  boxLightShadowHorizontalOffset: number;
  boxLightShadowVerticalOffset: number;
  hasContent?: boolean;
}

interface IGlassImageWrapper {
  hasContent?: boolean;
  imageSize?: number;
  opacity?: number;
}

export const GlassContainer = styled.div<IGlassContainer>`
  display: flex;
  flex-direction: ${({ hasContent }) => (hasContent ? 'column' : 'row')};
  align-items: center;
  width: ${({ hasContent }) => (hasContent ? '30rem' : '15rem')};
  height: ${({ hasContent }) => (hasContent ? 'auto' : '15rem')};
  padding: ${({ hasContent }) => (hasContent ? '0.5rem' : '0')};
  background-color: ${({ theme }) => `rgba(${theme.colors.glass.rgb}, 0.17)`};
  border-radius: 2rem;
  box-shadow: ${({
    boxDarkShadowBlur,
    boxDarkShadowHorizontalOffset,
    boxDarkShadowVerticalOffset,
    boxLightShadowBlur,
    boxLightShadowHorizontalOffset,
    boxLightShadowVerticalOffset,
    theme,
  }) => `
  ${`${boxLightShadowHorizontalOffset}rem` ?? '-0.1rem'} ${
    `${boxLightShadowVerticalOffset}rem` ?? '-0.1rem'
  }
    ${`${boxLightShadowBlur}rem` ?? '0'} 0 rgba(${
    theme.colors.glassLightShadow.rgb
  }, 0.17),
  ${`${boxDarkShadowHorizontalOffset}rem` ?? '0.1rem'} ${
    `${boxDarkShadowVerticalOffset}rem` ?? '0.1rem'
  }
    ${`${boxDarkShadowBlur}rem` ?? '0'} 0 rgba(${
    theme.colors.glassDarkShadow.rgb
  }, 0.27)`};
  overflow: hidden;

  &.home-page {
    width: 51rem;
    height: 37rem;
    margin-right: auto;
    margin-left: auto;

    @media ${({ theme }) => theme.responsive.below1199} {
      width: 35rem;
      height: 25rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      width: 32rem;
      height: 23rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      width: 24rem;
      height: 17rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      width: 100%;
      height: 16rem;
    }
  }

  &.about-page {
    width: 51rem;
    height: 37rem;
    margin-right: auto;
    margin-left: auto;

    @media ${({ theme }) => theme.responsive.below1199} {
      width: 35rem;
      height: 25rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      width: 32rem;
      height: 23rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      width: 24rem;
      height: 17rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      width: 100%;
      height: 16rem;
    }
  }

  &.article-list-page {
    width: 35rem;
    height: 20rem;

    @media ${({ theme }) => theme.responsive.below599} {
      width: 100%;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      height: 15rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      height: 12rem;
    }
  }

  &.article-detail-page {
    &__header-image {
      width: 100%;
      height: inherit;
    }
  }

  &.work-detail-page {
    &__main-image {
      width: 100%;
      height: 100%;
    }
  }

  &.caption-image {
    width: 70%;
    height: inherit;
    margin-left: auto;
    margin-right: auto;

    @media ${({ theme }) => theme.responsive.below599} {
      width: 90%;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.responsive.below1199} {
    width: ${({ hasContent }) => (hasContent ? '27rem' : '15rem')};
  }

  @media ${({ theme }) => theme.responsive.below899} {
    margin-left: auto;
    margin-right: auto;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    width: ${({ hasContent }) => (hasContent ? '85%' : '15rem')};
  }

  @media ${({ theme }) => theme.responsive.below379} {
    width: ${({ hasContent }) => (hasContent ? '98%' : '15rem')};
  }
`;

export const GlassTitle = styled.div`
  padding: 1rem;
`;

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  width: ${({ hasContent, imageSize }) =>
    hasContent && imageSize ? `${imageSize}rem` : '12rem'};
  margin-left: auto;
  margin-right: auto;
  opacity: ${({ opacity }) => opacity ?? '1'};

  &.home-page {
    width: 100%;
  }

  &.about-page {
    width: 100%;
  }

  &.article-list-page,
  &.article-detail-page__header-image,
  &.work-detail-page__main-image {
    width: inherit;
  }

  &.article-detail-page {
    &__header-image {
      width: 100%;
    }
  }

  &.work-detail-page {
    &__main-image {
      width: 100%;
    }
  }

  &.caption-image {
    width: 100%;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    width: ${({ hasContent }) => (hasContent ? '50%' : '12rem')};
  }

  @media ${({ theme }) => theme.responsive.below479} {
    width: ${({ hasContent }) => (hasContent ? '75%' : '12rem')};
  }

  @media ${({ theme }) => theme.responsive.below379} {
    width: ${({ hasContent }) => (hasContent ? '65%' : '12rem')};
  }
`;

export const GlassImage = styled.img`
  width: 100%;

  &.home-page {
    &--image-1 {
      transform: scale(1.1);
    }

    &--image-2 {
      transform: scale(1);
    }
  }

  &.about-page {
    transform: scale(1.1);
  }

  &.article-list-page {
    width: 110%;
    transition: width 0.05s linear;
    vertical-align: middle;

    &:hover {
      width: 115%;

      @media ${({ theme }) => theme.responsive.below479} {
        width: 125%;
      }
    }

    @media ${({ theme }) => theme.responsive.below479} {
      width: 120%;
    }
  }

  &.article-detail-page {
    &__header-image {
      vertical-align: middle;
    }
  }

  &.work-detail-page {
    &__main-image {
      vertical-align: middle;
    }
  }

  &.caption-image {
    vertical-align: middle;
  }
`;

export const GlassContent = styled.div`
  padding: 2rem;
  text-align: center;

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    padding: 1rem 0.5rem;
  }
`;
