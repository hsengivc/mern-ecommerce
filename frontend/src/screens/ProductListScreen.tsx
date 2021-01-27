import React, { useEffect } from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { Loader, Message } from "../components";
import { listProducts } from "../store/actions";
import { ReduxStates } from "../store/types";

interface MatchParams {
  pageNumber: string;
}

interface ProductListProps extends RouteComponentProps<MatchParams> {}

export const ProductListScreen = ({
  history,
  match: {
    params: { pageNumber },
  },
}: ProductListProps) => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector(
    (state: ReduxStates) => state.ProductList
  );
  const { userInfo } = useSelector((state: ReduxStates) => state.UserLogin);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) dispatch(listProducts());
    else history.push("/login");
  }, [dispatch, history, userInfo]);

  const deleteHandler = (userId: string) => {
    // delete products
  };
  const createProductHandler = () => {
    // dispatch create product
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i>Create Product
          </Button>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.name}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
