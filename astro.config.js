import { defineConfig } from "astro/config";
// Eventually, replace this import with the official one - we're using a
// patched version for now.
// import deno from "@astrojs/deno";
import deno from "deno-astro-adapter";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: deno(),
});
