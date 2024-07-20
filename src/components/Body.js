import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import ProgressBar from "./ProgressBar";

const Body = () => {
 
  return (
    <>
      <Head />
       <ProgressBar />
      
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
