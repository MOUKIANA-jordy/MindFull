// models/Mood.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import User from "./User.js"; // Relation avec User

const Mood = sequelize.define("Mood", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Définir la relation avec l'utilisateur
Mood.belongsTo(User, { foreignKey: "userId" });

export default Mood;
