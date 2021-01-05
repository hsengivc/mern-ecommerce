import React from "react";
//@ts-ignore
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";
import { HomeScreen, ProductScreen } from "./screens";

export const App = () => (
  <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
      </Container>
    </main>
    <Footer />
  </Router>
);
