import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Product, Loader, Message, Paginate } from "../components";
import { listProducts } from "../store/actions";
import { DispatchType, ReduxStates } from "../store/types";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  keyword: string;
  pageNumber: string;
}
interface HomeScreenProps extends RouteComponentProps<MatchParams> {}

export const HomeScreen = ({
  match: {
    params: { keyword, pageNumber },
  },
}: HomeScreenProps) => {
  const pageNo = pageNumber || "1";
  const dispatch = useDispatch<DispatchType>();
  const { products, loading, error, page, pages } = useSelector(
    (state: ReduxStates) => state.ProductList
  );

  useEffect(() => {
    dispatch(listProducts(keyword, pageNo));
  }, [dispatch, keyword, pageNo]);

  const productsList = () => {
    if (loading) return <Loader />;
    else if (error) return <Message variant="danger">{error}</Message>;
    else
      return (
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {pages && page && (
            <Paginate
              page={page}
              pages={pages}
              keyword={keyword ? keyword : ""}
            />
          )}
        </>
      );
  };
  return (
    <>
      <h1>Latest Products</h1>
      {productsList()}
    </>
  );
};
