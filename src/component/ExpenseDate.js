function ExpenseDate(date) {
  const month = date.date.toLocaleString("en-US", { month: "long" });
  const day = date.date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div> {day}</div>
      <div> {year}</div>
      <br />
    </div>
  );
}
export default ExpenseDate;
