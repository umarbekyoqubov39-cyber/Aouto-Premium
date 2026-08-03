import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SaidBar from "../components/SaidBar";
import { useState } from "react";

function MainLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen overflow-hidden">
      <Navbar open={open} setOpen={setOpen} />

      <div className="flex h-[calc(100vh-64px)]">
        <SaidBar open={open} />

        <main className="flex-1 overflow-y-auto bg-gray-100 p-6 bg-slate-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
