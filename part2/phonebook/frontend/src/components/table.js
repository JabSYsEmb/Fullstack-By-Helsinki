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

const GetNamesOfInstanceAsThArray = ({simple}) => Object.keys(simple).map(entry=> <th key={entry}>{entry}</th>).concat(<th key="delete">delete</th>)

const TableHead = ({simple}) => 
{
    return (
        <thead>
            <tr>
                {simple && <GetNamesOfInstanceAsThArray simple={simple} />}
            </tr>
        </thead>
    )
}

const TableBody = ({phonebook}) => 
{
    return phonebook?.map(contact => <TableLine key={contact.id} contact={contact}/>)
}
const TableLine = ({contact}) => (
    <tbody>
        <TableContent contact={contact}/>
    </tbody>
)

const ArrayOfTd = ({contact}) => Object.values(contact).map(entry => <td key={entry}>{entry}</td>)

const TableContent = ({contact}) => (
    <tr>
        <ArrayOfTd contact={contact} />
        <td><DeleteBtn contact={contact}/></td>
    </tr>
)

const DeleteBtn = ({contact}) => <button>delete</button> 

export default TableHtml;  