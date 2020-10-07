const jwt = require("jsonwebtoken");

const Recipe = require("../models/Recipe");
const User = require("../models/User");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    recipes: async (root, args, context) => Recipe.find({}),
    users: () => User.find({}),
  },
  Mutation: {
    addRecipe: async (
      root,
      { name, description, category, instructions, author },
      context
    ) => {
      const newRecipe = await new Recipe({
        name,
        description,
        category,
        instructions,
        author,
      }).save();
      return newRecipe;
    },
    signupUser: async (root, { username, email, password }) => {
      const user = await User.findOne({ username });
      if (user) throw new Error("User already exist");
      const newUser = await new User({ username, email, password }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    },
  },
};

module.exports = resolvers;
