import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About/About";
import Addfood from "../pages/Diarypage/Diary/Addfood/Addfood";
import Homepage from "../pages/homepage/Homepage";
import Signup from "../pages/signup/Signup";
import { Support } from "../pages/Support/Support";
import { Blog } from "../pages/Blogs/Blog";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Plans from "../pages/plans/Plans";
import Settings from "../pages/settings/Settings";
import Footer from "../components/footer/Footer";


const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<PrivateRoute><Addfood></Addfood></PrivateRoute>}></Route>
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plans" element={<Plans></Plans>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoute;
