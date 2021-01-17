import { CartActions, ShippingAddressAction } from "../enums";
import { CartItemsState, CartItemAction } from "../types";

const initialState: CartItemsState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartItemsState = initialState,
  action: CartItemAction
) => {
  switch (action.type) {
    case CartActions.CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existItem.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CartActions.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case ShippingAddressAction.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};
