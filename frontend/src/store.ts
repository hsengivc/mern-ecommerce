import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  cartReducer,
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userProfileUpdateReducer,
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  userListReducer,
  userUpdateReducer,
  productDeleteReducer,
} from "./store/reducers";
import { ReduxStates } from "./store/types";

const reducer = combineReducers<ReduxStates>({
  ProductList: productListReducer,
  ProductDetails: productDetailsReducer,
  Cart: cartReducer,
  UserLogin: userLoginReducer,
  UserRegister: userRegisterReducer,
  UserDetails: userDetailsReducer,
  UserProfileUpdate: userProfileUpdateReducer,
  CreateOrder: orderCreateReducer,
  OrderDetails: orderDetailsReducer,
  OrderPay: orderPayReducer,
  MyOrderList: myOrderListReducer,
  UserList: userListReducer,
  UserDelete: userDetailsReducer,
  UserUpdate: userUpdateReducer,
  ProductDelete: productDeleteReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems");
const cartItems = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [];

const userInfoFromStorage = localStorage.getItem("userInfo");
const userInfo = userInfoFromStorage
  ? JSON.parse(userInfoFromStorage)
  : undefined;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress");
const shippingAddress = shippingAddressFromStorage
  ? JSON.parse(shippingAddressFromStorage)
  : {};

const initialState = {
  Cart: { cartItems, shippingAddress },
  UserLogin: { userInfo },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
