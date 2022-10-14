import { Sequelize } from "sequelize";
 
const db = new Sequelize('backendengineer_test', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;