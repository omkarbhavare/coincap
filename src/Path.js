import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";

import React from "react";

export const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
