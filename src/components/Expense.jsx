import React from "react";

const Expense = ({expense,handleDelete}) => {
  return (
    <div>
      <div className=" h-16 rounded-2xl bg-white flex items-center justify-between px-3">
        <div className=" flex items-center gap-4">
          <img src={`/assets/${expense.title}.svg`} alt="" className=" h-10 w-10" />
          <div>
            <h1 className="font-semibold text-md text-notblack">{expense.title}</h1>
            <h1 className="font-medium text-md  text-notblack opacity-50">
              {expense.price}$
            </h1>
          </div>
        </div>
        <img src="/assets/Delete.svg" alt="" className=" h-8 w-8 cursor-pointer" onClick={() => handleDelete(expense.id,expense.price)} />
      </div>
    </div>
  );
};

export default Expense;
