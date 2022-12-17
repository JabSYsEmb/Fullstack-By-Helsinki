const express = require('express');
const app = express();

app.use(express.json());
app.use(require('morgan')(':method :url for :remote-addr'));

const { Phonebook, mongoose, static_connect } = require('./db');

app.get('/api/notes', (_req, res) => {
	Phonebook.find({})
		.then((result) => res.json(result))
		.catch(() =>
			res.send(
				`
			<script>
				function db_connect() {
					window.location.href = 'http://localhost:3000/db_connect';
				}
			</script>
			<div>
				<h1 style="color:red;">Connection to db is done</h1>
				<p> 
					Try to reconnect to db: 
					<button onclick="db_connect()">
						connect
					</button>
				</p>
			</div>
			`
			)
		);
});

app.get('/status', (_req, res) => {
	switch (mongoose.connection.readyState) {
	case 0:
		res.send('<h1>Server is down.</h1>');
		break;
	case 1:
		res.send('<h1>Server is up running...</h1>');
		break;
	case 2:
		res.send('<h1>Server is being set up...</h1>');
		break;
	case 3:
		res.send('<h1>Server is being disconnected...</h1>');
		break;
	default:
		res.send('<h1> I have no idea what is happening right now</h1>');
	}
});

app.get('/api/notes/:name', (req,res, next) => 
	Phonebook.findOne({name : req.params.name})
		.then((contact) => contact !== null ? res.json(contact):res.status(404).end())
		.catch(err => next(err))
);

app.get('/db_connect', (_req, res) => {
	static_connect()
		.then(() =>
			res.send('<h1>connection reestablished again successfully</h1>')
		)
		.catch(() =>
			res.sned('<h1 style=\'color:red;\'>Something went wrong...</h1>')
		);
});

app.get('/db_close', (_req, res) => {
	mongoose.connection
		.close()
		.then(() => res.send('<h1>connection is closed successfully.</h1>'))
		.catch(() =>
			res.send('<h1 style="color:red;">Something gone wrong...</h1>')
		);
});

app.delete('/api/notes/:name', (req,res,next) => {
	Phonebook.findOneAndDelete({name: req.params.name}) 
		.then((_contact) => {
			console.log(_contact);
			res.status(200).end();
		})
		.catch((err) => next(err));
});

// app.use((err) => console.log(err));

// const body_validator = (req,res, next) => {
//   if(req.body.name === undefined){
//     res.status(400).send({error: "Malformed request syntax: name is missing"});
//   }
//   if(req.body.number === undefined){
//     res.status(400).send({error: "malformed request syntax: number is missing"});
//   }
//   next();
// }
// app.use(body_validator);

app.post('/api/notes', (req,res, next) => {
	const body = req.body;

	if(body === undefined) {
		return res.status(400).json({error: 'missing content'});
	}

	const add_contact = new Phonebook({
		name: body.name,
		number: body.number,
		date: Date(),
	});

	add_contact.save().then(
		(added_contact) => res.json(added_contact)
	)
		.catch(err => next(err));
});

const errorHandler = (error, _req, res, next) => {
	// console.error(error.message);
	console.error(error.name);

	if (error.name === 'MongoNotConnectedError') {
		return res.status(400).send(
			`
    <html>
      <script>
        function db_connect() {
          window.location.href = 'http://localhost:3000/db_connect';
        }
      </script>
      <div>
        <button onclick="db_connect()">
          try to connect mongodb
        </button>
      </div>
    </html>
    `
		);
	} 

	if (error.name === 'ValidationError') {
		return res.status(400).send({error: error.message});
	} 

	next(error);
};

app.use(errorHandler);

// unknown end point
const unknown_endpoint = (_req,res) => res.status(404).send({error: 'Not found URL'});
app.use(unknown_endpoint);

app.listen(3000, () => console.log('backend is up and running'));
