import express from "express";
import { trackMood, getMoodHistory } from "../controllers/moodController.js";

const router = express.Router();

router.post("/", trackMood); // Ajouter un suivi d'humeur
router.get("/:userId", getMoodHistory); // Récupérer les humeurs d'un utilisateur

export default router;
