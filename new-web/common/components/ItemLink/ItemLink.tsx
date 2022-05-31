import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ItemLinkStyle } from './styles';

interface IItemLink {
  href: string;
  itemTitle: string;
  onClick?: () => void;
}

const ItemLink: FC<IItemLink> = ({ href, itemTitle, onClick }) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={href}
      {...(onClick && {
        onClick,
      })}
    >
      <ItemLinkStyle
        {...(pathname.includes(itemTitle.toLowerCase()) && {
          className: 'active',
        })}
      >
        {itemTitle}
      </ItemLinkStyle>
    </Link>
  );
};

export default ItemLink;
