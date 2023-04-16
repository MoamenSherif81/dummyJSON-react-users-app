import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;