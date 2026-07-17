export type NavigationIcon =
	| "analytics"
	| "dashboard"
	| "projects"
	| "settings"
	| "tasks"
	| "users";

export interface NavigationItem {
	label: string;
	href: string;
	icon: NavigationIcon;
}

export interface AnalyticsMetric {
	label: string;
	value: string;
	change: number;
}

export type ProjectStatus = "En cours" | "En attente" | "Terminé";

export interface Project {
	id: number;
	name: string;
	client: string;
	progress: number;
	status: ProjectStatus;
}

export type TaskPriority = "Basse" | "Moyenne" | "Haute";
export type TaskStatus = "À faire" | "En cours" | "Terminée";

export interface Task {
	id: number;
	title: string;
	assignee: string;
	dueDate: string;
	priority: TaskPriority;
	status: TaskStatus;
}

export type UserStatus = "Actif" | "Inactif";

export interface User {
	id: number;
	name: string;
	email: string;
	role: string;
	status: UserStatus;
	avatar?: string;
}

export interface Activity {
	id: number;
	title: string;
	description: string;
	time: string;
}

export interface Notification {
	id: number;
	title: string;
	description: string;
	time: string;
	unread: boolean;
	type: "alert" | "system" | "user";
}

export interface TableColumn {
	key: string;
	label: string;
}

export type TableRow = object;
