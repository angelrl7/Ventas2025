import express from "express";
import { controllers } from "./controllers/controllers.js";

const app = express();

controllers(app);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`servidor corriendo con http://localhost:${PORT}`);
});