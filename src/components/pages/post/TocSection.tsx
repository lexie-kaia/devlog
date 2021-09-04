import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ChevronDown } from 'react-bootstrap-icons';
// components
import TocContentRenderer from './TocContent';
import IconButton from '../../common/IconButton';
// types
import { TocListType } from '../../../types';

type Props = {
  toc: TocListType;
  title: string;
};

export default function TocSectionRenderer({ toc, title }: Props) {
  return (
    <TocSection>
      <Header>
        <ItemLink to={`#${title.replace(/ /g, '-')}`}>{title}</ItemLink>
      </Header>
      <Body>
        <TocContentRenderer toc={toc.items} />
      </Body>
    </TocSection>
  );
}

const TocSection = styled.section`
  position: sticky;
  top: 5rem;
  margin-top: 1.5rem;
`;

const Header = styled.div`
  margin-bottom: 1rem;
`;

const Body = styled.div`
  margin-left: -0.75rem;
`;

const ItemLink = styled(Link)`
  display: block;
  color: var(--text-second);
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    text-decoration: underline;
  }
`;
