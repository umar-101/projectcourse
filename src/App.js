// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import About from "./pages/about";
import Encode from "./pages/encode";
import Decode from "./pages/decode";
import FooterComponent from "./components/footer/footer";

function App() {
  return (
    <Container
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#7B7A7A",
        minHeight: "100vh",
        width: "100%",
        margin: "auto",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/encode" element={<Encode />} />
          <Route path="/decode" element={<Decode />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <FooterComponent />
      </Router>
    </Container>
  );
}

export default App;
