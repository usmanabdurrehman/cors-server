const express = require("express");
const app = express();

app.set("port", process.env.PORT || 7000);

app.get("/", (req, res) => {
  res.send("Some Response");
});

app.listen(app.get("port"), () => {
  console.log("Server running on PORT 7000");
});
