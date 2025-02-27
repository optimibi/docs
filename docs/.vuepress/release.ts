import { defineNoteConfig } from "vuepress-theme-plume";

export const releaseNote = defineNoteConfig({
	dir: "api",
	link: "/api",
	sidebar: "auto",
});

export const releaseNoteZH = defineNoteConfig({
	dir: "zh/api",
	link: "/api",
	sidebar: "auto",
});
