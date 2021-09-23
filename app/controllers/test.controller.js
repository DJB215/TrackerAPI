const db = require('../models');
const Test = db.tests;
const Op = db.Sequelize.Op;

// Create and Save a new Test Result
exports.create = (req, res) => {
    if (!req.body.EinsteinID) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    const test = {
        EinsteinID: req.body.EinsteinID,
        CovidTestCode: req.body.CovidTestCode,
        TestResult: req.body.TestResult
    };

    Test.create(test)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating the Test."
            });
        });
};

// Retrieve all Tests by LoginID
exports.findAllByID = (req, res) => {

}

// Retrieve all Tests
exports.findAll = (req, res) => {

};

// Update a single Test
exports.update = (req, res) => {

};

// Delete a single Test
exports.delete = (req, res) => {

};

// Delete all Tests
exports.deleteAll = (req, res) => {

};

