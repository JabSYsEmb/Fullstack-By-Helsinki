import { useState } from "react";
const Search = ({phonebook}) => {

    const [search, setSearch] = useState('search for a contact')
    const [founds, setFounds] = useState([])

    const searchHandler = (event) => {
        const search_value = event.target.value;
        setSearch(search_value)
        setFounds(phonebook.filter(item => doesStringMatchStringCaseInsensitive(item.name,search_value)))
    }

    const doesStringMatchStringCaseInsensitive = (first_string, second_string) => first_string.toUpperCase().includes(second_string.toUpperCase())

    const cleanInput = (setState) => {
    setState('')
    }

    return (
        <div className="search-bar">
            search for <input value={search} onChange={searchHandler} onClick={()=>cleanInput(setSearch)}/>
            <ul>
                {search !== '' && founds && founds.map(contact => <li key={contact.id}>{contact.name}</li>)}
            </ul>
        </div>
    )
}

export default Search;