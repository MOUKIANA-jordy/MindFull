import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./config/db.js";

// Importation des routes
import authRoutes from "./routes/authRoutes.js";
import moodRoutes from "./routes/moodRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";
import objectiveRoutes from "./routes/objectiveRoutes.js";

// Charger les variables d'environnement
dotenv.config();

const app = express()

// Middleware pour parser le JSON
app.use(express.json());
app.use(cors());

// Définition des routes avec `Router`
app.use("/api/auth", authRoutes);
app.use("/api/mood", moodRoutes);
app.use("/api/exercise", exerciseRoutes);
app.use("/api/objective", objectiveRoutes);

// Test de la connexion Sequelize
sequelize.authenticate()
  .then(() => {
    console.log("Connexion à la base de données réussie");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données :", err);
  });

// Synchronisation des modèles avec la base de données
import User from "./Models/User.js";
import mood from "./Models/mood.js";
import exercise from "./Models/exercise.js";
import objective from "./Models/objective.js";

sequelize.sync({ force: false })
  .then(() => {
    console.log("Base de données synchronisée avec succès");
  })
  .catch((error) => {
    console.error("Erreur de synchronisation avec la base de données:", error);
  });


// route principale
app.get("/", (req,res)=>{
    res.send("Server MindFull is ready")
})

app.get("/api/user",(req,res)=>{
    res.send(User)
})
const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`)
})
