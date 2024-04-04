import React from "react";

export const Dashboard = ({salaryLeft,total}) => {
  return (
    <div
      className="my-4 h-40 bg-center bg-cover rounded-3xl flex justify-center items-center flex-col"
      style={{ backgroundImage: "url('/assets/dasboard.png')" }}
    >
      <h1 className="font-semibold text-3xl text-white">{total}$</h1>
      <h1 className="font-medium text-md  text-notwhite">
        Salary Left : {salaryLeft}$
      </h1>
    </div>
  );
};
