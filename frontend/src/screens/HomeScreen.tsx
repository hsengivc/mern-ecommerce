import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Product, Loader, Message } from "../components";
import { listProducts } from "../store/actions";
import { DispatchType, ReduxStates } from "../store/types";

export const HomeScreen = () => {
  const dispatch = useDispatch<DispatchType>();
  const { products, loading, error } = useSelector(
    (state: ReduxStates) => state.ProductList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productsList = () => {
    if (loading) return <Loader />;
    else if (error) return <Message variant="danger">{error}</Message>;
    else
      return (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      );
  };
  return (
    <>
      <h1>Latest Products</h1>
      {productsList()}
    </>
  );
};
