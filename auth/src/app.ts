import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "@src/routes"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/auth", authRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
