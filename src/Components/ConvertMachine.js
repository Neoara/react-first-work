import React from 'react'
import { useState } from 'react'

const ConvertMachine = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0)
  
  const handleInput = (event) => { 
    setAmount(event.target.value)
  }

  const convertMachineKzt = () => {
    setResult(amount * 480)
  }

  return (
    <div className='convertContainer'>
      <div className='convertInput'>
        <input type='number' placeholder='Dollars' onChange={handleInput} value={amount}></input>
        <button onClick={convertMachineKzt}>Convert to KZT</button>
      </div>
      <div className='convertResult'>
        <p>
          Result: {result} KZT
        </p>
      </div>
    </div>
  )
}

export default ConvertMachine