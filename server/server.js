const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");
dotenv.config();

const logger = require("pino")();

const mongoose = require("./config/database");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

// const PORT = process.env.PORT || 1111;
// // Initialize the app
const server = new ApolloServer({
  typeDefs,
  resolvers,
  logger,
});

server.listen().then(({ url }) => logger.info(`🚀  Server ready at ${url}`));
