import React, { FC } from 'react';
import { useLocation, useMatch, useResolvedPath } from 'react-router-dom';

import { ItemLinkStyle } from './styles';

export interface IItemLink {
  onClick?: () => void;
  itemTitle: string;
  to: string;
}

/* eslint-disable no-nested-ternary */
const ItemLink: FC<IItemLink> = ({ onClick, itemTitle, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const location = useLocation();

  return (
    <ItemLinkStyle
      className={
        match
          ? 'active'
          : location.pathname.includes(itemTitle.toLowerCase())
          ? 'active'
          : ''
      }
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
