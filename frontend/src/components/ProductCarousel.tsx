import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Loader, Message } from ".";
import { listTopProducts } from "../store/actions";
import { DispatchType, ReduxStates } from "../store/types";

export const ProductCarousel = () => {
  const dispatch = useDispatch<DispatchType>();
  const { error, loading, products } = useSelector(
    (state: ReduxStates) => state.TopProduct
  );
  useEffect(() => {
    if (products.length === 0) dispatch(listTopProducts());
  }, [dispatch, products]);

  const topProductsDisplay = () => {
    if (loading) return <Loader />;
    else if (error) return <Message variant="danger">{error}</Message>;
    else
      return (
        <Carousel pause="hover" className="bg-dark">
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid />
                <Carousel.Caption className="carousel-caption">
                  <h2>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      );
  };

  return <>{topProductsDisplay()}</>;
};
