import "./Expensecss.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(expense) {
  return (
    <div>
      <div className="expense-item-content">
        <ExpenseDate date={expense.date} />
         {expense.title}
        {expense.amount}
        {expense.location}
      </div>
    </div>
  );
}
export default ExpenseItem;
