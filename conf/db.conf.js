const { createPool } = require("mysql");

module.exports = createPool({
    multipleStatements: true,
    charset: 'UTF8_GENERAL_CI',
    user: 'client', // this needs to match the node.js process user
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})