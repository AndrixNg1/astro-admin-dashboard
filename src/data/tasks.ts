import type { Task } from "../types";

export const tasks: Task[] = [
	{ id: 1, title: "Finaliser la maquette", assignee: "Aline", dueDate: "18 juil. 2026", priority: "Haute", status: "En cours" },
	{ id: 2, title: "Préparer le rapport", assignee: "Marc", dueDate: "21 juil. 2026", priority: "Moyenne", status: "À faire" },
	{ id: 3, title: "Valider les contenus", assignee: "Sarah", dueDate: "15 juil. 2026", priority: "Basse", status: "Terminée" },
	{ id: 4, title: "Configurer les sauvegardes", assignee: "Patrick", dueDate: "23 juil. 2026", priority: "Haute", status: "À faire" },
	{ id: 5, title: "Tester le parcours utilisateur", assignee: "Grâce", dueDate: "25 juil. 2026", priority: "Moyenne", status: "En cours" },
	{ id: 6, title: "Optimiser les performances", assignee: "David", dueDate: "28 juil. 2026", priority: "Haute", status: "En cours" },
	{ id: 7, title: "Mettre à jour la documentation", assignee: "Aline", dueDate: "30 juil. 2026", priority: "Basse", status: "À faire" },
	{ id: 8, title: "Déployer la version 2.4", assignee: "Marc", dueDate: "12 juil. 2026", priority: "Haute", status: "Terminée" },
];
