import React, { FC } from 'react';

import {
  CheckboxInput,
  TagCheckbox,
  TagItemContainer,
  TagName,
} from './styles';

interface ITagItem {
  handleCheckboxOnChange: () => void;
  handleCheckboxOnClick: () => void;
  handleTagOnClick: () => void;
  isChecked: boolean;
  tagId: number;
  tagIndex: number;
  tagName: string;
}

const TagItem: FC<ITagItem> = ({
  handleCheckboxOnChange,
  handleCheckboxOnClick,
  handleTagOnClick,
  isChecked,
  tagId,
  tagIndex,
  tagName,
}) => {
  return (
    <TagItemContainer onClick={handleTagOnClick}>
      <TagName className={isChecked ? 'checked' : ''} custom={tagIndex}>
        {tagName}
      </TagName>

      <TagCheckbox>
        <CheckboxInput
          checked={isChecked}
          onChange={handleCheckboxOnChange}
          onClick={handleCheckboxOnClick}
          value={tagId}
        />
      </TagCheckbox>
    </TagItemContainer>
  );
};

export default TagItem;
