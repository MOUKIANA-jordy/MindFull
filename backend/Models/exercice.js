// models/Exercise.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Exercise = sequelize.define("Exercise", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default Exercise;
