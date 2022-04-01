import styled, { css } from "styled-components";

export const NavbarContainer = styled.header``;

export const AppBar = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);

  .menu {
    position: absolute;
    display: block;

    @media ${(props) => props.theme.device.mobileL} {
      display: none;
    }
  }

  @media ${(props) => props.theme.device.mobileL} {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
  }
  @media ${(props) => props.theme.device.tablet} {
    z-index: 1;
    position: fixed;
    top: 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-flow: column;
    align-items: center;
    height: 124px;
    background-color: transparent;
    box-shadow: unset;
  }
`;

export const MenuNav = styled.nav`
  display: none;

  @media ${(props) => props.theme.device.mobileL} {
    display: block;
    margin: 0 16px;
  }
  @media ${(props) => props.theme.device.tablet} {
    margin: 24px 0 24px 96px;
  }
  @media ${(props) => props.theme.device.laptop} {
    margin: 48px 0 48px 96px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2em;

  @media ${(props) => props.theme.device.tablet} {
    gap: 3em;
  }
  @media ${(props) => props.theme.device.laptop} {
    gap: 4.5em;
  }
`;

export const MenuItem = styled.li`
  position: relative;
  font-family: ${(props) => props.theme.font.Lora};
  font-size: ${(props) => props.theme.fontSize.menuSm};
  font-weight: 400;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.color.text};
    transition: width 0.2s ease-in-out;
  }

  &:hover {
    &:after {
      margin-right: 8px;
      width: calc(100% - 8px);

      @media ${(props) => props.theme.device.mobileL} {
        bottom: -5px;
        width: 100%;
      }
    }
  }

  @media ${(props) => props.theme.device.mobileL} {
    font-size: ${(props) => props.theme.fontSize.menuSm};
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSize.menuSm};
  }
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.menuLg};
  }
`;

export const Logo = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: ${(props) => props.theme.font.Lora};
  font-size: ${(props) => props.theme.fontSize.logoSm};

  @media ${(props) => props.theme.device.mobileL} {
    position: unset;
    transform: unset;
    font-size: ${(props) => props.theme.fontSize.logoMd};
    margin: 0 16px;
    grid-column-start: 1;
  }
  @media ${(props) => props.theme.device.tablet} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: ${(props) => props.theme.fontSize.logoLg};
    margin: 0;
  }
`;

export const SocialMediaList = styled.ul`
  list-style: none;
  display: none;

  & > svg {
    width: 18px;
    height: 18px;
  }

  @media ${(props) => props.theme.device.mobileL} {
    display: flex;
    gap: 2em;
    margin-right: 16px;
  }
  @media ${(props) => props.theme.device.tablet} {
    display: flex;
    gap: 3em;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    margin: 24px 96px 24px 0;

    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  @media ${(props) => props.theme.device.laptop} {
    gap: 4.5em;
    margin: 48px 96px 48px 0;
  }
`;

export const SocialMediaItem = styled.li`
  display: inline-flex;
`;

interface SidebarProps {
  show: boolean;
}

export const Sidebar = styled.nav<SidebarProps>`
  ${(props) => {
    if (props.show) {
      return css`
        left: 0;
        transition: left 0.5s ease-in-out;
      `;
    } else {
      return css`
        left: -100%;
        transition: left 1s ease-in-out;
      `;
    }
  }};
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

  & > ${MenuList} {
    display: flex;
    height: 100vh;
    /* height: calc(100vh - 40%); */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4em;

    & > ${MenuItem} {
      position: relative;
      font-size: ${(props) => props.theme.fontSize.menuXl};
      letter-spacing: 8px;
      text-transform: uppercase;
      ${(props) => {
        if (props.show) {
          return css`
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: all 1s ease-in-out;
          `;
        } else {
          return css`
            opacity: 0;
            visibility: hidden;
            transform: translateY(-25px);
            transition: all 0.25s ease-in-out;
          `;
        }
      }};
    }
  }

  & > .close-menu {
    position: absolute;
    top: 1em;
    right: 1em;

    ${(props) => {
      if (props.show) {
        return css`
          opacity: 1;
          visibility: visible;
          transition: all 0.5s ease-in-out;
        `;
      } else {
        return css`
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease-in-out;
        `;
      }
    }};
  }
`;
