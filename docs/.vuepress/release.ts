import { defineNoteConfig } from "vuepress-theme-plume";

export const releaseNote = defineNoteConfig({
	dir: "release",
	link: "/release",
	sidebar: [
		{
			text: "v6.06",
			link: "/release/100 v6.06 Release Notes.md",
		},
		{
			text: "v6.05",
			link: "/release/test.md",
		},
	],
});

export const releaseNoteZH = defineNoteConfig({
	dir: "zh/release",
	link: "/release",
	sidebar: "auto",
});
