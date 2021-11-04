import { initialState } from "./GlobalState";

const addToCart = (product, state) => {
  const updatedCart = [...state.cart];

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updateItem = {
      ...updatedCart[updatedItemIndex],
    };
    updateItem.quantity++;
    updatedCart[updatedItemIndex] = updateItem;
  }

  return { ...state, cart: updatedCart };
};

const removeProduct = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };

  updatedItem.quantity--;

  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

export const reducers = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return addToCart(action.payload, state);

    case "REMOVE_PRODUCT":
      return removeProduct(action.payload, state);

    case "REMOVE_ALL_CART":
      return initialState;

    default:
      return state;
  }
};
