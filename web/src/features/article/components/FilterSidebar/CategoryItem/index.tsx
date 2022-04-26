import React, { FC } from 'react';

import { CategoryItemContainer, CategoryName } from './styles';

interface ICategoryItem {
  categoryName: string;
  handleCategoryOnClick: () => void;
  isChecked: boolean;
}

const CategoryItem: FC<ICategoryItem> = ({
  categoryName,
  handleCategoryOnClick,
  isChecked,
}) => {
  return (
    <CategoryItemContainer onClick={handleCategoryOnClick}>
      <CategoryName className={isChecked ? 'checked' : ''}>
        {categoryName}
      </CategoryName>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
