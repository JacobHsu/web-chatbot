require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log(process.env.OPENAI_API_KEY);

import { ChatGPTAPI } from "chatgpt";

async function example() {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const res = await api.sendMessage("Hello World!");
  console.log(res.text);
}

example();

