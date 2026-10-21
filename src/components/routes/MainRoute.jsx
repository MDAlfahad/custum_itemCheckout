import React from "react";
import HomeRoute from "./route/HomeRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItemRoute from "./route/AddItemRoute";
import BinRoute from "./route/BinRoute";

const MainRoute = () => {
  return (
    <div>
        <Router>
         <Routes>
            <Route path="/" element={<HomeRoute/>}/>
            <Route path="/add-items" element={<AddItemRoute/>}/>
            <Route path="/bin" element={<BinRoute/>}/>
         </Routes>
        </Router>
    </div>
  );
};

export default MainRoute;
