import { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { CategoryItemContainer, CategoryName } from './styles';

interface ICategoryItem {
  categoryIndex: number;
  categoryName: string;
  handleCategoryOnClick: () => void;
  isCategoryTitleBeingAnimated: boolean;
  isChecked: boolean;
}

const CategoryItem: FC<ICategoryItem> = ({
  categoryIndex,
  categoryName,
  handleCategoryOnClick,
  isCategoryTitleBeingAnimated,
  isChecked,
}) => {
  const nameAnimateControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isCategoryTitleBeingAnimated) {
        nameAnimateControls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [isCategoryTitleBeingAnimated, nameAnimateControls]);

  return (
    <CategoryItemContainer onClick={handleCategoryOnClick}>
      <CategoryName
        animate={nameAnimateControls}
        className={isChecked ? 'checked' : ''}
        custom={categoryIndex}
      >
        {categoryName}
      </CategoryName>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
