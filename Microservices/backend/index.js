const express = require("express");
const PORT = 3000;
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
  return res.status(200).send({"message": "hello"});
});

app.use((err, req, res, next) => {
  return res.status(418).send(err);
});

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
