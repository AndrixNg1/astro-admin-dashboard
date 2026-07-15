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
