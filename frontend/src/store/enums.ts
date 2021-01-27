export enum ProductDetailsActions {
  PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST",
  PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS",
  PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL",
}

export enum ProductListActions {
  PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST",
  PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS",
  PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL",
}

export enum CartActions {
  CART_ADD_ITEM = "CART_ADD_ITEM",
  CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
  CART_ITEMS_RESET = "CART_ITEMS_RESET",
}

export enum UserActions {
  USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL = "USER_LOGIN_FAIL",
  USER_LOGIN_LOGOUT = "USER_LOGIN_LOGOUT",
}

export enum RegisterActions {
  USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST",
  USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
  USER_REGISTER_FAIL = "USER_REGISTER_FAIL",
}

export enum UserDetailsActions {
  USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST",
  USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS",
  USER_DETAILS_FAIL = "USER_DETAILS_FAIL",
  USER_DETAILS_RESET = "USER_DETAILS_RESET",
}

export enum UserUpdateActions {
  USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST",
  USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS",
  USER_UPDATE_FAIL = "USER_UPDATE_FAIL",
  USER_UPDATE_RESET = "USER_UPDATE_RESET",
}

export enum ShippingAddressAction {
  CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS",
}

export enum PaymentMethodAction {
  CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD",
}

export enum CreateOrderAction {
  ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST",
  ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS",
  ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL",
}

export enum OrderDetailsAction {
  ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST",
  ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS",
  ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL",
}

export enum OrderPayAction {
  ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST",
  ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS",
  ORDER_PAY_FAIL = "ORDER_PAY_FAIL",
  ORDER_PAY_RESET = "ORDER_PAY_RESET",
}

export enum MyOrderListAction {
  MY_ORDER_LIST_REQUEST = "MY_ORDER_LIST_REQUEST",
  MY_ORDER_LIST_SUCCESS = "MY_ORDER_LIST_SUCCESS",
  MY_ORDER_LIST_FAIL = "MY_ORDER_LIST_FAIL",
  MY_ORDER_LIST_RESET = "MY_ORDER_LIST_RESET",
}

export enum UserListActions {
  USER_LIST_REQUEST = "USER_LIST_REQUEST",
  USER_LIST_SUCCESS = "USER_LIST_SUCCESS",
  USER_LIST_FAIL = "USER_LIST_FAIL",
  USER_LIST_RESET = "USER_LIST_RESET",
}

export enum UserDeleteActions {
  USER_DELETE_REQUEST = "USER_DELETE_REQUEST",
  USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS",
  USER_DELETE_FAIL = "USER_DELETE_FAIL",
}

export enum UserUpdateByAdminActions {
  USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST",
  USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS",
  USER_UPDATE_FAIL = "USER_UPDATE_FAIL",
  USER_UPDATE_RESET = "USER_UPDATE_RESET",
}

export enum ProductDeleteActions {
  PRODUCT_DELETE_REQUEST = "PRODUCT_DELETE_REQUEST",
  PRODUCT_DELETE_SUCCESS = "PRODUCT_DELETE_SUCCESS",
  PRODUCT_DELETE_FAIL = "PRODUCT_DELETE_FAIL",
}

export enum ProductCreateActions {
  PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST",
  PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS",
  PRODUCT_CREATE_FAIL = "PRODUCT_CREATE_FAIL",
  PRODUCT_CREATE_RESET = "PRODUCT_CREATE_RESET",
}

export enum ProductUpdateActions {
  PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST",
  PRODUCT_UPDATE_SUCCESS = "PRODUCT_UPDATE_SUCCESS",
  PRODUCT_UPDATE_FAIL = "PRODUCT_UPDATE_FAIL",
  PRODUCT_UPDATE_RESET = "PRODUCT_UPDATE_RESET",
}
