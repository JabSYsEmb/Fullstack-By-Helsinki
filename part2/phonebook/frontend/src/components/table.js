import services from '../services/communication'

const TableHtml = ({phonebook}) => <Table phonebook={phonebook} />

const Table = ({phonebook}) => 
(
    <div className="phonebook">
        <h2>Numbers</h2>
        <table>
            <TableHead simple={phonebook[0]}/>
            <TableBody phonebook={phonebook} />
        </table>
    </div>
)

const TableHead = ({simple}) => <thead><tr>{simple && <GetNamesOfInstanceAsThArray simple={simple} />}</tr></thead>

const GetNamesOfInstanceAsThArray = ({simple}) => Object.keys(simple).map(entry=> <th key={entry}>{entry}</th>).concat(<th key="delete">delete</th>)

const TableBody = ({phonebook}) =>  phonebook?.map(contact => <TableLine key={contact.id} contact={contact}/>)

const TableLine = ({contact}) => <tbody><TableContent contact={contact}/></tbody>

const TableContent = ({contact}) => <tr><ArrayOfTd contact={contact} /></tr>

const ArrayOfTd = ({contact}) => Object.values(contact).map(entry => <td key={entry}>{entry}</td>).concat(<td key="delete-btn"><DeleteBtn contact={contact}/></td>)

const DeleteBtn = ({contact}) => <button type='submit' onClick={()=>deleteContactAndRefreshPage(contact)}>delete</button> 

const deleteContactAndRefreshPage = (contact) => {
    const {name} = contact
    const msg = `Delete "${name}" from the phonebook?`
    services.deleteByID(contact.id)
    window.confirm(msg)
    window.location.reload()
}
export default TableHtml;