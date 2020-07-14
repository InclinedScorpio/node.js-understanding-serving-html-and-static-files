const path = require("path");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const router = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.use((req, res, next) => {
	res.send("<h1>You have lost your way");
});

app.listen(3000, "localhost", () => {
	console.log("Server started at Port 3000");
});
