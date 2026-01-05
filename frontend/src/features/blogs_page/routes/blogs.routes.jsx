import { Routes, Route, Navigate } from "react-router-dom";
import BlogPage1 from "../pages/BlogPage1";
import BlogPage2 from "../pages/BlogPage2";
import BlogPage3 from "../pages/BlogPage3";

export default function BlogsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="1" />} />
      <Route path="1" element={<BlogPage1 />} />
      <Route path="2" element={<BlogPage2 />} />
      <Route path="3" element={<BlogPage3 />} />
    </Routes>
  );
}
