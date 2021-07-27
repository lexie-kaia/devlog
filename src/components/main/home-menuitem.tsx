import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { QueryStringType } from '../../types';
import { X } from 'react-bootstrap-icons';

type Props = {
  menuType: 'category' | 'tag';
  menuItem: string;
  count: number;
  queryString: QueryStringType;
};

const Container = styled.li<{
  isCurrentQuery: boolean;
  filterType: string;
}>`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;

  a {
    color: ${props =>
      props.isCurrentQuery
        ? props.theme.color.highlight
        : props.theme.color.textSub};

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const XLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.25rem;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  svg {
    fill: ${props => props.theme.color.highlight};
    width: 20px;
    height: 20px;
  }
`;

const isCurrentQuery = (
  queryString: QueryStringType,
  queryKey: 'category' | 'tag',
  queryValue: string
): boolean => {
  if (`${queryKey}=${queryValue}` === 'category=all') {
    return !queryString.includes('category=');
  }
  return queryString.includes(`${queryKey}=${queryValue}`);
};

const addQuery = (
  queryString: QueryStringType,
  queryKey: 'category' | 'tag',
  queryValue: string
): string => {
  if (queryString.includes(`${queryKey}=${queryValue}`)) {
    return queryString;
  }

  let queryList = [];
  let result = '/';

  switch (queryKey) {
    case 'category':
      const tagQueries = queryString.match(/tag=[\w-]+/g) || [];
      if (queryValue === 'all') {
        queryList = [...tagQueries];
      } else {
        queryList = [`${queryKey}=${queryValue}`, ...tagQueries];
      }

      break;
    case 'tag':
      const allQueries = queryString.match(/[\w]+=[\w-]+/g) || [];
      queryList = [...allQueries, `${queryKey}=${queryValue}`];
      break;
    default:
      return result;
  }

  queryList.forEach((queryItem, index) => {
    if (index === 0) {
      result += `?${queryItem}`;
    } else {
      result += `&${queryItem}`;
    }
  });

  return result;
};

const deleteQuery = (
  queryString: QueryStringType,
  queryValue: string
): string => {
  let result = '/';

  const newQueryString = queryString.replace(`tag=${queryValue}`, '');
  const queryList = newQueryString.match(/[\w]+=[\w-]+/g) || [];

  queryList.forEach((queryItem, index) => {
    if (index === 0) {
      result += `?${queryItem}`;
    } else {
      result += `&${queryItem}`;
    }
  });

  return result;
};

function FilterItem({ menuType, menuItem, count, queryString }: Props) {
  return (
    <Container
      isCurrentQuery={isCurrentQuery(queryString, menuType, menuItem)}
      filterType={menuType}
    >
      <Link to={addQuery(queryString, menuType, menuItem)}>
        {menuType === 'tag' ? '#' : ''}
        {menuType === 'category' ? menuItem.replace(/\-/g, ' · ') : menuItem}
        {menuType === 'category' ? ` (${count})` : ''}
      </Link>
      {menuType === 'tag' && isCurrentQuery(queryString, menuType, menuItem) && (
        <XLink to={deleteQuery(queryString, menuItem)}>
          <X />
        </XLink>
      )}
    </Container>
  );
}

export default FilterItem;
