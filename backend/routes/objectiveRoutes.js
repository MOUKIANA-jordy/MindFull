import express from "express";
import { getobjective, addobjective } from "../controllers/objectiveController.js";

const router = express.Router();

router.get("/:userId", getobjective); // Récupérer les objectifs d’un utilisateur
router.post("/", addobjective); // Ajouter un objectif

export default router;
