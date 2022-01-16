import React, { createContext, useEffect, useReducer } from "react";
import { reducers } from "./reducers";
import data from "../util/data";

export const shopContext = createContext();

export const initialState = {
  cart: [],
};

export const GlobalState = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducers, initialState, () => {
    const localData = localStorage.getItem("list");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(cartState));
  }, [cartState]);

  const addProductToCart = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };

  const removeProductFromCart = (productId) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: productId,
    });
  };

  const deleteAllCart = () => {
    dispatch({
      type: "REMOVE_ALL_CART",
    });
  };

  return (
    <shopContext.Provider
      value={{
        data,
        cartState,
        addProductToCart,
        removeProductFromCart,
        deleteAllCart,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};
