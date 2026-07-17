import type { Notification } from "../types";

export const notifications: Notification[] = [
	{ id: 1, title: "Nouvelle inscription", description: "Jean Dupont vient de créer un compte utilisateur.", time: "Il y a 5 min", unread: true, type: "user" },
	{ id: 2, title: "Rapport généré", description: "Le rapport financier mensuel est prêt à être téléchargé.", time: "Il y a 2 heures", unread: false, type: "system" },
	{ id: 3, title: "Alerte de sécurité", description: "Connexion inhabituelle détectée depuis une nouvelle adresse IP.", time: "Hier à 14:30", unread: false, type: "alert" },
	{ id: 4, title: "Mise à jour du système", description: "La version 2.4 de l'application a été déployée avec succès.", time: "Il y a 2 jours", unread: false, type: "system" },
];
