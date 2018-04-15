const PORT = process.env.PORT || 3210;

const express = require("express");
const morgan = require("morgan");
const spell = require("../lib/spell");

const app = express();
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/api/spell", async (req, res) => {
  const result = await spell.api(req.query.word);

  // check if there are any errors from C lib
  // the first 9 characters indicate the errors
  if (result.substr(0, 9) === "{{error}}") {
    res.status(500).send({ error: result.substr(9) });
    return;
  }

  res.json({ result });
});

app.listen(PORT, () => console.log(`Spell checker listening on port ${PORT}!`));
