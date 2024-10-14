import { FC, useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ICategory, IOrder, ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import CategoryItem from './CategoryItem';
import SortItem from './SortItem';
import TagItem from './TagItem';
import {
  ClearFilter,
  ClearFilterButton,
  SidebarContainer,
  SidebarList,
  SidebarTitle,
} from './styles';

type TTagCheckedState = Array<boolean>;

type TCategoryCheckedState = {
  checked: {
    indexNumber: number;
  };
};

type TOrderCheckedState = {
  checked: {
    indexNumber: number;
  };
};

interface IFilterSidebar {
  categoriesData: ICategory[];
  handleCategoryTagQuery: (
    categoryTagName: 'category' | 'tags',
    categoryTagId: number
  ) => void;
  handleClearFilter: (clearCase: 'clearAll') => void;
  handleOnOrdersQuery: (orderId: 'first_published_at') => void;
  ordersData: IOrder[];
  tagsData: ITag[];
}

const FilterSidebar: FC<IFilterSidebar> = ({
  categoriesData,
  handleCategoryTagQuery,
  handleClearFilter,
  handleOnOrdersQuery,
  ordersData,
  tagsData,
}) => {
  const clearFilterAnimateControls = useAnimation();

  const { inView: orderContainerInView, ref: orderContainerRef } = useInView();
  const orderTitleAnimateControls = useAnimation();
  const [isOrderTitleBeingAnimated, setIsOrderTitleBeingAnimated] =
    useState(false);

  const { inView: categoryContainerInView, ref: categoryContainerRef } =
    useInView();
  const categoryTitleAnimateControls = useAnimation();
  const [isCategoryTitleBeingAnimated, setIsCategoryTitleBeingAnimated] =
    useState(false);

  const { inView: tagContainerInView, ref: tagContainerRef } = useInView();
  const tagTitleAnimateControls = useAnimation();
  const [isTagTitleBeingAnimated, setIsTagTitleBeingAnimated] = useState(false);

  // For the UI side.
  const [tagCheckedState, setTagCheckedState] = useState<TTagCheckedState>(
    new Array(tagsData.length).fill(false)
  );
  // For the UI side.
  const [categoryCheckedState, setCategoryCheckedState] =
    useState<TCategoryCheckedState>({
      checked: {
        indexNumber: -1,
      },
    });
  // For the UI side.
  const [orderCheckedState, setOrderCheckedState] =
    useState<TOrderCheckedState>({
      checked: {
        indexNumber: -1,
      },
    });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (orderContainerInView) {
        clearFilterAnimateControls.start('visible');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [clearFilterAnimateControls, orderContainerInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (orderContainerInView) {
        orderTitleAnimateControls.start('visible');

        setIsOrderTitleBeingAnimated(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [orderContainerInView, orderTitleAnimateControls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoryContainerInView) {
        categoryTitleAnimateControls.start('visible');

        setIsCategoryTitleBeingAnimated(true);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [categoryContainerInView, categoryTitleAnimateControls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (tagContainerInView) {
        tagTitleAnimateControls.start('visible');

        setIsTagTitleBeingAnimated(true);
      }
    }, 900);

    return () => clearTimeout(timer);
  }, [tagContainerInView, tagTitleAnimateControls]);

  return (
    <GeneralSidebar
      sidebarClassName="filter-sidebar"
      sidebarContainerClassName="filter-sidebar"
      sidebarContentElement={
        <>
          <ClearFilter animate={clearFilterAnimateControls}>
            <ClearFilterButton
              onClick={() => {
                handleClearFilter('clearAll');

                setTagCheckedState(new Array(tagsData.length).fill(false));

                setCategoryCheckedState({
                  checked: {
                    indexNumber: -1,
                  },
                });
              }}
            >
              Clear filter
            </ClearFilterButton>
          </ClearFilter>

          <SidebarContainer ref={orderContainerRef}>
            <SidebarTitle animate={orderTitleAnimateControls}>
              <HeadingTertiary>Sort</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {ordersData.map((order, orderIndex) => (
                <SortItem
                  key={order.id}
                  sortIndex={orderIndex}
                  sortName={order.name}
                  handleOnSortClick={() => {
                    handleOnOrdersQuery(order.id);

                    setOrderCheckedState((prevStates) => ({
                      ...prevStates,
                      checked: {
                        indexNumber:
                          prevStates.checked.indexNumber === orderIndex
                            ? -1
                            : orderIndex,
                      },
                    }));
                  }}
                  isSortTitleBeingAnimated={isOrderTitleBeingAnimated}
                  isChecked={
                    orderCheckedState.checked.indexNumber === orderIndex
                  }
                />
              ))}
            </SidebarList>
          </SidebarContainer>

          <SidebarContainer ref={categoryContainerRef}>
            <SidebarTitle animate={categoryTitleAnimateControls}>
              <HeadingTertiary>Categories</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {categoriesData.map((category, categoryIndex) => (
                <CategoryItem
                  key={`${category.uuid}`}
                  categoryIndex={categoryIndex}
                  categoryName={category.name}
                  handleCategoryOnClick={() => {
                    handleCategoryTagQuery('category', category.id);

                    setCategoryCheckedState((prevCategoryCheckedState) => ({
                      ...prevCategoryCheckedState,
                      checked: {
                        indexNumber:
                          prevCategoryCheckedState.checked.indexNumber ===
                          categoryIndex
                            ? -1
                            : categoryIndex,
                      },
                    }));
                  }}
                  isCategoryTitleBeingAnimated={isCategoryTitleBeingAnimated}
                  isChecked={
                    categoryCheckedState.checked.indexNumber === categoryIndex
                  }
                />
              ))}
            </SidebarList>
          </SidebarContainer>

          <SidebarContainer ref={tagContainerRef}>
            <SidebarTitle animate={tagTitleAnimateControls}>
              <HeadingTertiary>Tags</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {tagsData.map((tag, tagIndex) => (
                <TagItem
                  key={`${tag.slug}-${tag.id}`}
                  handleCheckboxOnChange={() =>
                    handleCategoryTagQuery('tags', tag.id)
                  }
                  handleCheckboxOnClick={() =>
                    handleCategoryTagQuery('tags', tag.id)
                  }
                  handleTagOnClick={() => {
                    handleCategoryTagQuery('tags', tag.id);

                    setTagCheckedState((prevTagCheckedState) =>
                      prevTagCheckedState.map((prevBoolean, prevBooleanIndex) =>
                        prevBooleanIndex === tagIndex
                          ? !prevBoolean
                          : prevBoolean
                      )
                    );
                  }}
                  isChecked={tagCheckedState[tagIndex]}
                  isTagTitleBeingAnimated={isTagTitleBeingAnimated}
                  tagId={tag.id}
                  tagIndex={tagIndex}
                  tagName={tag.name}
                />
              ))}
            </SidebarList>
          </SidebarContainer>
        </>
      }
    />
  );
};

export default FilterSidebar;
