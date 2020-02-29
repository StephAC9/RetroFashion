//cartItem and favorites should be loaded from cookies for visitors.
require('dotenv').config()
const express = require('express')
const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const memberIsAuth = require('./auth-service/member_auth')
const query = require('./schema/resolvers/query_resolver')
const mutation = require('./schema/resolvers/mutation_resolver')
const { GraphQLSchema } = graphql

const schema = new GraphQLSchema({
    query: query.RootQuery,
    mutation: mutation.Mutation
})

const app = express()

app.use(memberIsAuth)

// CORS middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*'); // restrict it to the required domain
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header,Authorization");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    return next();
});
const ConnectionString = process.env.DB_CONNECTION_STRING
const port = process.env.PORT || 5000

mongoose.connect(ConnectionString, { useNewUrlParser: true })
    .then(() => {
        mongoose.connection.once('open', () => {
            console.log('Connected to the database...')
        })
    })
    .catch(err => {
        console.log(err)
    })
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(port, () => {
    console.log(`Express server up running listening at port ${port} ...`)
})