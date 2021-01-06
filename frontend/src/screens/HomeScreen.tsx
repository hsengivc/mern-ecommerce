import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "../components";
import { IProduct } from "../components/interfaces/Product";

export const HomeScreen = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get<IProduct[]>("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
