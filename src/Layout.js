import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Table } from "./components/home/Table";
import './Layout.css'

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Home />
      
      <Footer />
    </div>
  );
};
