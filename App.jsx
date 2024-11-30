import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RatesPage from "./pages/RatesPage";

const App = () => (
  <Router>
    <nav>
      <Link to="/">Конвертер</Link> | <Link to="/rates">Курсы валют</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rates" element={<RatesPage />} />
    </Routes>
  </Router>
);

export default App;
