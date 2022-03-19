import { Link } from 'react-router-dom';
import styled from 'styled-components';

type TItemsContainer = {
  windowHeight: number;
};

export const Nav = styled.nav`
  height: 11rem;
  background-color: ${({ theme }) => theme.colors.white.hex};

  &.scrolling {
    @media ${({ theme }) => theme.responsive.below599} {
      border-bottom: ${({ theme }) =>
        `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    }
  }

  @media ${({ theme }) => theme.responsive.below599} {
    position: fixed;
    top: 0;
    height: 8rem;
    width: 100%;
    max-width: 100vw !important;
    padding-right: 1rem;
    padding-left: 1rem;
    border-bottom: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0)`};
    transition: border 0.3s ease-in-out;
    z-index: 100;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: inherit;

  @media ${({ theme }) => theme.responsive.below599} {
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  width: 5.5rem;

  @media ${({ theme }) => theme.responsive.below899} {
    width: 5rem;
  }
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const HamburgerMenuContainer = styled.div`
  display: none;

  @media ${({ theme }) => theme.responsive.below599} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 3rem;
    height: 3rem;
  }
`;

export const HamburgerMenu = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.colors.secondary.hex};
  transition: all 0.05s linear;

  &::before {
    transform: translateY(-1rem);
  }

  &::after {
    transform: translateY(1rem);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary.hex};
    transition: all 0.05s linear;
  }
`;

export const ItemsContainer = styled.ul<TItemsContainer>`
  display: flex;
  list-style: none;

  @media ${({ theme }) => theme.responsive.below599} {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    display: none;
    width: 100%;
    height: ${({ windowHeight }) => `${windowHeight / 10}rem`};
    padding-top: 2rem;
    background-color: ${({ theme }) => theme.colors.white.hex};
    border-top: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    background-attachment: scroll !important;
  }
`;

export const Item = styled.li`
  height: 100%;
  padding-left: 11rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-left: 6rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    padding-left: 4rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    height: auto;
    padding-bottom: 1rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    transition: all 1s ease-out;
  }
`;

export const ItemLink = styled(Link)`
  display: inline-flex;
  align-items: end;
  height: inherit;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.hex};
    font-size: 1.89rem;
    letter-spacing: 0.05rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.secondary.hex};

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.79rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.59rem;
      border-top: ${({ theme }) =>
        `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
      border-right: ${({ theme }) =>
        `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
      border-bottom: ${({ theme }) =>
        `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
      border-left: ${({ theme }) =>
        `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
      border-radius: 1rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 1.9rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    display: block;
    font-size: 1.7rem;
    padding: 0.7rem 0.7rem;
    transition: all 0.05s linear;
  }
`;

export const HamburgerMenuCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: none;

  &:checked ~ ${HamburgerMenuContainer} ${HamburgerMenu} {
    background-color: transparent;

    &::before {
      transform: translateY(-50%) rotate(45deg);
    }

    &::after {
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  &:checked ~ ${ItemsContainer} {
    display: block;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    position: absolute;
    right: 1rem;
    display: block;
    width: 3rem;
    height: 3rem;
    opacity: 0;
  }
`;
