import React from 'react'
import { useState } from 'react'

const Translator = () => {
    const [word, setWord] = useState('');
    const [newWord, setNewWord] = useState('')

    let worldsArr = [
        {
            rus: "мама",
            eng: "mommy"
        },
        {
            rus: "папа",
            eng: 'daddy'
        },
        {
            rus: 'кошка',
            eng: 'cat'
        },
        {
            rus: 'собака',
            eng: 'dog'
        },
        {
            rus: 'дом',
            eng: 'house'
        },
        {
            rus: 'мусор',
            eng: 'trash'
        },
        {
            rus: 'школа',
            eng: 'shcool'
        },
        {
            rus: 'что',
            eng: 'what'
        },
        {
            rus: 'кусочек',
            eng: 'slice'
        },
        {
            rus: 'отсрый',
            eng: 'spicy'
        },
        {
            rus: 'класс',
            eng: 'nice'
        }
    ];

    const translateMachine = () => {
        for (let i = 0; i < worldsArr.length; i++) {
            if (worldsArr[i].rus === word.toLowerCase()) {
                setNewWord(worldsArr[i].eng)
            } else if (worldsArr[i].eng === word.toLowerCase()) {
                setNewWord(worldsArr[i].rus)
            } else if (word == 0) {
                alert('write a word')
                break;
            } else if (worldsArr[i] !== word.toLowerCase()) {
                alert('u have mistake')
                break;
            }
        }
    }

    return (
        <div>
            <h1>Translator</h1>
            <div>
                <input value={word} onChange={e => setWord(e.target.value)} placeholder='Word' />
                <button onClick={translateMachine}>Translate</button>
                <p>Result: {newWord}</p>
            </div>
        </div>
    )
}

export default Translator