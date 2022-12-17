const express = require('express')
const app = express()
const cors = require('cors')

const config = require('./utils/config')
const { requestLogger } = require('./utils/logger.js')
const { unknownEndpoint, errorHandler } = require('./utils/middleware')
const notesRouter = require('./controllers/notes')
const Note = require('./models/note')

app.use(express.json())

app.use(requestLogger)

app.use(cors())

app.use(express.static('build'))

app.use('/api/notes/', notesRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
