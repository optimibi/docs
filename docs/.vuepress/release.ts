import { defineNoteConfig } from "vuepress-theme-plume";

export const releaseNote = defineNoteConfig({
	dir: "release",
	link: "/release",
	sidebar: [
		{
			text: "2025-01 v7.0",
			link: "/release/v7.0.md",
		},
		{
			text: "2024-11 v6.08",
			link: "/release/v6.08.md",
		},
		{
			text: "2024-09 v6.07",
			link: "/release/v6.07.md",
		},
		{
			text: "2024-07 v6.06",
			link: "/release/v6.06.md",
		},
		{
			text: "2024-05 v6.05",
			link: "/release/v6.05.md",
		},
	],
});

export const releaseNoteZH = defineNoteConfig({
	dir: "zh/release",
	link: "/release",
	sidebar: "auto",
});
