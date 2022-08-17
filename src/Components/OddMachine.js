import React from 'react'
import { useState } from 'react'


function OddMachine() {
    const [numbers, setNumbers] = useState('');
    const [odd, setOdd] = useState('')
    const [even, setEven] = useState('')

    const oddGenerate = () => {
        let newNumberOddArr = []
        let newNumberEvenArr = []
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== ',' && numbers[i] % 2 === 0) {
                newNumberOddArr.push(numbers[i])
            } else if (numbers[i] !== ',' && numbers[i] % 2 !== 0) {
                newNumberEvenArr.push(numbers[i])
            }
        };

        setOdd(newNumberOddArr)
        setEven(newNumberEvenArr)
    }

    return (
        <div>
            <div>
                <input value={numbers} onChange={e => setNumbers(e.target.value)} placeholder='Numbers' />
                <button onClick={oddGenerate}>Genarate</button>
            </div>
            <div className='oddMachineContainer'>
                <div className='evenContainer'>
                    <p>Even</p>
                    <ul>
                        <li>{even}</li>
                    </ul>
                </div>
                <div className='oddContainer'>
                    <p>Odd</p>
                    <ul>
                        <li>
                            {odd}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OddMachine