const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("pino")();
dotenv.config();

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  logger,
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("DB CONNECTED"))
  .then(server.listen)
  .then(({ url }) => logger.info(`🚀  Server ready at ${url}`))
  .catch((err) => logger.error(err));

mongoose.connection.once("open", () =>
  logger.info("Connected to a MongoDB instance")
);

mongoose.connection.on("error", (error) => logger.error(error));
