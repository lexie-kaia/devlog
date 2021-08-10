import styled from '@emotion/styled';

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  transition: background 150ms;

  svg {
    width: 22px;
    height: 22px;
    fill: var(--text-second);
    transition: fill 150ms;
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background: var(--back-sub);
    svg {
      fill: var(--highlight);
    }
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--highlight);
  }
`;

export default IconButton;
