import { defineNoteConfig } from "vuepress-theme-plume";

export const releaseNote = defineNoteConfig({
	dir: "release",
	link: "/release",
	sidebar: ["100 v6.06 Release Notes.md", "test.md"],
});

export const releaseNoteZH = defineNoteConfig({
	dir: "zh/release",
	link: "/release",
	sidebar: "auto",
});
