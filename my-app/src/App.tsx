import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './Pages/Home';
import { CV } from './Pages/CV';
import { Portfolio } from './Pages/Portfolio';

function App() {
  return (
    <Container>
      <h1>Kiel's Portfolio Page</h1>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
          Portfolio
        </Route>
        <Route path="/cv" element={<CV />}>
          CV
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
