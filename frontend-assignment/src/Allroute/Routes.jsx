import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/login";

function  AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default AllRoutes;