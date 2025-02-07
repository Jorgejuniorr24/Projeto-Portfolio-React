import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index"; 

function RouterManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default RouterManager;
