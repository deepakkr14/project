// import logo from './logo.svg';
import "./App.css";
import "./component/Expenses/Expensecss.css";
import ExpenseDetails from "./component/Expenses/ExpenseDetails";
import Form from "./component/Expenses/Form";
import ExpensesFilter from "./component/Expenses/ExpensesFilter";
import { useState } from "react";
const dummy = [
  {
    id: "a1",
    date: new Date(2021, 12, 15),
    title: "Movies",
    amount: 200,
    location: "Delhi",
  },
  {
    id: "a2",
    date: new Date(2020, 12, 15),
    title: "Food",
    amount: 150,
    location: "Mumbai",
  },
];
const App = () => {
  const [expense, setnew] = useState(dummy);

  const addExpenseHandler = (newExpense) => {
    setnew((previous) => {
      return [newExpense, ...previous];
    });
  };
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredData = expense.filter((data) => {
    return data.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <h2>no data available</h2>;
  if (filteredData.length === 1) {
    expensesContent = filteredData.map((props) => (
      <div className="expense-item" key={props.id}>
        <ExpenseDetails
          amount={props.amount}
          location={props.location}
          title={props.title}
          date={props.date}
        />
        <h4>Only single Expense here. Please add more...</h4>
      </div>
    ));
  } else {
    expensesContent = filteredData.map((props) => (
      <div className="expense-item" key={props.id}>
        <ExpenseDetails
          amount={props.amount}
          location={props.location}
          title={props.title}
          date={props.date}
        />
      </div>
    ));
  }

  
  const [viewform, setForm] = useState(false);
  const buttonSwitch = () => {
    setForm(true);
  };
const cancelFormHandler=(value)=>{
  setForm(value);
}
  return (
    <div className="expenses-list">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {filteredData.length===0?(<p>no data available</p>):()} */}
      {expensesContent}
      <button onClick={buttonSwitch}>add new </button>
      {viewform && <Form onaddExpense={addExpenseHandler} cancel={cancelFormHandler} />}
    </div>
  );
};

export default App;
