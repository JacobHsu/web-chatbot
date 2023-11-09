import * as dotenv from "dotenv"; 
import express from "express";

const app = express();
const port = 3003;

// 加載環境變量
dotenv.config();
console.log(process.env.OPENAI_API_KEY);

app.get("/", (req, res) => {
  res.send("Hello World ts!");
});

app.listen(port, () =>
  globalThis.console.log(`Server is running on port ${port} http://localhost:${port}`)
);


