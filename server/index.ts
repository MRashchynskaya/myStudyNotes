const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

const app = express();
const PORT = 3010;

app.use('/graphql', graphqlHTTP({
	schema, 
	graphiql: true
}));

app.listen(PORT, err => {
	err ? console.log(err) : console.log('Server started!');
});