import type { Project } from "../types";

export const projects: Project[] = [
	{ id: 1, name: "Refonte du portail", client: "Acme Inc.", progress: 72, status: "En cours" },
	{ id: 2, name: "Application mobile", client: "Globex", progress: 45, status: "En cours" },
	{ id: 3, name: "Campagne annuelle", client: "Initech", progress: 100, status: "Terminé" },
	{ id: 4, name: "Migration des données", client: "Umbrella", progress: 20, status: "En attente" },
];
