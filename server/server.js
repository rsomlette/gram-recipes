const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const logger = require("pino")();
const expressLogger = require("express-pino-logger")({ logger });

const mongoose = require("./config/database");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const PORT = process.env.PORT || 1111;
// // Initialize the app
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});
const app = express();
server.applyMiddleware({ app });

app.use(expressLogger);

logger.info(path.join(__dirname, "server.env"));

app.listen(PORT, () => {
  logger.info(
    `Server running on http://localhost:${PORT}${server.graphqlPath}`
  );
});
