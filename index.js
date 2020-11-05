const express = require("express");
const app = express();

const path = require("path");

//Define static files for JS
app.use(
  "/static",
  express.static(path.resolve(__dirname, "Frontend", "static"))
);
//Define URL
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend", "index.html"));
});

//Listen app
app.listen(5000, () => {
  console.log("Server started");
});
