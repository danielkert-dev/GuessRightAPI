const { createPool } = require("mysql");

module.exports = createPool({
    multipleStatements: true,
    charset: 'UTF8_GENERAL_CI',
    user: 'client', // this needs to match the node.js process user
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 10,
})