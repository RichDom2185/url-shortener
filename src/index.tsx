import { Hono } from "hono";
import setupMiddleware from "./middleware";
import ComingSoon from "./pages/ComingSoon";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Links from "./routes/links";

const app = new Hono();

setupMiddleware(app);
app.notFound((c) => c.html(<NotFound />));

app.get("/", (c) => c.html(<LandingPage />));
app.get("/new", (c) => c.html(<ComingSoon />));
app.post("/new", Links.handleCreateForm);

export default app;
