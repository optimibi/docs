import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

/* =================== locale: en-US ======================= */

const documentationNote = defineNoteConfig({
	dir: "documenation",
	link: "/documentation",
	sidebar: [
		{
			text: "Welcome",
			link: "/documentation/intro.md",
		},

		{
			text: "Start",
			collapsed: true,
			prefix: "/documentation/Start/",
			items: "auto",
		},
		{
			text: "Setup",
			collapsed: true,
			prefix: "/documentation/Setup/",
			items: "auto",
		},
		{
			text: "Console",
			collapsed: true,
			prefix: "/documentation/Console/",
			items: "auto",
		},
		{
			text: "Datasource",
			collapsed: true,
			prefix: "/documentation/Datasource/",
			items: "auto",
		},
		{
			text: "Model",
			collapsed: true,
			prefix: "/documentation/Model/",
			items: "auto",
		},
		{
			text: "Visualization",
			collapsed: true,
			prefix: "/documentation/Visualizer/",
			items: [
				{
					text: "Welcome",
					link: "/documentation/Visualizer/intro.md",
				},
				{
					text: "Page",
					collapsed: true,
					prefix: "/documentation/Visualizer/Page/",
					items: "auto",
				},
				{
					text: "Chart",
					collapsed: true,
					prefix: "/documentation/Visualizer/Chart/",
					items: "auto",
				},
			],
		},
		{
			text: "Analysis",
			collapsed: true,
			prefix: "/documentation/Analysis/",
			items: "auto",
		},
		{
			text: "Share",
			collapsed: true,
			prefix: "/documentation/Share/",
			items: "auto",
		},
		{
			text: "Tools",
			collapsed: true,
			prefix: "/documentation/Tools/",
			items: "auto",
		},
		{
			text: "System",
			collapsed: true,
			prefix: "/documentation/System/",
			items: "auto",
		},
		{
			text: "FAQs",
			collapsed: true,
			prefix: "/documentation/FAQs/",
			items: "auto",
		},
		{
			text: "Advanced",
			collapsed: true,
			prefix: "/documentation/Advanced/",
			items: "auto",
		},
		{
			text: "Best",
			collapsed: true,
			prefix: "/documentation/Best/",
			items: "auto",
		},
	],
});

const apiNote = defineNoteConfig({
	dir: "api",
	link: "/api",
	sidebar: [
		{
			text: "System",
			collapsed: true,
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

export const enNotes = defineNotesConfig({
	dir: "docs",
	link: "/",
	notes: [documentationNote, apiNote],
});

/* =================== locale: zh-CN ======================= */

const documentationNoteZH = defineNoteConfig({
	dir: "zh/documenation",
	link: "/documenation",
	sidebar: [
		{
			text: "欢迎",
			link: "/documentation/intro.md",
		},
		{
			text: "更新",
			collapsed: true,
			prefix: "/documentation/Update/",
			items: "auto",
		},
		{
			text: "开始",
			collapsed: true,
			prefix: "/documentation/Start/",
			items: "auto",
		},
		{
			text: "设置",
			collapsed: true,
			prefix: "/documentation/Setup/",
			items: "auto",
		},
		{
			text: "控制台",
			collapsed: true,
			prefix: "/documentation/Console/",
			items: "auto",
		},
		{
			text: "数据源",
			collapsed: true,
			prefix: "/documentation/Datasource/",
			items: "auto",
		},
		{
			text: "模型",
			collapsed: true,
			prefix: "/documentation/Model/",
			items: "auto",
		},
		{
			text: "可视化",
			collapsed: true,
			prefix: "/documentation/Visualizer/",
			items: "auto",
		},
		{
			text: "分析",
			collapsed: true,
			prefix: "/documentation/Analysis/",
			items: "auto",
		},
		{
			text: "分享",
			collapsed: true,
			prefix: "/documentation/Share/",
			items: "auto",
		},
		{
			text: "工具",
			collapsed: true,
			prefix: "/documentation/Tools/",
			items: "auto",
		},
		{
			text: "系统",
			collapsed: true,
			prefix: "/documentation/System/",
			items: "auto",
		},
		{
			text: "问答",
			collapsed: true,
			prefix: "/documentation/Q&A/",
			items: "auto",
		},
		{
			text: "高级",
			collapsed: true,
			prefix: "/documentation/Advanced/",
			items: "auto",
		},
		{
			text: "最佳",
			collapsed: true,
			prefix: "/documentation/Best/",
			items: "auto",
		},
	],
});

const apiNoteZH = defineNoteConfig({
	dir: "zh/api",
	link: "/api",
	sidebar: [
		{
			text: "System",
			collapsed: true,
			items: "auto",
		},
		{
			text: "Frontend",
			collapsed: true,
			items: "auto",
		},
	],
});

export const zhNotes = defineNotesConfig({
	dir: "docs",
	link: "/",
	notes: [documentationNoteZH, apiNoteZH],
});
