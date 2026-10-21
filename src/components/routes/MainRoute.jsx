import React from "react";
import HomeRoute from "./route/HomeRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItemRoute from "./route/AddItemRoute";

const MainRoute = () => {
  return (
    <div>
        <Router>
         <Routes>
            <Route path="/" element={<HomeRoute/>}/>
            <Route path="/add-items" element={<AddItemRoute/>}/>
         </Routes>
        </Router>
    </div>
  );
};

export default MainRoute;
