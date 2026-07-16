import type { Project } from "../types";

export const projects: Project[] = [
	{ id: 1, name: "Refonte du portail", client: "Acme Inc.", progress: 72, status: "En cours" },
	{ id: 2, name: "Application mobile", client: "Globex", progress: 45, status: "En cours" },
	{ id: 3, name: "Campagne annuelle", client: "Initech", progress: 100, status: "Terminé" },
	{ id: 4, name: "Migration des données", client: "Umbrella", progress: 20, status: "En attente" },
	{ id: 5, name: "Espace client B2B", client: "Stark Industries", progress: 58, status: "En cours" },
	{ id: 6, name: "Audit de sécurité", client: "Wayne Enterprises", progress: 35, status: "En cours" },
	{ id: 7, name: "Plateforme e-commerce", client: "Wonka Industries", progress: 10, status: "En attente" },
	{ id: 8, name: "Automatisation RH", client: "Hooli", progress: 100, status: "Terminé" },
];
