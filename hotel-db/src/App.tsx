import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Create from "./components/Create";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import Card from "./components/Card";
import Search from "./components/Search";

function App() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/hotels/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Card />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
