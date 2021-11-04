import React from "react";
import { StylesMenu, StyleLink } from "./Menu.styles";

export const Menu = ({ changeIcon }) => {
  return (
    <>
      {changeIcon && (
        <StylesMenu>
          <StyleLink to="/">HOME</StyleLink>
          <StyleLink to="/Headphones">HEADPHONES</StyleLink>
          <StyleLink to="/Speakers">SPEAKERS</StyleLink>
          <StyleLink to="/Earphones">EARPHONES</StyleLink>
        </StylesMenu>
      )}
    </>
  );
};
