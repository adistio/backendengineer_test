import {Sequelize} from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Todoitems = db.define('todos',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    activity_group_id: {
        type: DataTypes.INTEGER,
        required: true,
    },
    title: {
        type: DataTypes.STRING,
        required: true,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        required: true,
        defaultValue: true
    },
    priority: {
        type: DataTypes.STRING,
        required: true,
        defaultValue: "very-high"
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
 
export default Todoitems;
 
(async()=>{
    await db.sync();
})();