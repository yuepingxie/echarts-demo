import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Header from "./components/header/header.js";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
