import React, { useState } from 'react'
import services from '../services/communication'



const PhonebookForm = ({phonebook,setPhonebook}) => {
    const [newName, setNewName] = useState('new name');
    const [newNumber, setNewNumber] = useState('new number');

    const handleNewName = (e) => {
        setNewName(e.target.value)
    }

    const handleNumber = (e) => {
        setNewNumber(e.target.value)
    }

    const clearBox = (setFunc) => {
        setFunc('')
    }

    const updatePhonebookAndClearInput = (newPerson) => {
        setPhonebook(phonebook.concat(newPerson))
        setNewNumber('')
        setNewName('')
    }

    const alertNameFound = () => {
        alert(`${newNumber} is already added to phonebook!`)
    }

    const isUserInPhonebook = (item) => {
        return (item.name === newName && item.number === newNumber) | (item.number === newNumber) ? true : false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = { name: newName, number: newNumber }
        phonebook.find(person => isUserInPhonebook(person)) ? alertNameFound() : services.create(newPerson).then(item => updatePhonebookAndClearInput(item))
    }

    return (
        <div className="phonebook-form">
            <h1>Phonebook</h1>
            <form>
                <div>
                    <p>name    : <input value={newName} onChange={handleNewName} onClick={() => clearBox(setNewName)} /></p>
                    <p>number  : <input value={newNumber} onChange={handleNumber} onClick={() => clearBox(setNewNumber)} /></p>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>add</button>
                </div>
            </form>
        </div>
    )
}

export default PhonebookForm