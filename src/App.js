// import logo from './logo.svg';
import "./App.css";
import "./component/Expenses/Expensecss.css";
import ExpenseDetails from "./component/Expenses/ExpenseDetails";
import Form from "./component/Expenses/Form";
import ExpensesFilter from "./component/Expenses/ExpensesFilter";
import { useState } from "react";
const dummy = [
  { id:a1,
    date: new Date(2023, 12, 15),
    title: "Movies",
    amount: 200,
    location: "Delhi",
  },
  {id:a2,
    date: new Date(2023, 12, 15),
    title: "Food",
    amount: 150,
    location: "Mumbai",
  },
];
const App = () => {
  const [expense,setnew]=useState(dummy)
  const addExpenseHandler = (expense) => {
setnew(previous=>{
 return [expense,...previous]
})
    // console.log("In App.js");
    // console.log(expense);
   
  };
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className="expenses-list">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expense.map((props) => (
        <div className="expense-item">
          <ExpenseDetails
            amount={props.amount}
            location={props.location}
            title={props.title}
            date={props.date}
          />
        </div>
      ))}
      <Form onaddExpense={addExpenseHandler} />
    </div>
  );
};

export default App;
