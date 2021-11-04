import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  background-color: black;
`;

export const LinkHome = styled(Link)`
  text-decoration: none;

  h1 {
    color: #fff;
    font-weight: bold;
    padding: 40px 20px;
    font-size: 22px;

    &:hover {
      opacity: 0.8;
    }
  }

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 375px) {
    h1 {
      text-align: center;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const StyleLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 40px 20px;
  font-size: 12px;
  padding-right: 0px;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }

  @media screen and (max-width: 375px) {
    align-self: center;
  }
`;

export const Description = styled.p`
  padding: 40px 20px;
  font-size: 14px;
  color: #fff;
  opacity: 0.5;

  @media screen and (max-width: 375px) {
    text-align: center;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 20px;
  padding-right: 0px;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 375px) {
    justify-content: center;
  }
`;

export const RightsReserved = styled.div`
  padding: 20px;
  font-size: 12px;

  span {
    color: #fff;
    opacity: 0.5;
  }

  @media screen and (max-width: 375px) {
    text-align: center;
  }
`;
