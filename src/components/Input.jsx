import React from "react";

const Input = ({input,handleInput,handleSalaryAdd}) => {
  return (
    <div className=" flex gap-2">
      <input
        type="number"
        name=""
        className=" h-10 bg-white  px-4 rounded-3xl w-2/3 placeholder:text-sm"
        placeholder="Add salary"
        onChange={handleInput}
        value={input}
      />
      <button className=" bg-notblack h-10 w-1/3 rounded-3xl text-white" onClick={handleSalaryAdd}>
        Add
      </button>
    </div>
  );
};

export default Input;
