import express from "express";
import morgan from "morgan";
import cors from "cors";
import itemsRouter from "./routers/itemsRouter";
import { generalError, notFoundError } from "./middlewares/errors";
import usersRouter from "./routers/usersRouter";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/items", itemsRouter);
app.use("/users", usersRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
