import React from 'react';
import styled from '@emotion/styled';
import { Facebook, Link45deg, Twitter } from 'react-bootstrap-icons';

const ShareButtons = styled.div`
  display: flex;
`;

const ShareButton = styled.button`
  &:not(:last-child) {
    margin-right: 1rem;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: var(--text-second);
  }

  &:hover {
    svg {
      fill: var(--highlight);
    }
  }
`;

const FacebookButton = styled(ShareButton)``;
const TwitterButton = styled(ShareButton)``;
const LinkButton = styled(ShareButton)`
  svg {
    stroke: var(--text-second);
    stroke-width: 0.5px;
  }

  &:hover {
    svg {
      stroke: var(--highlight);
    }
  }
`;

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
`;

function Share() {
  return (
    <ShareButtons>
      <FacebookButton>
        <ButtonIcon>
          <Facebook />
        </ButtonIcon>
      </FacebookButton>
      <TwitterButton>
        <ButtonIcon>
          <Twitter />
        </ButtonIcon>
      </TwitterButton>
      <LinkButton>
        <ButtonIcon>
          <Link45deg />
        </ButtonIcon>
      </LinkButton>
    </ShareButtons>
  );
}

export default Share;
