import React, { useState, useEffect } from "react";
import { Dashboard } from "./components/Dashboard";
import Input from "./components/Input";
import Expenses from "./components/Expenses";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [salaryLeft, setSalaryLeft] = useState(() => {
    const savedSalary = localStorage.getItem("salaryLeft");
    return savedSalary ? parseFloat(savedSalary) : 0;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Other");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [total, setTotal] = useState(() => {
    const savedTotal = localStorage.getItem("total");
    return savedTotal ? parseFloat(savedTotal) : 0;
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddExpense = () => {
    if (salaryLeft === 0) {
      alert("Please add your salary first.");
      return;
    }

    const expenseAmount = parseFloat(amount);
    const newTotal = total + expenseAmount;

    if (newTotal > salaryLeft) {
      alert("Total expenses cannot exceed salary left.");
      return;
    }

    const newExpense = {
      id: uuidv4(),
      title: selectedCategory,
      price: expenseAmount,
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    toggleModal();
    setAmount("");
    setSelectedCategory("Other");
    setTotal(newTotal);
    setSalaryLeft((prevSalaryLeft) => prevSalaryLeft - expenseAmount);
  };

  const handleDelete = (expenseID, expensePrice) => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.id !== expenseID
    );
    setExpenses(filteredExpenses);
    const newTotal = filteredExpenses.reduce(
      (accumulator, currentExpense) => accumulator + currentExpense.price,
      0
    );
    setTotal(newTotal);
    setSalaryLeft((prevSalaryLeft) => prevSalaryLeft + expensePrice);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSalaryAdd = () => {
    if (input === "") {
      alert("Please add your salary.");
      return;
    }
    setSalaryLeft(parseFloat(input));
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("total", total);
    localStorage.setItem("salaryLeft", salaryLeft);
  }, [expenses, total, salaryLeft]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-[90%] w-[320px] bg-mobilebg rounded-3xl px-4 py-0 sm:py-8 sm:px-8">
        <div className="">
          <h1 className="font-semibold text-xl text-notblack">Track All Your</h1>
          <h1 className="font-semibold text-xl text-notblack -mt-2">Expenses</h1>
        </div>
        <Dashboard salaryLeft={salaryLeft} total={total}></Dashboard>
        <Input
          input={input}
          handleSalaryAdd={handleSalaryAdd}
          handleInput={handleInput}
        ></Input>
        <Expenses
          isModalOpen={isModalOpen}
          selectedCategory={selectedCategory}
          amount={amount}
          expenses={expenses}
          toggleModal={toggleModal}
          handleCategoryChange={handleCategoryChange}
          handleAmountChange={handleAmountChange}
          handleAddExpense={handleAddExpense}
          handleDelete={handleDelete}
        ></Expenses>
      </div>
    </div>
  );
};

export default App;
