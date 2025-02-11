import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
	enhance({ router }) {
		if (typeof window !== "undefined" && router.currentRoute.value.path === "/") {
			window.location.href = "https://example.com";
		}
	},
});
