import React, { useState } from "react";
import Expense from "./Expense";

const Expenses = ({
  isModalOpen,
  selectedCategory,
  amount,
  expenses,
  toggleModal,
  handleCategoryChange,
  handleAmountChange,
  handleAddExpense,
  handleDelete,
}) => {

  return (
    <div className="pt-4 pb-2">
      <div className="flex justify-between">
        <h1 className="font-semibold text-lg text-notblack">Expenses - {expenses.length}</h1>
        <button onClick={toggleModal}>
          <img src="/assets/add.svg" alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="h-80 overflow-y-scroll no-scrollbar flex flex-col gap-2 mt-2 pb-2 sm:h-72">
        {expenses.map((expense, index) => (
          <Expense
            key={index}
            expense={expense}
            handleDelete={handleDelete}
          ></Expense>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg relative">
            <div className="flex flex-col gap-4">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="h-10 shadow-md bg-white px-4 rounded-lg"
              >
                <option value="Food">Food</option>
                <option value="Medical">Medical</option>
                <option value="Rent">Rent</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="h-10 shadow-md bg-white px-4 rounded-lg"
                placeholder="Write amount"
              />
              <button
                onClick={handleAddExpense}
                className="bg-notblack h-10 rounded-lg text-white"
              >
                Add
              </button>
            </div>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
