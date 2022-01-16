import React, { useContext } from "react";
import currencyFormatter from "currency-formatter";
import { Wrapper, ContainerPrice, ContainerTitle } from "./Item.styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { shopContext } from "../context/GlobalState";

export const Items = ({ item }) => {
  const { addProductToCart } = useContext(shopContext);

  return (
    <Card>
      <Wrapper>
        <div>
          <Box mt={2}>
            <CardMedia
              component="img"
              height="150"
              image={item.image}
              alt={item.title}
            />
          </Box>

          <ContainerTitle>
            <CardContent>
              <Box mt={5}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </Box>
            </CardContent>
          </ContainerTitle>
        </div>

        <ContainerPrice>
          <CardContent>
            <Typography variant="h6">
              {currencyFormatter.format(item.price, { code: "USD" })}
            </Typography>
          </CardContent>
        </ContainerPrice>

        <CardActions>
          <Button
            onClick={() => addProductToCart(item)}
            variant="contained"
            endIcon={<ShoppingCartOutlinedIcon />}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Wrapper>
    </Card>
  );
};
