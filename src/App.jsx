import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="m-5 w-full flex">
      {/* Navigation */}
      <Navbar></Navbar>
      {/* Main dashboard */}
      <main>
        <Dashboard></Dashboard>
      </main>

      
    </div>
  );
};

export default App;
