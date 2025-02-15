const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => res.send("Hello World from Backend!"));

app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));
