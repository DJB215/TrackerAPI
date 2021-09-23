module.exports = app => {
    const tests = require("../controllers/test.controller.js");

    var router = require("express").Router();

    // Create a new test
    router.post('/', tests.create);

    // Retrieve all Tests
    router.get("/", tests.findAll);

    app.use('/api/tests', router);

}