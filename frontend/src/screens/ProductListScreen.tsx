import React, { useEffect } from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { Loader, Message, Paginate } from "../components";
import { createProduct, deleteProduct, listProducts } from "../store/actions";
import { ProductCreateActions } from "../store/enums";
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
  const pageNo = pageNumber || "1";
  const dispatch = useDispatch();

  const { loading, products, error, page, pages } = useSelector(
    (state: ReduxStates) => state.ProductList
  );

  const {
    success: successDelete,
    loading: loadingDelete,
    error: errorDelete,
  } = useSelector((state: ReduxStates) => state.ProductDelete);

  const {
    success: successCreate,
    product: createdProduct,
    loading: loadingCreate,
    error: errorCreate,
  } = useSelector((state: ReduxStates) => state.ProductCreate);

  const { userInfo } = useSelector((state: ReduxStates) => state.UserLogin);

  useEffect(() => {
    dispatch({ type: ProductCreateActions.PRODUCT_CREATE_RESET });
    if (!userInfo?.isAdmin) history.push("/login");

    if (successCreate && createdProduct) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else dispatch(listProducts("", pageNo));
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNo,
  ]);

  const deleteHandler = (userId: string) => {
    dispatch(deleteProduct(userId));
  };
  const createProductHandler = () => {
    dispatch(createProduct());
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
      {loadingDelete || (loadingCreate && <Loader />)}
      {errorDelete ||
        (errorCreate && <Message variant="danger">{errorDelete}</Message>)}
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
                <td>${product.price}</td>
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
      {userInfo && page && pages && (
        <Paginate page={page} pages={pages} isAdmin={userInfo.isAdmin} />
      )}
    </>
  );
};
