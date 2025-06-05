import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import RecommendationsForm from "./components/RecommendationsForm";
import PnLSimulationForm from "./components/PnLSimulationForm";

function App() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Sistema de Hedge Institucional</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#recommendations">Recomendações</Nav.Link>
          <Nav.Link href="#simulate">Simulação de PnL</Nav.Link>
        </Nav>
      </Navbar>
      <div id="recommendations">
        <h2>Recomendações</h2>
        <RecommendationsForm />
      </div>
      <div id="simulate">
        <h2>Simulação de PnL</h2>
        <PnLSimulationForm />
      </div>
    </Container>
  );
}

export default App;
