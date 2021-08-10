import React from 'react';
import styled from '@emotion/styled';
// components
import MenuItem from './sidemenu-item';
// types
import { MenuListType, MenuTypeType } from '../../types';

type Props = {
  menuType: MenuTypeType;
  menuList: MenuListType;
};

const Container = styled.ul`
  padding: 1.5rem 0 1.5rem 0.5rem;
`;

function SidemenuList({ menuType, menuList }: Props) {
  return (
    <Container>
      {Array.from(menuList).map(([category, count]) => (
        <MenuItem
          key={category}
          menuType={menuType}
          menuItem={category}
          count={count}
        />
      ))}
    </Container>
  );
}

export default SidemenuList;
