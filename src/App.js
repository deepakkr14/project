// import logo from './logo.svg';
import "./App.css";
import "./component/Expensecss.css";
import ExpenseItem from "./component/ExpenseItem";
const data = [
  { title: "movies", amount: "200", location: "delhi" },
  { title: "fuel", amount: "300", location: "up" },
  { title: "food", amount: "500", location: "mp" },
];
function App() {
  return (
    <div>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Location</th>
          </tr>
        </thead>
      </table>
      {data.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
