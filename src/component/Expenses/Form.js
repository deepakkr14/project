import React, { useState } from "react";
// import ExpenseDetails from "./ExpenseDetails";

const Form = () => {
  // let [title, setTitle] = useState("");
  // let [amount, setAmount] = useState("");
  // let [location, setLocation] = useState("");

  //   let title,amount,location;
  const[userInput,setUserInput]=useState({
    entredTitle:"",
    entredAmount:"",
    entredLocation:""
  })

  
 
  const titlehandler = (e) => setUserInput({...userInput,entredTitle:e.target.value});

  const locationhandler = (e) => setUserInput({...userInput,entredLocation:e.target.value});

  const Amounthandler = (e) => setUserInput({...userInput,entredAmount:e.target.value});

  // const makechange = () => {
  //   console.log( entredTitle,
  //   entredAmount,
  //   entredLocation);
    
   
  // };

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
      {/* <button onClick={makechange}>Submit</button> */}
    </div>
  );
};
export default Form;
