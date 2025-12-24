import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Homepage } from "./features/home/Homepage";
import LoginPage from "./features/login/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black">
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
