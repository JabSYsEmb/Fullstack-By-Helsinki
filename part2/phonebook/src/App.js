import {useState} from 'react';

function App() {

  const [phonebook, setPhonebook] = useState([{name : "Cabbar Serif"}])
  const [newName, setNewName] = useState('new name');
  const [newNumber, setNewNumber] = useState('new number');


  const updatePhonebookAndClearInput = () => {
    setPhonebook(phonebook.concat({name : newName}))
    setNewName('') 
  }

  const alertNameFound = () => {
    alert(`${newName} is already added to phonebook!`)
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    phonebook.find(item => item.name === newName) ? alertNameFound() : updatePhonebookAndClearInput()
  }

  return (
    <div>
      <h1>
        Phonebook
      </h1>
      <form>
        <div>name    : <input value={newName} onChange={handleNewName} /></div>
        <div>number  : <input value={newNumber} onChange={handleNumber}/></div>
        <div><button type="submit" onClick={handleSubmit}>add</button></div>
      </form>
      <h2>Numbers</h2>
      <>
        {phonebook.map(item => <p key={item.name}>{item.name}</p>)}
      </>
    </div>
  );
}

export default App;
