const { ApolloServer} = require("apollo-server");
const {resolvers, typeDefs} = require("./src/graphql/index")

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen();