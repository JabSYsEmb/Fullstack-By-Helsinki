// To-do
// 1. fix the id generator function for new added person (person_ID_generator) 
// 2. 
//

const express 		= require("express")
const bodyParser  = require("body-parser")

let data      		= require('./persons.json')

const app = express()
const APP_PORT = 3000

// MIDDLEWARE
app.use(bodyParser.json())

const person_api_handler = (res, req) => {
	req.json(data)
}

const not_found_handler = (req) => {
	req.status(404).send('<pre> requested data is not found, try something else!</pre>').end()
}

const person_getByID_handler = (res, req) => {
	const id = Number(res.params.id);
	const person = data.find(person => person.id === id);

	if(person)
	{
		req.json(person);
	}
	else
	{
		not_found_handler(req);
	}
}

const person_deleteByID_handler = (req, res) => {
	const id = Number(req.params.id)

	const deleted_person = data.find(person => person.id === id)

	data = data.filter(person => person.id !== id)
	res.status(200).json(deleted_person)
}

const info_handler = (res, req) => {
	const msg_info = `phonebook has info for ${data.length} people`
	const date_info = new Date().toString();
	req.status(200).send(`
	<p>${msg_info}</p>
	<p>${date_info}</p>
	`)
}

const person_ID_generator = () => 
	Math.ceil( 
		Math.random() + 
		( Math.max(...data.map(person => person.id)) - Math.min(...data.map(person => person.id)) ) + 
		Math.min(...data.map(person => person.id)) 
	)

const is_payload_correct = (payload) => (payload.name) && (payload.number)

const person_added_handler = (req, res) => {
	const body = req.body
	if(is_payload_correct(body))
	{
		const payload = {
			id: person_ID_generator(),
			...body
		}
		data.push(payload)
		res.status(202).send(payload)
	}
	else
	{
		res
			.status(400)
			.json(body)
			.end()
	}
}

// PERSONS API
app.get('/api/persons', person_api_handler)
app.get('/api/persons/:id', person_getByID_handler)
app.get('/info', info_handler)

app.delete('/api/persons/:id', person_deleteByID_handler)

app.post('/api/persons', person_added_handler)

app.listen(APP_PORT, () => {
	console.log(`App running on http://localhost:${APP_PORT}`)
})
