// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './component/ExpenseItem';
function App() {
  return (
    <div>
   <ExpenseItem></ExpenseItem>
   <pre> <ul>
    <li>Expenses    Items</li>
    <li> Food       Rs 10</li>
    <li> Petrol     Rs 100 </li>
    <li> Movies      Rs 200</li>
   </ul></pre>
   </div>
  );
}

export default App;
