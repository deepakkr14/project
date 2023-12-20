// import logo from './logo.svg';
import "./App.css";
import "./component/Expenses/Expensecss.css";
import ExpenseDetails from "./component/Expenses/ExpenseDetails";
const data = [
  {
    date: new Date(2023, 12, 15),
    title: "Movies",
    amount: 200,
    location: "Delhi",
  },
  {
    date: new Date(2023, 12, 15),
    title: "Food",
    amount: 150,
    location: "Mumbai",
  },
];
const App = () => {
 
  return (
    <div className="expenses-list">
      {data.map((props) => (
        <div className="expense-item">
            <ExpenseDetails
              amount={props.amount}
              location={props.location}
              title={props.title}
              date={props.date}
            />
      
        </div>
      ))}
    </div>
  );
};

export default App;
