import express, { json } from "express";
import routesIndex from "./routes/index";

const app: express.Application = express();
const port: number = 3000;

app.use(json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.use(routesIndex);

export default app;