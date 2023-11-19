import { defineConfig } from "astro/config";
import crittersSlim from "astro-critters-slim";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), crittersSlim()],
	image: {
		domains: ["files.bestplates.net"],
		remotePatterns: [{ protocol: "https" }],
	},
});
