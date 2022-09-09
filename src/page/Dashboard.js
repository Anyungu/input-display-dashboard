import React from "react";
import Display from "../components/Display";
import Input from "../components/Input";

function Dashboard() {
    
  return (
    <div className="">
      <div className="border-2 bg-white border-black h-3/4 w-3/6 mx-auto my-auto mt-14 justify-between">
        <div className="text-center text-3xl my-2">
          <h3>Input Display Dashboard</h3>
        </div>
        <div className="flex justify-between p-4">
          <Input />
          <Display />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
