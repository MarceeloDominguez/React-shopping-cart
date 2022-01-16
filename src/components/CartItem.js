import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import React, { useContext } from "react";
import { shopContext } from "../context/GlobalState";
import currencyFormatter from "currency-formatter";
import {
  Product,
  ProductDetails,
  Details,
  PriceDetails,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
} from "./CartItem.styles";

export const CartItem = ({ item }) => {
  const { addProductToCart, removeProductFromCart } = useContext(shopContext);

  return (
    <Product>
      <ProductDetails>
        <img src={item.image} alt={item.title} />

        <Details>
          <h2>{item.title}</h2>
          <br />
          <p>{item.description}</p>
        </Details>
      </ProductDetails>
      <PriceDetails>
        <ProductAmountContainer>
          <AddCircleOutlineIcon
            onClick={() => addProductToCart(item)}
            style={{ cursor: "pointer" }}
          />
          <ProductAmount>{item.quantity}</ProductAmount>
          <RemoveCircleOutlineIcon
            onClick={() => removeProductFromCart(item.id)}
            style={{ cursor: "pointer" }}
          />
        </ProductAmountContainer>
        <ProductPrice>
          {currencyFormatter.format(item.price * item.quantity, {
            code: "USD",
          })}
        </ProductPrice>
      </PriceDetails>
    </Product>
  );
};
