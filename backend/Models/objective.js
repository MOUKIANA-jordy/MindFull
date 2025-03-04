// models/Goal.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import User from "./User.js";

const Objective = sequelize.define("Objective", {
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
Objective.belongsTo(User, { foreignKey: "userId" });

export default Objective;
