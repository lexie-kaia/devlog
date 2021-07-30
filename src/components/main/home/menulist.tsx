import React from 'react';
import styled from '@emotion/styled';
// components
import MenuItem from './menuitem';
// types
import { MenuListType, MenuTypeType, QueryStringType } from '../../../types';

type Props = {
  menuType: MenuTypeType;
  menuList: MenuListType;
  queryString: QueryStringType;
};

const Container = styled.ul`
  padding: 1.5rem 0;
`;

function MenuList({ menuType, menuList, queryString }: Props) {
  return (
    <Container>
      {Array.from(menuList).map(([category, count]) => (
        <MenuItem
          key={category}
          menuType={menuType}
          menuItem={category}
          count={count}
          queryString={queryString}
        />
      ))}
    </Container>
  );
}

export default MenuList;
