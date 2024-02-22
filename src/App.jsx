import React from "react"
import { useState } from "react";
import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTable"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000, 
    annualInvestment: 1200, 
    expectedReturn: 6, 
    duration: 10
  });

  const inputIsValid = userInput.duration > 0

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevInput => {
        return {
            ...prevInput, 
            [inputIdentifier]: +newValue,
        }
    })
}

  return (
    <div>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {inputIsValid ? <ResultsTable userInput={userInput}/>
      : <p className="center">Input is not valid</p>}
    </div>
  )
}

export default App
