import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
