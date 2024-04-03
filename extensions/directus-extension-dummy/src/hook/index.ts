import { defineHook } from "@directus/extensions-sdk";
import e from "express";

export default defineHook(({ init }, ctx) => {
  init("middlewares.before", (meta) => {
    const app = meta.app as e.Application;
    app.use((_req, res, next) => {
      ctx.logger.info("Very Good Baby!");
      next();
    });
  });
});
