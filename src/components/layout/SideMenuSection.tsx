import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
// components
import SectionRenderer from '../common/Section';
import SidemenuListRenderer from './SideMenuList';
import LogoWithMenuButton from './LogoWithMenuButton';
// types
import { MenuListType } from '../../types';

type Props = {
  categoryList: MenuListType;
  tagList: MenuListType;
  isFullPageLayout: boolean;
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
};

export default function SideMenuSectionRenderer({
  categoryList,
  tagList,
  isFullPageLayout,
  isSideMenuOpen,
  toggleSideMenu,
}: Props) {
  const sideMenuBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFullPageLayout) return;
    if (sideMenuBodyRef.current == null) return;

    let rafOnScroll: any = null;

    const onScroll = () => {
      if (rafOnScroll) {
        window.cancelAnimationFrame(rafOnScroll);
      }

      if (document.body.clientWidth <= 960) return;

      rafOnScroll = window.requestAnimationFrame(() => {
        if (sideMenuBodyRef.current == null) return;
        if (window.pageYOffset > 80) {
          sideMenuBodyRef.current.style.height = `100vh`;
        } else {
          sideMenuBodyRef.current.style.height = `calc(100vh - 5rem)`;
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isFullPageLayout]);

  return (
    <SideMenuContainer isFullPageLayout={isFullPageLayout}>
      <SideMenuContent
        isSideMenuOpen={isSideMenuOpen}
        isFullPageLayout={isFullPageLayout}
      >
        <SideMenuHeader isFullPageLayout={isFullPageLayout}>
          <LogoWithMenuButton toggleSideMenu={toggleSideMenu} />
        </SideMenuHeader>
        <SideMenuBody ref={sideMenuBodyRef} isFullPageLayout={isFullPageLayout}>
          <SectionRenderer title="categories" isAccordion={true}>
            <SidemenuListRenderer menuType="category" menuList={categoryList} />
          </SectionRenderer>
          <SectionRenderer title="tags" isAccordion={true}>
            <SidemenuListRenderer menuType="tag" menuList={tagList} />
          </SectionRenderer>
        </SideMenuBody>
      </SideMenuContent>
      <BackShadow
        isSideMenuOpen={isSideMenuOpen}
        isFullPageLayout={isFullPageLayout}
        onClick={toggleSideMenu}
      />
    </SideMenuContainer>
  );
}

const SideMenuContainer = styled.nav<{
  isFullPageLayout: boolean;
}>`
  width: 100%;
  @media screen and (min-width: 961px) {
    min-width: ${props => (props.isFullPageLayout ? `unset` : `20rem`)};
  }
`;

const SideMenuContent = styled.div<{
  isSideMenuOpen: boolean;
  isFullPageLayout: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  max-width: 18rem;
  width: 100%;
  height: 100%;
  background: var(--back-main);
  transform: ${props =>
    props.isSideMenuOpen ? `translateX(0)` : `translateX(-100%)`};
  transition: transform 300ms ease-in-out;

  @media screen and (min-width: 577px) {
    max-width: 22rem;
  }
  @media screen and (min-width: 961px) {
    position: ${props => (props.isFullPageLayout ? `fixed` : `sticky`)};
    z-index: ${props => (props.isFullPageLayout ? `5` : `2`)};
    max-width: ${props => (props.isFullPageLayout ? `25rem` : `unset`)};
    min-width: ${props => (props.isFullPageLayout ? `unset` : `22rem`)};
    height: ${props => (props.isFullPageLayout ? `100%` : `unset`)};
  }
`;

const SideMenuHeader = styled.div<{ isFullPageLayout: boolean }>`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 1rem;
  border-bottom: 1px solid var(--line);
  box-shadow: 0 0 10px var(--shadow);
  @media screen and (min-width: 577px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 769px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 961px) {
    display: ${props => (props.isFullPageLayout ? `flex` : `none`)};
    padding: 0 1rem 0 4rem;
  }
`;

const SideMenuBody = styled.div<{ isFullPageLayout: boolean }>`
  padding: 1.5rem 1rem;
  height: calc(100vh - 5rem);
  overflow-y: auto;

  @media screen and (min-width: 577px) {
    padding: 1.5rem 2rem;
  }
  @media screen and (min-width: 769px) {
    padding: 1.5rem 3rem;
  }
  @media screen and (min-width: 961px) {
    padding: 1.5rem 1rem 1.5rem 4rem;
  }
`;

const BackShadow = styled.div<{
  isSideMenuOpen: boolean;
  isFullPageLayout: boolean;
}>`
  display: ${props => (props.isSideMenuOpen ? `block` : `none`)};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  background: var(--text-second);
  opacity: 0.25;

  @media screen and (min-width: 961px) {
    display: ${props =>
      props.isFullPageLayout
        ? props.isSideMenuOpen
          ? `block`
          : `none`
        : `none`};
  }
`;
