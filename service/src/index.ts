import express from "express";

const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello World ts!");
});

app.listen(port, () =>
  globalThis.console.log(`Server is running on port ${port} http://localhost:${port}`)
);




