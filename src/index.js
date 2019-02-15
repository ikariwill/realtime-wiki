const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const server = require("http").Server(app);

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes"));

server.listen(3000, () => {
  console.log("Server started on port 3000!");
});
