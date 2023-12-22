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

  return (
    <div className="expenses-list">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredData.map((props) => (
        <div className="expense-item" key={props.id}>
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
