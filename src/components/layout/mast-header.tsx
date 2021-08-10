import React from 'react';
import styled from '@emotion/styled';
import { MoonFill, Stars } from 'react-bootstrap-icons';
// components
import PageMargin from '../common/page-margin';
import LogoWithMenuButton from './logo-with-menu-button';
import IconButton from '../common/icon-button';
import IconSun from '../../assets/icons/icon-sun';
// hooks
import { useTheme } from '../../store/theme';

type Props = {
  toggleSideMenu: () => void;
};

const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--line);
  box-shadow: 0 0 10px var(--shadow);
  z-index: 3;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const Column = styled.div``;

const ThemeButtons = styled.div``;

const ThemeButton = styled(IconButton)`
  svg {
    width: 18px;
    height: 18px;
  }
`;

function MastHeader({ toggleSideMenu }: Props) {
  const { theme, onThemeButtonClick } = useTheme();

  return (
    <HeaderContainer>
      <PageMargin>
        <HeaderContent>
          <Column>
            <LogoWithMenuButton toggleSideMenu={toggleSideMenu} />
          </Column>

          <ThemeButtons>
            <ThemeButton onClick={onThemeButtonClick}>
              {theme === 'light' && <IconSun />}
              {theme === 'dim' && <Stars />}
              {theme === 'dark' && <MoonFill />}
            </ThemeButton>
          </ThemeButtons>
        </HeaderContent>
      </PageMargin>
    </HeaderContainer>
  );
}

export default MastHeader;
