import React, { FC } from 'react';

import noImage from 'assets/img/no-image.png';

import GeneralSidebar from 'common/components/GeneralSidebar';

import GlassCircle from 'common/components/GlassCircle';

import { IArticle } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  RelatedContainer,
  RelatedImageWrapper,
  RelatedItem,
  RelatedLink,
  RelatedTitle,
  RelatedTitleWrapper,
  SidebarContainer,
  SidebarList,
  SidebarTitle,
} from './styles';

type TRelatedArticle = Pick<
  IArticle,
  'header_image' | 'id' | 'title' | 'uuid'
> & {
  meta: Pick<IArticle['meta'], 'slug'>;
};

interface IRelatedSidebar {
  relatedArticlesByCategoryData: TRelatedArticle[];
}

const RelatedSidebar: FC<IRelatedSidebar> = ({
  relatedArticlesByCategoryData,
}) => (
  <GeneralSidebar
    sidebarClassName="related-sidebar"
    sidebarContainerClassName="related-sidebar"
    sidebarContentElement={
      <>
        <SidebarTitle>
          <HeadingTertiary>Related</HeadingTertiary>
        </SidebarTitle>

        <SidebarContainer>
          <SidebarList>
            {relatedArticlesByCategoryData.slice(0, 4).map((relatedArticle) => (
              <RelatedItem key={relatedArticle.uuid}>
                <RelatedLink to={`/articles/${relatedArticle.id}`}>
                  <RelatedContainer>
                    <RelatedImageWrapper>
                      <GlassCircle
                        glassContainerClassName="related-sidebar"
                        glassDarkShadowBlur={0.2}
                        glassDarkShadowHorizontalOffset={0.1}
                        glassDarkShadowVerticalOffset={0.1}
                        glassImageWrapperClassName="related-sidebar"
                        glassLightShadowBlur={0.2}
                        glassLightShadowHorizontalOffset={-0.1}
                        glassLightShadowVerticalOffset={-0.1}
                        imageAlt={relatedArticle.title}
                        imageSrc={
                          relatedArticle.header_image
                            ? `http://localhost:8000${relatedArticle.header_image}`
                            : noImage
                        }
                        opacity={1}
                      />
                    </RelatedImageWrapper>

                    <RelatedTitleWrapper>
                      <RelatedTitle>{relatedArticle.title}</RelatedTitle>
                    </RelatedTitleWrapper>
                  </RelatedContainer>
                </RelatedLink>
              </RelatedItem>
            ))}
          </SidebarList>
        </SidebarContainer>
      </>
    }
  />
);

export default RelatedSidebar;
