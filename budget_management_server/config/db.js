const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'budget_app'
    // host: process.env.HOST,
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database.');
});
// const connectDB = () => {
//     const connection = mysql.createConnection({
//         // host: process.env.HOST,
//         // user: process.env.USER,
//         // password: process.env.PASSWORD,
//         // database: process.env.DATABASE
//         host: 'localhost',
//         user: 'root',
//         password: 'admin',
//         database: 'budget_app'
//     });
//     // HOST = 'localhost'
//     // USER = 'root@localhost'
//     // PASSWORD = 'admin'
//     // DATABASE = 'budget_app'
//
//     connection.connect((err) => {
//         if (err) {
//             return console.error('An error occurred: ' + err.message);
//         }
//         console.log('Connected to the MySQL server.');
//     });
// }

module.exports = db;
