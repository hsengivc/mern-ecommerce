import React from "react";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";
export const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <main className="py-3">
        <Container>
          <h2>sdsd</h2>
        </Container>
      </main>
      <Footer />
    </header>
  </div>
);
