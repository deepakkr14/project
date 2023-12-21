import React, { useState } from "react";
// import ExpenseDetails from "./ExpenseDetails";

const Form = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");

  const titlehandler = (e) => (setTitle( e.target.value));

  const locationhandler = (e) => (setLocation(e.target.value));

  const Amounthandler = (e) => (setAmount(e.target.value));

  const makechange = () => {
    
    const expenseData={
      title:title,
      amount:amount,
      location:location,
      date:new Date()
    }
    console.log(expenseData)
   
   
  };

  return (
    <div>
      <h1>Add a new Expense</h1>
      Title <input type="text" placeholder="Title" onChange={titlehandler} />
      <br></br>
      Amount{" "}
      <input type="number" placeholder="Amount" onChange={Amounthandler} />
      <br></br>
      Location <input placeholder="Location" onChange={locationhandler} />
      <br></br>
      <button onClick={makechange}>Submit</button>
    </div>
  );
};
export default Form;
