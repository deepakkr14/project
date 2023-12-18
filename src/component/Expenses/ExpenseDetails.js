function ExpenseItem(expense) {
  // return (
  //   <div className="expense-item">
  //     <ExpenseDate date={props.date} />

  //     <ExpenseDetails
  //       amount={props.amount}
  //       location={props.location}
  //       title={props.title}
  //     />
  //   </div>
  // );
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
