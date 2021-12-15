import {useState} from 'react';

function App() {

  const [phonebook, setPhonebook] = useState([{name : "Cabbar Serif", phone: "10203023"}])
  const [newName, setNewName] = useState('new name');
  const [newNumber, setNewNumber] = useState('new number');


  const updatePhonebookAndClearInput = (newPerson) => {
    setPhonebook(phonebook.concat(newPerson))
    setNewName('') 
    setNewNumber('')
  }

  const alertNameFound = () => {
    alert(`${newName} is already added to phonebook!`)
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    setNewNumber(e.target.value)
  }
  const clearBox = (setFunc) => {
    setFunc('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {name : newName, phone: newNumber}
    phonebook.find(item => JSON.stringify(item) === JSON.stringify(newPerson)) ? alertNameFound() : updatePhonebookAndClearInput(newPerson)
  }

  return (
    <div>
      <h1>
        Phonebook
      </h1>
      <form>
        <div>name    : <input value={newName} onChange={handleNewName} onClick={()=>clearBox(setNewName)}/></div>
        <div>number  : <input value={newNumber} onChange={handleNumber} onClick={()=>clearBox(setNewNumber)}/></div>
        <div><button type="submit" onClick={handleSubmit}>add</button></div>
      </form>
      <h2>Numbers</h2>
      <>
        {phonebook.map(item => <p key={item.name}>{item.name} {item.phone}</p>)}
      </>
    </div>
  );
}

export default App;
