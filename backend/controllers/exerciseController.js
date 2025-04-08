import Exercise from "../Models/exercise.js";

// Récupérer la liste des exercices
export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.findAll();
    res.status(200).json({ exercises });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de la récupération des exercices" });
  }
};

//  Ajouter un nouvel exercice
export const addExercise = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newExercise = await Exercise.create({ name, description });

    res.status(201).json({ message: "Exercice ajouté avec succès", exercise: newExercise });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de l'ajout de l'exercice" });
  }
};
