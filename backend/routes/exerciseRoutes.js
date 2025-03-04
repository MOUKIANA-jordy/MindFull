import express from "express";
import { getExercises, addExercise } from "../controllers/exerciseController.js";

const router = express.Router();

router.get("/", getExercises); // Récupérer tous les exercices
router.post("/", addExercise); // Ajouter un exercice

export default router;
