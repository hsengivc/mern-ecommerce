import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  cartReducer,
  userLoginReducer,
} from "./store/reducers";
import { ReduxStates } from "./store/types";

const reducer = combineReducers<ReduxStates>({
  ProductList: productListReducer,
  ProductDetails: productDetailsReducer,
  Cart: cartReducer,
  UserLogin: userLoginReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems");
const cartItems = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [];

const userInfoFromStorage = localStorage.getItem("userInfo");
const userInfo = userInfoFromStorage
  ? JSON.parse(userInfoFromStorage)
  : undefined;

const initialState = {
  Cart: { cartItems },
  UserLogin: { userInfo },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
