import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";

const Form = () => {
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");
  let [location, setLocation] = useState("");

  //   let title,amount,location;
  let date = new Date(2023, 12, 15);
  //   let location = "lkjjh";
  const titlehandler = (e) => (title = e.target.value);

  const locationhandler = (e) => (location = e.target.value);

  const Amounthandler = (e) => (amount = e.target.value);

  const makechange = () => {
    console.log(`${title}, ${amount}, ${location}`);
    setAmount(amount);
    setLocation(location);
    setTitle(title);
    return (
      <div>
        <ExpenseDetails
          amount={amount}
          location={location}
          title={title}
          date={date}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Add a new Expense</h1>
      Title <input type="text" placeholder="Title" onChange={titlehandler} />
      <br></br>
      Amount{" "}
      <input type="number" placeholder="Amount" onChange={Amounthandler} />
      <br></br>
      Location <input placeholder="Location" onChange={locationhandler} />
      <br></br>
      <button onClick={makechange}>Submit</button>
    </div>
  );
};
export default Form;
