import React,{ useState } from 'react'
import "./Expensecss.css";
import ExpenseDate from "./ExpenseDate";
import ExpensesFilter from './ExpensesFilter';
// import Form from './Form'

function ExpenseItem(expense) {
  const [amount,setTitle]=useState(expense.amount);
  const  deleteEx=()=>{
   setTitle('100');
   console.log('updated')
   
  }
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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
