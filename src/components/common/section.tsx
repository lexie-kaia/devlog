import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { ChevronDown } from 'react-bootstrap-icons';
// components
import IconButton from './IconButton';

type Props = {
  children: ReactNode;
  title: string;
  isAccordion?: boolean;
};

export default function SectionRenderer({
  children,
  title,
  isAccordion,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Section>
      <Header>
        {isAccordion && (
          <OpenButton onClick={onClick} isOpen={isOpen}>
            <ChevronDown />
          </OpenButton>
        )}
        <Title>{title}</Title>
      </Header>
      <Body isOpen={isOpen}>{children}</Body>
    </Section>
  );
}

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

const Body = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`;

const OpenButton = styled(IconButton)<{ isOpen: boolean }>`
  margin-right: 0.5rem;
  transform: ${props => (props.isOpen ? 'rotate(0)' : 'rotate(-90deg)')};
  transition: transform 200ms ease-in-out;

  svg {
    width: 16px;
    height: 16px;
    stroke: var(--text-second);
    stroke-width: 0.5px;
  }

  &:focus,
  &:hover,
  &:active {
    svg {
      stroke: var(--highlight);
    }
  }
`;
