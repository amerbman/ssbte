import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";  // New main page
import Catalog from "./components/Catalog";  // Catalog page inside components/
import ScrollToTop from "./components/ScrollToTop"; // ✅ Import ScrollToTop


const App = () => {
  return (
    
    <Router>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<MainPage />} />  {/* ✅ Fix: Show MainPage on Home */}
      <Route path="/catalog" element={<Catalog />} />  {/* ✅ Catalog Page */}
      </Routes>
    </Router>
  );
};


export default App;


