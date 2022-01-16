import React, { useContext, useState } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { shopContext } from "../context/GlobalState";
import { Wrapper } from "./styles/Speakers.styles";
//@Components
import { Navbar } from "../components/navbar/Navbar";
import { Menu } from "../components/navbar/Menu";
import { Items } from "../components/Items";
import { Footer } from "../components/footer/Footer";

export const Speakers = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const { data } = useContext(shopContext);

  const speakers = data?.filter((item) => item.productType === "speaker");

  return (
    <>
      <div style={{ position: "sticky", top: 0, botton: 0, zIndex: 2 }}>
        <Navbar changeIcon={changeIcon} setChangeIcon={setChangeIcon} />
        <Menu changeIcon={changeIcon} />
      </div>

      <Wrapper>
        <Box m={6}>
          <Grid container spacing={3}>
            {speakers.map((item) => (
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
