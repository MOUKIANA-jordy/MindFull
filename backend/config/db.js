import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Charger les variables d'environnement

const sequelize = new Sequelize(
  process.env.DB_NAME || 'mindfull_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || 'jordy',
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
    logging: false,
    dialectOptions: {
      connectTimeout: 30000, // Augmente le délai de connexion à 30 secondes
    },
  }
);

export { sequelize };

