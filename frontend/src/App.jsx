import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Homepage } from "./features/home/Homepage";
import LoginPage from "./features/login/LoginPage";

import LeftDashboardLayout from "./features/left_dashboard/LeftDashboardLayout";
import { BlogsRoutes } from "./features/blogs_page";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboard routes */}
          <Route element={<LeftDashboardLayout />}>
            <Route path="/blogs/*" element={<BlogsRoutes />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
