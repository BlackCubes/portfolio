import { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { SortItemContainer, SortName } from './styles';

interface ISortItemProps {
  sortIndex: number;
  sortName: string;
  handleOnSortClick: () => void;
  isSortTitleBeingAnimated: boolean;
  isChecked: boolean;
}

const SortItem: FC<ISortItemProps> = ({
  sortIndex,
  sortName,
  handleOnSortClick,
  isSortTitleBeingAnimated,
  isChecked,
}) => {
  const nameAnimateControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSortTitleBeingAnimated) {
        nameAnimateControls.start('visible');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [isSortTitleBeingAnimated, nameAnimateControls]);

  return (
    <SortItemContainer onClick={handleOnSortClick}>
      <SortName
        animate={nameAnimateControls}
        className={isChecked ? 'checked' : ''}
        custom={sortIndex}
      >
        {sortName}
      </SortName>
    </SortItemContainer>
  );
};

export default SortItem;
