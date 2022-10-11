//this is called a react hook. useState is like a global react function. It is a function that is used inside of components to define state variables.
import { useState } from "react";

import "./App.css";

function App() {

  // the use state hook has 3 important parts. 
  // The first item in the array on the left (the destructured array) is the state variable itself.
  // The second item in the array is a FUNCTION called the setter function that will update the variable when called
  // The argument that goes inside the useState call is the initial value of the variable
  // To summarize - we just created a new state variable called firstName, a setter function called setFirstName, and the initial value of firstName is set to an empty string. 
const [firstName, setFirstName] = useState("John")

  return (
    <div className="App">
      <header className="App-header">
        {firstName}
        {/* <button
          onClick={()=>{
setFirstName('Alondra')
          }}
        >
          Set First Name
        </button>  */}

{/* The onChange handler function must be in curly braces. 
The first parameter of the onChange handler will be the event.
We want to capture the new value of the input field by accessing the event.
We do this with event.target.value
Lastly, we will call our setter function in the onChange handler and the value we pass in as the argument will be the current value of the input field. 
 */}
        <input type='text' onChange={(event)=>{
          const value = event.target.value
          setFirstName(value)
        }} />
      </header>
    </div>
  );
}

export default App;
