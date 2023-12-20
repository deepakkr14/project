import React,{ useState } from 'react'
import "./Expensecss.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(expense) {
  const [amount,setTitle]=useState(expense.amount);
  const  deleteEx=()=>{
   setTitle('100');
   console.log('updated')
  }
  return (
    <div>
      <div className="expense-item-content">
        <ExpenseDate date={expense.date} />
      <div className="expense-item-content">   {expense.title}</div>
      <div  className="expense-item-content">   {amount}</div>
      <div  className="expense-item-content">   {expense.location}</div>
      </div>
      <div> <button onClick={deleteEx}>update price</button></div>
    </div>
  );
}
export default ExpenseItem;
