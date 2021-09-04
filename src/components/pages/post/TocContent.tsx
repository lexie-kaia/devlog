import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
// types
import { TocItemType } from '../../../types';

type Props = {
  toc: TocItemType[];
};

const Ul = styled.ul`
  margin-left: 0.75rem;
`;

const Li = styled.li``;

const ItemLink = styled(Link)`
  display: block;
  padding: 0.25rem 0;
  color: var(--text-second);
  font-size: 16px;
  line-height: 24px;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    text-decoration: underline;
  }
`;

export default function TocContentRenderer({ toc }: Props) {
  return (
    <Ul>
      {toc.map(item => {
        return (
          <Li key={item.url}>
            <ItemLink to={item.url}> {item.title}</ItemLink>
            {item.items && <TocContentRenderer toc={item.items} />}
          </Li>
        );
      })}
    </Ul>
  );
}
