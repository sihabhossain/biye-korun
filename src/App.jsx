import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="p-5  flex bg-[#F5F6F8] ">
      {/* Navigation */}
      <Navbar></Navbar>
      {/* Main dashboard */}

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default App;
