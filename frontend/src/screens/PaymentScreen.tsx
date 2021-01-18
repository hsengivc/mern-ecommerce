import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutSteps, FormContainer } from "../components";
import { DispatchType, ReduxStates } from "../store/types";
import { savePaymentMethod } from "../store/actions";

interface PaymentScreenProps extends RouteComponentProps {}

export const PaymentScreen = ({ history }: PaymentScreenProps) => {
  const dispatch = useDispatch<DispatchType>();

  const { shippingAddress } = useSelector((state: ReduxStates) => state.Cart);

  if (!shippingAddress) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState<string>("PayPal");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Mehod</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="payPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) =>
                setPaymentMethod((e.target as HTMLInputElement).value)
              }
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};
