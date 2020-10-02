const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.info("DB CONNECTED"))
  .catch(console.error);

mongoose.connection.once("open", () =>
  console.log("Connected to a MongoDB instance")
);
mongoose.connection.on("error", (error) => console.error(error));

module.exports = mongoose;
