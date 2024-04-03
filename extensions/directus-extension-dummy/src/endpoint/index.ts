import { defineEndpoint } from "@directus/extensions-sdk";

export default defineEndpoint({
  id: "greet",
  handler: (router) => {
    router.get("/", (req, res) => res.send("Hello, World!"));
    router.get("/intro", (req, res) => res.send("Nice to meet you."));
    router.get("/goodbye", (req, res) => res.send("Goodbye!"));
  },
});
