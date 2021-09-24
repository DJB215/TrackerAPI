const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Covid Tracker API" });
});

const PORT = process.env.PORT || 443;

require("./app/routes/test.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});