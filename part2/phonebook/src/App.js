import {useState} from 'react';

function App() {
  const [phonebook, setPhonebook] = useState([
  {
    name : "Cabbar Serif"
  }
])
  const [newName, setNewName] = useState('new name');

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhonebook(phonebook.concat({
      name : newName
    }))
    setNewName('') 
  }

  return (
    <div>
      <h1>
        Phonebook
      </h1>
      <form>
        name: <input value={newName} onChange={handleNewName} />
      </form>
      <button type="submit" onClick={handleSubmit}>add</button>
      <h2>Numbers</h2>
      <ul>
        {phonebook.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
