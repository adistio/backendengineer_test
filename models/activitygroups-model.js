import {Sequelize} from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Activitygroups = db.define('activity_groups',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        required: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at"
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at"
    },
    deletedAt: {
        type: DataTypes.DATE,
        field: "deleted_at"
    },
},{
    freezeTableName:true,
    timestamps: true,
    paranoid: true,
});
 
export default Activitygroups;
 
(async()=>{
    await db.sync();
})();