import React from 'react';
import styled from '@emotion/styled';
// components
import MenuItem from './SideMenuItem';
// types
import { MenuListType, MenuTypeType } from '../../types';

type Props = {
  menuType: MenuTypeType;
  menuList: MenuListType;
};

export default function SidemenuListRenderer({ menuType, menuList }: Props) {
  return (
    <SideMenu>
      {Array.from(menuList).map(([category, count]) => (
        <MenuItem
          key={category}
          menuType={menuType}
          menuItem={category}
          count={count}
        />
      ))}
    </SideMenu>
  );
}

const SideMenu = styled.ul`
  padding: 1.5rem 0 1.5rem 0.5rem;
`;
