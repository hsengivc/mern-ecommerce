import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  Cart,
  Order,
  ShippingAddress,
  TokenUser,
  User,
  Product,
  CreateOrder,
} from ".";

export interface ProductListState {
  loading: boolean;
  products: Product[];
  error?: undefined;
}

export interface ProductDetailsState {
  loading: boolean;
  product?: Product;
  error?: undefined;
}

export interface CartItemsState {
  cartItems: Cart[];
  shippingAddress?: ShippingAddress;
  paymentMethod?: string;
}

export interface UserLoginState {
  userInfo?: TokenUser;
  loading?: boolean;
  error?: any;
}

export interface UserRegisterState {
  userInfo?: TokenUser;
  loading?: boolean;
  error?: any;
}

export interface UserDetailsState {
  user?: User;
  loading?: boolean;
  error?: any;
}

export interface CreateOrderState {
  loading: boolean;
  order?: CreateOrder;
  success?: boolean;
  error?: any;
}

export interface UserUpdateProfileState {
  userInfo?: TokenUser;
  loading?: boolean;
  success?: boolean;
  error?: any;
}
export interface ReduxStates {
  ProductList: ProductListState;
  ProductDetails: ProductDetailsState;
  Cart: CartItemsState;
  UserLogin: UserLoginState;
  UserRegister: UserRegisterState;
  UserDetails: UserDetailsState;
  UserProfileUpdate: UserUpdateProfileState;
  CreateOrder: CreateOrderState;
}

export type DispatchType = ThunkDispatch<ReduxStates, unknown, Action<string>>;

export type ActionType = ThunkAction<
  Promise<void>,
  ReduxStates,
  unknown,
  Action<string>
>;
