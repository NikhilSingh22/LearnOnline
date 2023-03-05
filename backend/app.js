import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

config({
  path: "./config/config.env",
});

const app = express();

//using middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
// IMPORTING AND USING ROUTES
import courseRoute from "./routes/courseRoutes.js";
import userRoute from "./routes/userRoutes.js";
import ErrorMiddleware from "./middlewares/Error.js";
import other from "./routes/otherRoutes.js";

app.use("/api/v1", courseRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", other);

export default app;

app.use(ErrorMiddleware);
