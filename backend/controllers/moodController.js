import Mood from "../Models/mood.js";
import User from "../Models/User.js";

// 🔹 Suivre l'humeur (Track Mood)
export const trackMood = async (req, res) => {
  try {
    const { userId, mood } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Créer une entrée de suivi d’humeur
    const newMood = await Mood.create({ userId, mood });

    // Répondre avec un message de succès et les données de l'humeur
    res.status(201).json({
      message: "Humeur enregistrée avec succès",
      mood: newMood,
    });
  } catch (error) {
    console.error(error); // Log l'erreur dans la console pour le debugging
    res.status(500).json({ message: "Erreur serveur lors de l'enregistrement de l'humeur" });
  }
};

// 🔹 Obtenir toutes les humeurs d'un utilisateur
export const getMoodHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    // Vérifier si l'utilisateur existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Récupérer toutes les humeurs de cet utilisateur
    const moods = await Mood.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]], // Optionnel : pour trier par date descendante
    });

    if (moods.length === 0) {
      return res.status(404).json({ message: "Aucune humeur enregistrée pour cet utilisateur" });
    }

    // Répondre avec l'historique des humeurs
    res.status(200).json({ moods });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération de l'historique des humeurs" });
  }
};

