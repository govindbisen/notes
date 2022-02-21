const express = require("express");
const route = require("./Routes/routing");

const app = express();
app.use("/", route);
app.use(express.json);

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
