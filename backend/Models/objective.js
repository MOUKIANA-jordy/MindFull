// models/Goal.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import User from "./User.js"; // Relation avec User

const Obj = sequelize.define("Obj", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  goal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Définir la relation avec l'utilisateur
Goal.belongsTo(User, { foreignKey: "userId" });

export default Obj;
