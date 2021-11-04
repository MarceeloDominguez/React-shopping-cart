import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";

export const NavContainer = styled.div`
  max-height: 100%;
  padding: 0px calc((100vw - 1300px) / 2);
  background: #28292a;
  align-items: center;
  color: red;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
`;

export const TitleNav = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 20px 20px;
  font-size: 22px;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 40px;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    text-align: center;
    padding-right: 12px;
    font-size: 22px;
  }
`;

export const NavLinks = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyleLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 20px 20px;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }
`;

export const Icon = styled(IconButton)`
  color: #fff;
  cursor: pointer;
  padding: 20px 20px;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 375px) {
    padding: 0;
  }
`;

export const IconHamburger = styled.div`
  opacity: 0;
  z-index: 3;
  position: absolute;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 1.8rem;
    cursor: pointer;
    opacity: 1;
  }
`;
