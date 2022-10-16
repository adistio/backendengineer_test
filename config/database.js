import { Sequelize } from "sequelize";
// import dotenv from 'dotenv'
// dotenv.config({path: './.env'}); 

const db = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD,{
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: 3306
});
 
export default db;