import { defineNoteConfig } from "vuepress-theme-plume";

export const apiNote = defineNoteConfig({
	dir: "api",
	link: "/api",
	sidebar: [
		{
			text: "Authentication",
			collapsed: true,
			prefix: "/api/Authentication/",
			items: "auto",
		},
		{
			text: "Frontend",
			collapsed: true,
			items: "auto",
		},
		{
			text: "SDK",
			collapsed: true,
			items: "auto",
		},
	],
});

export const apiNoteZH = defineNoteConfig({
	dir: "zh/api",
	link: "/api",
	sidebar: [
		{
			text: "Authentication",
			collapsed: true,
			prefix: "/api/Authentication/",
			items: "auto",
		},
		{
			text: "Frontend",
			collapsed: true,
			items: "auto",
		},
	],
});
