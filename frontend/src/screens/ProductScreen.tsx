import React, { useEffect, useState, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";
import { Loader, Message, Rating } from "../components";
import { DispatchType, ReduxStates } from "../store/types";
import { listProductDetails } from "../store/actions";

interface MatchParams {
  id: string;
}

interface ProductScreenProps extends RouteComponentProps<MatchParams> {}

export const ProductScreen: FunctionComponent<ProductScreenProps> = ({
  match: {
    params: { id },
  },
  history,
}: ProductScreenProps) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch<DispatchType>();

  const { product, loading, error } = useSelector(
    (state: ReduxStates) => state.ProductDetails
  );

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [id, dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };

  const ProductDetails = () => {
    if (loading) return <Loader />;
    else if (error) return <Message variant="danger">{error}</Message>;
    else if (!product)
      return <Message variant="danger">Product Not Found</Message>;
    else
      return (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: ${product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      );
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {ProductDetails()}
    </>
  );
};
