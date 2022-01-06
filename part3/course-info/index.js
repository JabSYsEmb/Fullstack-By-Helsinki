const express = require('express')
const content = express()

const http = require('http')

const notes = [  
	{    
		id: 1,    
		content: "HTML is easy",    
		date: "2019-05-30T17:30:31.098Z",    
		important: true  
	},  
	{    
		id: 2,    
		content: "Browser can execute only Javascript",    
		date: "2019-05-30T18:39:34.091Z",    
		important: false  
	},  
	{    
		id: 3,    
		content: "GET and POST are the most important methods of HTTP protocol",    
		date: "2019-05-30T19:20:14.298Z",    
		important: true  
	}
]

const app = http.createServer((request, response) => {
	console.log(request.method)
	response.writeHead(200, { 'Content-Type': 'text/plain' })
	response.end('Hello World_1')
})

const rootHandler = (req, res) => {
	res.send('<h2>Hello World_2!</h2>')
}

const notesHandler = (req, res) => {
	res.json(notes)
}

content.get('/', rootHandler)
content.get('/api/notes', notesHandler)

const APP_PORT = 3001
app.listen(APP_PORT)

const CONTENT_PORT = 3002

content.listen(CONTENT_PORT, () => {
	console.log(`content running on port ${CONTENT_PORT}`)
})

console.log(`app running on port ${APP_PORT}`)
