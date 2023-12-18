function ExpenseItem(expense) {
  return (
    <div>
      <table>
        <tr>
          <td>{expense.title}</td>
          <td>{expense.amount}</td>
          <td>{expense.location}</td>
        </tr>
      </table>
    </div>
  );
}
export default ExpenseItem;
