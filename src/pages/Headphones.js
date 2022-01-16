import React, { useContext, useState } from "react";
import { shopContext } from "../context/GlobalState";
import { Box, Grid, Paper } from "@material-ui/core";
import { Wrapper } from "./styles/Headphones.styles";
//@Components
import { Navbar } from "../components/navbar/Navbar";
import { Menu } from "../components/navbar/Menu";
import { Items } from "../components/Items";
import { Footer } from "../components/footer/Footer";

export const Headphones = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const { data } = useContext(shopContext);

  const headphones = data?.filter((item) => item.productType === "headphones");

  return (
    <>
      <div style={{ position: "sticky", top: 0, botton: 0, zIndex: 2 }}>
        <Navbar changeIcon={changeIcon} setChangeIcon={setChangeIcon} />
        <Menu changeIcon={changeIcon} />
      </div>

      <Wrapper>
        <Box m={6}>
          <Grid container spacing={3}>
            {headphones?.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} lg={3}>
                <Paper elevation={10}>
                  <Items item={item} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};
