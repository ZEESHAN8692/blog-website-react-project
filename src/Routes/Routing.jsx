import React from "react";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin/Admin";
import SinglePost from "../Pages/SinglePost";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/single-post/:id" element={<SinglePost />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
