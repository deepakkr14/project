// import logo from './logo.svg';
import "./App.css";
import "./component/Expensecss.css";
import ExpenseDetails from "./component/ExpenseDetails.js";
import ExpenseDate from "./component/ExpenseDate.js";
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
function App() {
  return (
    <div className="expenses-list">
      {data.map((props) => (
        <div className="expense-item">
          <div className="expense-item-content">
            <ExpenseDate date={props.date} />
            <ExpenseDetails
              amount={props.amount}
              location={props.location}
              title={props.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
  // return (
  //   <div>
  //     <h2>Expenses</h2>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Title</th>
  //           <th>Amount</th>
  //           <th>Location</th>
  //         </tr>
  //       </thead>
  //     </table>
  //     {data.map((expense) => (
  //       <ExpenseItem
  //         title={expense.title}
  //         amount={expense.amount}
  //         location={expense.location}
  //       />
  //     ))}
  //   </div>
  // );
}

export default App;
