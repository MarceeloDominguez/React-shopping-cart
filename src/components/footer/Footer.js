import { Grid } from "@material-ui/core";
import React from "react";
import {
  Wrapper,
  NavLinks,
  StyleLink,
  Description,
  ContainerIcon,
  RightsReserved,
  LinkHome,
} from "./Footer.styles";
//@Iconos
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export const Footer = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <LinkHome to="/">
            <h1>audiophile</h1>
          </LinkHome>
        </Grid>
        <Grid item xs={12} lg={6}>
          <NavLinks>
            <StyleLink to="/">HOME</StyleLink>
            <StyleLink to="/Headphones">HEADPHONES</StyleLink>
            <StyleLink to="/Speakers">SPEAKERS</StyleLink>
            <StyleLink to="/Earphones">EARPHONES</StyleLink>
          </NavLinks>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Description>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContainerIcon>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FacebookIcon
                style={{ color: "#fff", marginRight: 20, cursor: "pointer" }}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <TwitterIcon
                style={{ color: "#fff", marginRight: 20, cursor: "pointer" }}
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <InstagramIcon
                style={{ color: "#fff", marginRight: 20, cursor: "pointer" }}
              />
            </a>
          </ContainerIcon>
        </Grid>
        <Grid item xs={12} lg={6}>
          <RightsReserved>
            <span>Copyright 2021 All Rights Reserved</span>
          </RightsReserved>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
