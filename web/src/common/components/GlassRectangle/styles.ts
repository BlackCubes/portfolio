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
  flex-direction: ${(props) => (props.hasContent ? 'column' : 'row')};
  align-items: center;
  width: ${(props) => (props.hasContent ? '30rem' : '15rem')};
  height: ${(props) => (props.hasContent ? 'auto' : '15rem')};
  padding: ${(props) => (props.hasContent ? '0.5rem' : '0')};
  background-color: ${(props) => `rgba(${props.theme.colors.glass.rgb}, 0.17)`};
  border-radius: 2rem;
  box-shadow: ${(props) => `
  ${`${props.boxLightShadowHorizontalOffset}rem` ?? '-0.1rem'} ${
    `${props.boxLightShadowVerticalOffset}rem` ?? '-0.1rem'
  }
    ${`${props.boxLightShadowBlur}rem` ?? '0'} 0 rgba(${
    props.theme.colors.glassLightShadow.rgb
  }, 0.17),
  ${`${props.boxDarkShadowHorizontalOffset}rem` ?? '0.1rem'} ${
    `${props.boxDarkShadowVerticalOffset}rem` ?? '0.1rem'
  }
    ${`${props.boxDarkShadowBlur}rem` ?? '0'} 0 rgba(${
    props.theme.colors.glassDarkShadow.rgb
  }, 0.27)`};
  overflow: hidden;

  &.article-list-page {
    width: 35rem;
    height: 20rem;
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
      height: inherit;
    }
  }

  &.caption-image {
    width: 70%;
    height: inherit;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const GlassTitle = styled.div`
  padding: 1rem;
`;

export const GlassImageWrapper = styled.div<IGlassImageWrapper>`
  width: ${(props) =>
    props.hasContent && props.imageSize ? `${props.imageSize}rem` : '12rem'};
  margin-left: auto;
  margin-right: auto;
  opacity: ${({ opacity }) => opacity ?? '1'};

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
`;

export const GlassImage = styled.img`
  width: 100%;

  &.article-list-page {
    width: 110%;
    transition: width 0.05s linear;

    &:hover {
      width: 115%;
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
`;
