import type { Task } from "../types";

export const tasks: Task[] = [
	{ id: 1, title: "Finaliser la maquette", assignee: "Aline", dueDate: "18 juil. 2026", priority: "Haute", status: "En cours" },
	{ id: 2, title: "Préparer le rapport", assignee: "Marc", dueDate: "21 juil. 2026", priority: "Moyenne", status: "À faire" },
	{ id: 3, title: "Valider les contenus", assignee: "Sarah", dueDate: "15 juil. 2026", priority: "Basse", status: "Terminée" },
];
