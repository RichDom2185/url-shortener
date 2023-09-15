import { Hono } from "hono";
import setupMiddleware from "./middleware";

const app = new Hono();

setupMiddleware(app);

app.get("/", (c) => c.text("Hello World!"));

export default app;
