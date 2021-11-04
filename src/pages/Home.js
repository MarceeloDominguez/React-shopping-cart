import React, { useState } from "react";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { Grid, Box } from "@material-ui/core";
import images from "../util/images";
import banner from "../img/banner.png";
import earphones from "../img/earphones-2.png";
import person from "../img/person-1.jpg";
import {
  Wrapper,
  ContainerImage,
  StyleLink,
  Title,
  BannerContainer,
  TitleBanner,
  Description,
  Btn,
  Item,
  ItemInfo,
  ImagePerson,
  PersonInfo,
} from "./styles/Home.styles";
//@Components
import { Navbar } from "../components/navbar/Navbar";
import { Menu } from "../components/navbar/Menu";
import { NavbarContainer } from "../components/navbar/NavbarContainer";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  const [changeIcon, setChangeIcon] = useState(false);

  return (
    <>
      <div style={{ position: "sticky", top: 0, botton: 0, zIndex: 2 }}>
        <Navbar changeIcon={changeIcon} setChangeIcon={setChangeIcon} />
        <Menu changeIcon={changeIcon} />
      </div>

      <div style={{ overflow: "hidden" }}>
        <NavbarContainer />

        <Wrapper>
          <Grid container spacing={8}>
            {images.map((item, i) => (
              <Grid item key={i} xs={12} sm={4}>
                <ContainerImage>
                  <img src={item.image} alt={item.name} />
                  <Title>{item.name}</Title>
                  <StyleLink to={`/${item.link}`}>
                    SHOP
                    <ArrowForwardIosOutlinedIcon
                      style={{ fontSize: "10px", color: "#f5943e" }}
                    />
                  </StyleLink>
                </ContainerImage>
              </Grid>
            ))}
          </Grid>
          {/* Primer banner */}
          <Box mt={10}>
            <BannerContainer>
              <img src={banner} alt="banner" />
              <div style={{ width: 210 }}>
                <TitleBanner>ZX9 SPEAKER</TitleBanner>
                <Description>
                  Upgrade to premiunm speakers that are phenomenally built to
                  deliver truly remarkable sound
                </Description>
                <Btn>SEE PRODUCT</Btn>
              </div>
            </BannerContainer>
          </Box>
          {/* Segundo banner */}
          <Box mt={10}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Item>
                  <img src={earphones} alt="earphones" />
                </Item>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ItemInfo>
                  <div>
                    <p>YX1 EARPHONES</p>
                    <button>SEE PRODUCT </button>
                  </div>
                </ItemInfo>
              </Grid>
            </Grid>
          </Box>
          {/* Tercer banner */}
          <Box mt={10}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <PersonInfo>
                  <div>
                    <h1>
                      BRINGING YOU THE <b style={{ color: "#f5943e" }}>BEST</b>{" "}
                      AUDIO GEAR
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </PersonInfo>
              </Grid>
              <Grid item xs={12} lg={6}>
                <ImagePerson>
                  <img src={person} alt="person" />
                </ImagePerson>
              </Grid>
            </Grid>
          </Box>
        </Wrapper>
        <Footer />
      </div>
    </>
  );
};
