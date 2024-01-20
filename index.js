import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3333, () => {
  console.log("Server is listening on port 3333");
});
