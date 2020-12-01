const express = require("express");
const PORT = process.env.PORT || 8081;

const app = express();

app.get("/health",(_,res) => res.send("HELLO WORLD!"));

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
