import * as dotenv from "dotenv"; 
import express from "express";
import { auth } from "./middleware/auth";
import { chatConfig } from "./chatgpt";

const app = express();
const port = 3003;

// 創建路由實例
const router = express.Router();

// 從"public"目錄下創建靜態文件服務
app.use(express.static("public"));
// 解析JSON
app.use(express.json());

// 設置跨域請求頭
app.all("*", (_, res, next) => {
  // 允許所有來源的請求
  res.header("Access-Control-Allow-Origin", "*");
  // 允許請求攜帶自定義請求頭
  res.header("Access-Control-Allow-Headers", "authorization, Content-Type");
  // 允許所有HTTP方法
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

// 加載環境變量
dotenv.config();
console.log(process.env.OPENAI_API_KEY);

app.get("/", (req, res) => {
  res.send("Hello World ts!");
});

// 處理"/config"路由的POST請求
router.post("/config", auth, async (req, res) => {
  try {
    const response = await chatConfig();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () =>
  globalThis.console.log(`Server is running on port ${port} http://localhost:${port}`)
);


