import { Hono } from "hono";
import setupMiddleware from "./middleware";
import NotFound from "./pages/NotFound";

const app = new Hono();

setupMiddleware(app);
app.notFound((c) => c.html(<NotFound />));

app.get("/", (c) => c.text("Hello World!"));

export default app;
