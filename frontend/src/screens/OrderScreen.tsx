import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Col, ListGroup, Row, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Message } from "../components";
import { DispatchType, PaymentResult, ReduxStates } from "../store/types";
import { getOrderDetails, payOrder, deliverOrder } from "../store/actions";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { OrderDeliverActions, OrderPayAction } from "../store/enums";
interface MatchParams {
  id: string;
}

interface OrderScreenProps extends RouteComponentProps<MatchParams> {}

export const OrderScreen = ({
  match: {
    params: { id },
  },
  history,
}: OrderScreenProps) => {
  const orderId = id;

  const [sdkReady, setSdkReady] = useState<boolean>(false);

  const dispatch = useDispatch<DispatchType>();

  const { order, loading, error } = useSelector(
    (state: ReduxStates) => state.OrderDetails
  );
  const { loading: loadingPay, success: successPay } = useSelector(
    (state: ReduxStates) => state.OrderPay
  );

  const { loading: loadingDeliver, success: successDeliver } = useSelector(
    (state: ReduxStates) => state.OrderDeliver
  );

  const { userInfo } = useSelector((state: ReduxStates) => state.UserLogin);

  useEffect(() => {
    if (!userInfo) history.push("/login");
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (successPay || !order || order._id !== orderId || successDeliver) {
      dispatch({ type: OrderPayAction.ORDER_PAY_RESET });
      dispatch({ type: OrderDeliverActions.ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, order, orderId, successPay, successDeliver, userInfo, history]);

  const successPaymentHandler = (paymentResult: PaymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(orderId));
  };

  const addDecimals = (num: number) => (Math.round(num * 100) / 100).toFixed(2);

  return loading ? (
    <Loader />
  ) : error || !order ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name:</strong> {order.user.name}
              </p>
              <p>
                <strong>Email:</strong> {""}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress?.address}, {order.shippingAddress?.city}{" "}
                ,{order.shippingAddress?.postalCode} ,
                {order.shippingAddress?.country}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${addDecimals(order.itemsPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${addDecimals(order.shippingPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${addDecimals(order.taxPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${addDecimals(order.totalPrice)}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    {loadingDeliver ? (
                      <Loader />
                    ) : (
                      <Button
                        onClick={deliverHandler}
                        className="btn btn-block"
                      >
                        Mark As delivered
                      </Button>
                    )}
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
