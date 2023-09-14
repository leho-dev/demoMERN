import express from "express";
import cors from "cors";
import "./src/config/database/index.js";
import dotenv from "dotenv";
import UserRoute from "./src/api/routes/user.js";

dotenv.config();

const PORT = process.env.PORT || 8082;

const app = express();

app.use(express.json(), express.urlencoded({}), cors());

app.use("/api", UserRoute);

app.listen(PORT, () => {
    console.log(`Running in port ${PORT}`);
});
