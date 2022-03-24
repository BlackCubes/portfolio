import React, { FC } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

import { ItemLinkStyle } from './styles';

export interface IItemLink {
  onClick?: () => void;
  itemTitle: string;
  to: string;
}

const ItemLink: FC<IItemLink> = ({ onClick, itemTitle, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <ItemLinkStyle
      className={match ? 'active' : ''}
      to={to}
      {...(onClick && {
        onClick,
      })}
    >
      {itemTitle}
    </ItemLinkStyle>
  );
};

export default ItemLink;
