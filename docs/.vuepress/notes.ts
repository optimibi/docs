import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

/* =================== locale: en-US ======================= */

const documentationNote = defineNoteConfig({
	dir: "documenation",
	link: "/documentation/",
	sidebar: [
		{
			text: "Welcome",
			link: "/documentation/intro.md",
		},
		{
			text: "Update",
			collapsed: true,
			prefix: "/documentation/Update/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Start",
			collapsed: true,
			prefix: "/documentation/Start/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Setup",
			collapsed: true,
			prefix: "/documentation/Setup/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Console",
			collapsed: true,
			prefix: "/documentation/Console/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Datasource",
			collapsed: true,
			prefix: "/documentation/Datasource/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Model",
			collapsed: true,
			prefix: "/documentation/Model/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Visualizer",
			collapsed: true,
			prefix: "/documentation/Visualizer/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Analysis",
			collapsed: true,
			prefix: "/documentation/Analysis/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Share",
			collapsed: true,
			prefix: "/documentation/Share/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Tools",
			collapsed: true,
			prefix: "/documentation/Tools/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "System",
			collapsed: true,
			prefix: "/documentation/System/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Q&A",
			collapsed: true,
			prefix: "/documentation/Q&A/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Advanced",
			collapsed: true,
			prefix: "/documentation/Advanced/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Best",
			collapsed: true,
			prefix: "/documentation/Best/",
			icon: "carbon:idea",
			items: "auto",
		},
	],
});

const apiNote = defineNoteConfig({
	dir: "api",
	link: "/api/",
	sidebar: [
		{
			text: "System",
			collapsed: true,
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Frontend",
			collapsed: true,
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "SDK",
			collapsed: true,
			icon: "carbon:idea",
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
	link: "/documenation/",
	sidebar: [
		{
			text: "欢迎",
			link: "/documentation/intro.md",
		},
		{
			text: "更新",
			collapsed: true,
			prefix: "/documentation/Update/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "开始",
			collapsed: true,
			prefix: "/documentation/Start/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "设置",
			collapsed: true,
			prefix: "/documentation/Setup/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "控制台",
			collapsed: true,
			prefix: "/documentation/Console/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "数据源",
			collapsed: true,
			prefix: "/documentation/Datasource/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "模型",
			collapsed: true,
			prefix: "/documentation/Model/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "可视化",
			collapsed: true,
			prefix: "/documentation/Visualizer/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "分析",
			collapsed: true,
			prefix: "/documentation/Analysis/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "分享",
			collapsed: true,
			prefix: "/documentation/Share/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "工具",
			collapsed: true,
			prefix: "/documentation/Tools/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "系统",
			collapsed: true,
			prefix: "/documentation/System/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "问答",
			collapsed: true,
			prefix: "/documentation/Q&A/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "高级",
			collapsed: true,
			prefix: "/documentation/Advanced/",
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "最佳",
			collapsed: true,
			prefix: "/documentation/Best/",
			icon: "carbon:idea",
			items: "auto",
		},
	],
});

const apiNoteZH = defineNoteConfig({
	dir: "zh/api",
	link: "/api/",
	sidebar: [
		{
			text: "System",
			collapsed: true,
			icon: "carbon:idea",
			items: "auto",
		},
		{
			text: "Frontend",
			collapsed: true,
			icon: "carbon:idea",
			items: "auto",
		},
	],
});

export const zhNotes = defineNotesConfig({
	dir: "docs",
	link: "/",
	notes: [documentationNoteZH, apiNoteZH],
});
