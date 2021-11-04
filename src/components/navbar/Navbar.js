import React, { useContext } from "react";
import {
  Nav,
  TitleNav,
  NavContainer,
  NavLinks,
  StyleLink,
  Icon,
  IconHamburger,
} from "./Navbar.styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { Link } from "react-router-dom";
import { shopContext } from "../../context/GlobalState";
import { Badge } from "@material-ui/core";

export const Navbar = ({ changeIcon, setChangeIcon }) => {
  const { cartState } = useContext(shopContext);
  const { cart } = cartState;

  const cartItemNumber = cart.reduce((ack, item) => {
    return ack + item.quantity;
  }, 0);

  return (
    <NavContainer>
      <Nav>
        <IconHamburger onClick={() => setChangeIcon(!changeIcon)}>
          {changeIcon ? (
            <CloseOutlinedIcon
              style={{ color: "#fff", position: "absolute", top: 6 }}
            />
          ) : (
            <MenuIcon style={{ color: "#fff", position: "absolute", top: 6 }} />
          )}
        </IconHamburger>

        <TitleNav to="/">audiophile</TitleNav>
        <NavLinks>
          <StyleLink to="/">HOME</StyleLink>
          <StyleLink to="/Headphones">HEADPHONES</StyleLink>
          <StyleLink to="/Speakers">SPEAKERS</StyleLink>
          <StyleLink to="/Earphones">EARPHONES</StyleLink>
        </NavLinks>

        <Link to="/CartPages">
          <Icon>
            <Badge badgeContent={cartItemNumber} color="error">
              <ShoppingCartOutlinedIcon style={{ color: "#fff" }} />
            </Badge>
          </Icon>
        </Link>
      </Nav>
    </NavContainer>
  );
};
