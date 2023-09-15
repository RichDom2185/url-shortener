import { Hono } from "hono";
import setupMiddleware from "./middleware";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const app = new Hono();

setupMiddleware(app);
app.notFound((c) => c.html(<NotFound />));

app.get("/", (c) => c.html(<LandingPage />));

export default app;
