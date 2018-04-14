const PORT = process.env.PORT || 3210;

const express = require("express");
const morgan = require("morgan");
const spell = require("../lib/spell");

const app = express();
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/api/spell", async (req, res) => {
  const corrected = await spell.api(req.query.word);
  res.json({ corrected });
});

app.listen(PORT, () => console.log(`Spell checker listening on port ${PORT}!`));
