import React, { createContext, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { reducers } from "./reducers";

export const shopContext = createContext();

export const initialState = {
  cart: [],
};

const respApi = () =>
  fetch("http://localhost:1337/products").then((res) => res.json());

export const GlobalState = ({ children }) => {
  const { isLoading, error, data } = useQuery("products", respApi);

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
        isLoading,
        error,
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
