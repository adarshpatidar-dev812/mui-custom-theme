import React from "react";
// Depedency
import { Route, Routes } from "react-router-dom";
// Layout
import PublicLayout from "./layout/PublicLayout";
import Home from "./views/Home";
// Route

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
