import React, { useState } from 'react'
import services from '../services/communication'
import '../style/phonebookForm.css'



const PhonebookForm = ({phonebook,setPhonebook}) => {
    const [newName, setNewName] = useState('new name');
    const [previouseName, setPreviouseName] = useState('');
    const [newNumber, setNewNumber] = useState('new number');
    const [newContactAdded, setNewContactAdded] = useState(false);

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
        phonebook.find(person => isUserInPhonebook(person)) ? alertNameFound() : addNewPersonToPhonebook(newPerson)
    }

    const addNewPersonToPhonebook = (newPerson) => {
        setPreviouseName(newPerson.name);
        services.create(newPerson).then(item => updatePhonebookAndClearInput(item))
        setNewContactAdded(true)
        setTimeout(()=>{
            setNewContactAdded(false)
        },3000)
    }

    return (
        <div className="phonebook-form">
            <h1>Phonebook</h1>
            <h2 className={newContactAdded ? "show-addition-msg":"hide-addition-msg"}>{`${previouseName} has been added sucessfully.`}</h2>
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