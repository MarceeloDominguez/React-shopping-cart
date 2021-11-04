import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const StylesMenu = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100vh;
  position: absolute;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;

  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  line-height: 100px;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #fff;
  }
`;
