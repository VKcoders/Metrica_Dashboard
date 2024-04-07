import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Pages from "./Pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Pages />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes;
