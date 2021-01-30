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
  OrderDetails,
  OrderList,
} from ".";
import { MyOrderList } from "./MyOrderList";

export interface ProductListState {
  products: Product[];
  pages?: number;
  page?: number;
  loading: boolean;
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

export interface OrderDetailsState {
  loading: boolean;
  order?: OrderDetails;
  error?: any;
}

export interface OrderPayState {
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export interface MyOrderListState {
  orders: MyOrderList[];
  loading: boolean;
  error?: any;
}

export interface UserListState {
  users: User[];
  loading: boolean;
  error?: any;
}

export interface UserDeleteState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export interface UserUpdateByAdminState {
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export interface ProductDeleteState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export interface ProductCreateState {
  success?: boolean;
  product?: Product;
  loading?: boolean;
  error?: any;
}

export interface ProductUpdateState {
  success?: boolean;
  product?: Product;
  loading?: boolean;
  error?: any;
}
export interface OrderListState {
  orders: OrderList[];
  loading: boolean;
  error?: any;
}

export interface OrderDeliverState {
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export interface ProductCreateReviewState {
  success?: boolean;
  loading?: boolean;
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
  OrderDetails: OrderDetailsState;
  OrderPay: OrderPayState;
  MyOrderList: MyOrderListState;
  UserList: UserListState;
  UserDelete: UserDeleteState;
  UserUpdate: UserUpdateByAdminState;
  ProductDelete: ProductDeleteState;
  ProductCreate: ProductCreateState;
  ProductUpdate: ProductUpdateState;
  OrderList: OrderListState;
  OrderDeliver: OrderDeliverState;
  ProductReview: ProductCreateReviewState;
}

export type DispatchType = ThunkDispatch<ReduxStates, unknown, Action<string>>;

export type ActionType = ThunkAction<
  Promise<void>,
  ReduxStates,
  unknown,
  Action<string>
>;
