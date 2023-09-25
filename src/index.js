import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './register';
import Home  from './page/Home';
import Navbar from "./components/Navbar";
import Profile  from './page/Profile';
import HomeScreen from "./page/HomeScreen";
import AssessmentPage from './page/AssessmentPage';
import Sidebar from "./components/Sidebar";
import FromUpload from "./FromUpload";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/register" element={<Register />} /> 
    <Route path="/Home" element={<Home />} /> 
    <Route path="/Navbar" element={<Navbar />} /> 
    <Route path="/Profile" element ={<Profile/>}/>
    <Route path="/HomeScreen" element ={<HomeScreen/>}/>
    <Route path="/Assessment" element={<AssessmentPage/>} />
    <Route path="/Sidebar/" element={<Sidebar/>} />
    <Route path="/courses/1" element={<FromUpload/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
