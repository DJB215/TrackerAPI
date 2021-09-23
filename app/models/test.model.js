module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("test", {
        EinsteinID: {
            type: Sequelize.STRING
        },
        JeffersonID: {
            type: Sequelize.STRING
        },
        CovidTestCode: {
            type: Sequelize.STRING
        },
        TestResult: {
            type: Sequelize.STRING
        },
    });

    return Test;
}