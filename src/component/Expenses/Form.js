import React, { useState } from "react";
// import ExpenseDetails from "./ExpenseDetails";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  let id=Math.random()

  const titlehandler = (e) => (setTitle( e.target.value));

  const locationhandler = (e) => (setLocation(e.target.value));

  const Amounthandler = (e) => (setAmount(e.target.value));

  const makechange = () => {
    
    const expenseData={
      id:id,
      title:title,
      amount:amount,
      location:location,
      date:new Date()
    }
    console.log(expenseData) 
   setAmount('')
   setLocation('')
   setTitle('')
   
   props.onaddExpense(expenseData)
  
  };

  const cancel=()=>{
props.cancel(false)
  }
  return (
    <div>
      <h1>Add a new Expense</h1>
      Title <input type="text" placeholder="Title" value={title} onChange={titlehandler} />
      <br></br>
      Amount
      <input type="number" placeholder="Amount" value={amount} onChange={Amounthandler} />
      <br></br>
      Location <input placeholder="Location" value={location} onChange={locationhandler} />
      <br></br>
      <button   onClick={cancel}>cancel</button>
      <button onClick={makechange}>Submit</button>
    </div>
  );
};
export default Form;
