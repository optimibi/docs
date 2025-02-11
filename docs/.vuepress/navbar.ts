import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
	{
		text: "Documentations",
		icon: "mdi:idea",
		link: "/documentation/intro.md",
		activeMatch: "^/documentation/",
	},
	{
		text: "API",
		link: "/api/intro.md",
		activeMatch: "^/api/",
		icon: "carbon:idea",
	},
	// {
	// 	text: "Blog",
	// 	link: "/blog/intro.md",
	// 	activeMatch: "^/blog/",
	// 	icon: "carbon:idea",
	// },
]);

export const zhNavbar = defineNavbarConfig([
	{
		text: "文档",
		link: "/documentation/intro.md",
		activeMatch: "^/documentation/",
	},
	{ text: "接口", link: "/api/intro.md", activeMatch: "^/api/" },
	//{ text: "博客", link: "/blog/intro.md", activeMatch: "^/blog/" },
]);
