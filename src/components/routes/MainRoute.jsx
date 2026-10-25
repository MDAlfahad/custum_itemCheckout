import HomeRoute from "./route/HomeRoute";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AddItemRoute from "./route/AddItemRoute";
import BinRoute from "./route/BinRoute";
import SignupPage from "../page/SignupPage";
import LoginPage from "../page/LoginPage";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import ProfileRoute from "./route/ProfileRoute";
import CheckOutPage from "../page/CheckOutPage";

const MainRoute = () => {
  return (

    <div>

        <Router>
         <Routes>
            
            <Route path="/signup-page" element={<SignupPage/>}/>
            <Route path="/login-page" element={<LoginPage/>}/>

            <Route element={<ProtectedRoute/>}>
              <Route path="/" element={<HomeRoute/>}/>
            <Route path="/add-items" element={<AddItemRoute/>}/>
            <Route path="/bin" element={<BinRoute/>}/>
            <Route path="/profile-page" element={<ProfileRoute/>}/>
            <Route path="/checkOut-page" element={<CheckOutPage/>}/>

            </Route>

         </Routes>
        </Router>
    </div>
  );
};

export default MainRoute;
