import {useState} from 'react';

function App() {

  const [phonebook, setPhonebook] = useState([{name : "Cabbar Serif", phone: "537-5259900", id : 1}])
  const [newName, setNewName] = useState('new name');
  const [newNumber, setNewNumber] = useState('new number');


  const updatePhonebookAndClearInput = (newPerson) => {
    setPhonebook(phonebook.concat(newPerson))
    setNewName('') 
    setNewNumber('')
  }

  const alertNameFound = () => {
    alert(`${newNumber} is already added to phonebook!`)
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
  const isUserInPhonebook = (item) => {
    return (item.name === newName && item.phone === newNumber) | (item.phone === newNumber) ? true:false;
  }

  const TableLine = ({name, phone}) => <tbody><tr><td>{name}</td><td>{phone}</td></tr></tbody>;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {name : newName, phone: newNumber, id: phonebook.length+1}
    phonebook.find(item => isUserInPhonebook(item)) ? alertNameFound() : updatePhonebookAndClearInput(newPerson)
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
      <table>
        {phonebook.map(item => <TableLine key={item.phone} name={item.name} phone={item.phone}/>)}
      </table>
    </div>
  );
}

export default App;
