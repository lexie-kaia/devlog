import React, { ReactNode, useState, useEffect } from 'react';
import styled from '@emotion/styled';
// components
import MasterHeader from './MasterHeader';
import MastFooter from './MasterFooter';
import SideMenuSectionRenderer from './SideMenuSection';
// types
import { MenuListType } from '../../types';
import { useCallback } from 'react';

type Props = {
  children: ReactNode;
  categoryList: MenuListType;
  tagList: MenuListType;
  isFullPageLayout: boolean;
};

export default function MasterLayout({
  children,
  categoryList,
  tagList,
  isFullPageLayout,
}: Props) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isFullPageLayout) {
      setIsSideMenuOpen(false);
    } else {
      if (window.innerWidth <= 960) {
        setIsSideMenuOpen(false);
      } else {
        setIsSideMenuOpen(true);
      }
    }
  }, [isFullPageLayout]);

  useEffect(() => {
    if (isFullPageLayout) return;

    let rafOnResize: any = null;
    let initialWidth: number = window.innerWidth;
    let finalWidth: number = window.innerWidth;

    const onResize = () => {
      if (rafOnResize) {
        window.cancelAnimationFrame(rafOnResize);
      }

      rafOnResize = window.requestAnimationFrame(() => {
        finalWidth = window.innerWidth;
        if (initialWidth > finalWidth) {
          if (initialWidth > 960 && finalWidth <= 960) {
            setIsSideMenuOpen(false);
          }
        } else {
          if (initialWidth <= 960 && finalWidth > 960) {
            setIsSideMenuOpen(true);
          }
        }
        initialWidth = finalWidth;
      });
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isFullPageLayout]);

  const toggleSideMenu = useCallback(() => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }, [isSideMenuOpen]);

  return (
    <LayoutContainer>
      <MasterHeader toggleSideMenu={toggleSideMenu} />

      <MainContainer isFullPageLayout={isFullPageLayout}>
        <SideMenuSectionRenderer
          categoryList={categoryList}
          tagList={tagList}
          isFullPageLayout={isFullPageLayout}
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
        />

        {children}
      </MainContainer>

      {isFullPageLayout && <MastFooter />}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
`;

const MainContainer = styled.div<{ isFullPageLayout: boolean }>`
  min-height: ${props =>
    props.isFullPageLayout ? `calc(100vh - 10rem)` : `calc(100vh - 5rem)`};
  height: 100%;
  @media screen and (min-width: 961px) {
    display: ${props => (props.isFullPageLayout ? `block` : `grid`)};
    grid-template-columns: ${props =>
      props.isFullPageLayout
        ? `unset`
        : `minmax(22rem, 1fr) minmax(auto, 1080px) 1fr`};
  }
`;
