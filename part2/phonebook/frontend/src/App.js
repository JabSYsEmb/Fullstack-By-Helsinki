import React ,{useState, useEffect} from 'react'
import './App.css';

import PhonebookForm from './components/phonebookForm'
import services from './services/communication'
import TableHtml from './components/table'

function App() {
  const [phonebook, setPhonebook] = useState([])

  useEffect(() => {
    services.getAll().then(item=>setPhonebook(phonebook.concat(item)))
  },[])

  return (
    <div>
      <PhonebookForm phonebook={phonebook} setPhonebook={setPhonebook}/>
      <TableHtml     phonebook={phonebook} />
    </div>
  );
}

export default App;