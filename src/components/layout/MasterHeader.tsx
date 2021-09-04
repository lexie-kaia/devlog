import React from 'react';
import styled from '@emotion/styled';
import { MoonFill, Stars } from 'react-bootstrap-icons';
// components
import PageMargin from '../common/PageMargin';
import LogoWithMenuButton from './LogoWithMenuButton';
import IconButton from '../common/IconButton';
import IconSun from '../../assets/icons/IconSun';
// stores
import { useTheme } from '../../store/Theme';

type Props = {
  toggleSideMenu: () => void;
};

export default function MasterHeader({ toggleSideMenu }: Props) {
  const { theme, changeTheme } = useTheme();

  const onClickThemeButton = () => {
    if (changeTheme == null) return;

    switch (theme) {
      case 'light':
        changeTheme('dim');
        return;
      case 'dim':
        changeTheme('dark');
        return;
      case 'dark':
        changeTheme('light');
        return;
      default:
        changeTheme('light');
        return;
    }
  };

  return (
    <HeaderContainer>
      <PageMargin>
        <HeaderContent>
          <LogoWithMenuButton toggleSideMenu={toggleSideMenu} />
          <ThemeButtons>
            <ThemeButton onClick={onClickThemeButton}>
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

const ThemeButtons = styled.div``;

const ThemeButton = styled(IconButton)`
  svg {
    width: 18px;
    height: 18px;
  }
`;
