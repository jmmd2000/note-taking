const cors = require("cors");
const express = require("express");
const app = express();
import { Request, Response } from "express";

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.get("/api/sample", (req: Request, res: Response) => {
  res.json({ message: "This is a CORS-enabled response with specific origins." });
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
