import { defineNoteConfig } from "vuepress-theme-plume";

export const releaseNote = defineNoteConfig({
	dir: "release",
	link: "/release",
	sidebar: "auto",
});

export const releaseNoteZH = defineNoteConfig({
	dir: "zh/release",
	link: "/release",
	sidebar: "auto",
});
