const express = require("express");


const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).send({
    version: "1.0.0",
  });
});

app.listen(3000, () => {
  console.log(`Serveur running on port 3000`);
});
