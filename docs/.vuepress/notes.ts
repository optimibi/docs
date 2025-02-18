import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";
import { documentationNote, documentationNoteZH } from "./docs";
import { apiNote, apiNoteZH } from "./api";

/* =================== locale: en-US ======================= */

export const enNotes = defineNotesConfig({
	dir: "docs",
	link: "/",
	notes: [documentationNote, apiNote],
});

/* =================== locale: zh-CN ======================= */

export const zhNotes = defineNotesConfig({
	dir: "docs",
	link: "/",
	notes: [documentationNoteZH, apiNoteZH],
});
