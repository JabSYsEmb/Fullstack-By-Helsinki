const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

require('dotenv').config();

const mongo_uri = process.env.MONGODB_URI;

function db_connect(mongo_uri){
	return mongoose.connect(mongo_uri);
}

function static_connect(){
	return mongoose.connect(mongo_uri);
}

db_connect(mongo_uri)
	.then(() => console.log('Connection to database established successfully.'))
	.catch(err => console.error(`Connection to database failed: ${err}`));

const contact_schema = {
	name: {
		type: String,
		minLength: 5,
		required: true
	}, 
	number: {
		type: String,
		required: true,
	},
	date: {
		Date,
	},
};

const contact = new mongoose.Schema(contact_schema);

contact.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

const Phonebook = mongoose.model('Phonebook', contact); 

module.exports = {
	Phonebook,
	mongoose,
	static_connect,
};
