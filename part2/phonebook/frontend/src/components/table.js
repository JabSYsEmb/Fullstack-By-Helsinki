const TableHead = () => (
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
        </tr>
    </thead>
)

const TableLine = ({name, phone}) => (
    <tbody>
        <TableContent name={name} phone={phone}/>
    </tbody>
)

const TableContent = ({name,phone}) => (
    <tr>
        <td>{name}</td>
        <td>{phone}</td>
    </tr>
)

const Table = ({phonebook}) => 
(
    <div className="phonebook">
    <h2>Numbers</h2>
    <table>
        <TableHead />
        {phonebook.map(item => <TableLine key={item.id} name={item.name} phone={item.number}/>)}
    </table>
</div>
)

const TableHtml = ({phonebook}) => <Table phonebook={phonebook} />

export default TableHtml;  