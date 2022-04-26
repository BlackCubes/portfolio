import React, { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

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
  isTagTitleBeingAnimated: boolean;
  tagId: number;
  tagIndex: number;
  tagName: string;
}

const TagItem: FC<ITagItem> = ({
  handleCheckboxOnChange,
  handleCheckboxOnClick,
  handleTagOnClick,
  isChecked,
  isTagTitleBeingAnimated,
  tagId,
  tagIndex,
  tagName,
}) => {
  const nameAnimateControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTagTitleBeingAnimated) {
        nameAnimateControls.start('visible');
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [isTagTitleBeingAnimated, nameAnimateControls]);

  return (
    <TagItemContainer onClick={handleTagOnClick}>
      <TagName
        animate={nameAnimateControls}
        className={isChecked ? 'checked' : ''}
        custom={tagIndex}
      >
        {tagName}
      </TagName>

      <TagCheckbox animate={nameAnimateControls} custom={tagIndex}>
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
