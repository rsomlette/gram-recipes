const Recipe = require("../models/Recipe");
const User = require("../models/User");

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
  },
};

module.exports = resolvers;
