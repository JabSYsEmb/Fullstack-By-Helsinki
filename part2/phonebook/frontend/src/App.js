import React ,{useState, useEffect} from 'react'
import services from './services/communication'
import './App.css';

import PhonebookForm from './components/phonebookForm'
import TableHtml from './components/table'
import Search from './components/searchInput'

function App() {
  const [phonebook, setPhonebook] = useState([])

  useEffect(() => {
    services.getAll().then(item=>setPhonebook(phonebook.concat(item)))
  },[])

  return (
    <div>
      <Search        phonebook={phonebook} />
      <PhonebookForm phonebook={phonebook} setPhonebook={setPhonebook}/>
      <TableHtml     phonebook={phonebook} />
    </div>
  );
}

export default App;