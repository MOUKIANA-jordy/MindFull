import Objective from "../Models/objective.js";
import User from "../Models/User.js";

// 🔹 Récupérer les objectifs d'un utilisateur
export const getobjective = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Vérifier si l'utilisateur existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const objective = await objective.findAll({ where: { userId } });
    res.status(200).json({ Objective });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de la récupération des objectifs" });
  }
};

// 🔹 Ajouter un nouvel objective
export const addobjective = async (req, res) => {
  try {
    const { userId, objective } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const newobjective = await objective.create({ userId, objective });

    res.status(201).json({ message: "Objectif ajouté avec succès", objective: newobjective });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de l'ajout de l'objectif" });
  }
};
