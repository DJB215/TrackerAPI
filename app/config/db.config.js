module.exports = {
    HOST: "covid-tracker.cofja2nbqc7n.us-east-1.rds.amazonaws.com",
    PORT: "1433",
    USER: "admin",
    PASSWORD: "EHNInnovation01",
    DB: "covid-tracker",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};