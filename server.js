const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Covid Tracker API" });
});

const PORT = process.env.PORT || 4000;

require("./app/routes/test.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});