import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { Portfolio } from './Pages/Portfolio';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/portfolio" element={<Portfolio />}>
            Portfolio
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
