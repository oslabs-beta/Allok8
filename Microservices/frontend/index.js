const express = require("express");
const PORT = 8080;
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
    fetch("http://backend/")
    .then(response => response.json())
    .then(jsonRes => res.status(200).send(jsonRes))
    .catch(err => next(err))
});

app.use((err, req, res, next) => {
    return res.status(418).send(err);
})

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
