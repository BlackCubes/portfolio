import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import GeneralSidebar from 'common/components/GeneralSidebar';

import GlassCircle from 'common/components/GlassCircle';

import { IArticle } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import environment from 'environment';

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
}) => {
  const titleAnimateControls = useAnimation();
  const { inView: titleInView, ref: titleRef } = useInView();

  const itemAnimateControls = useAnimation();
  const { inView: listInView, ref: listRef } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleInView) {
        titleAnimateControls.start('visible');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [titleInView, titleAnimateControls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (listInView) {
        itemAnimateControls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [listInView, itemAnimateControls]);

  return (
    <GeneralSidebar
      sidebarClassName="related-sidebar"
      sidebarContainerClassName="related-sidebar"
      sidebarContentElement={
        <>
          <SidebarTitle animate={titleAnimateControls} ref={titleRef}>
            <HeadingTertiary>Related</HeadingTertiary>
          </SidebarTitle>

          <SidebarContainer>
            <SidebarList ref={listRef}>
              {relatedArticlesByCategoryData
                .slice(0, 4)
                .map((relatedArticle, relatedArticleIndex) => (
                  <RelatedItem
                    key={relatedArticle.uuid}
                    animate={itemAnimateControls}
                    custom={relatedArticleIndex}
                  >
                    <Link
                      href={`/articles/${relatedArticle.meta.slug}`}
                      passHref
                    >
                      <RelatedLink>
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
                                  ? environment.apiRoute +
                                    relatedArticle.header_image
                                  : '/no-image.png'
                              }
                              opacity={1}
                            />
                          </RelatedImageWrapper>

                          <RelatedTitleWrapper>
                            <RelatedTitle>{relatedArticle.title}</RelatedTitle>
                          </RelatedTitleWrapper>
                        </RelatedContainer>
                      </RelatedLink>
                    </Link>
                  </RelatedItem>
                ))}
            </SidebarList>
          </SidebarContainer>
        </>
      }
    />
  );
};

export default RelatedSidebar;
