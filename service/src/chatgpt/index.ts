import { sendResponse } from "../utils"; // 用於發送響應
import type {
  ModelConfig,
} from "../types";

/**
 * 用於獲取對話配置。
 * 它獲取使用情況數據、反向代理配置、HTTPS代理配置、SOCKS代理配置，並返回包含模型配置的響應。
 * @returns {Promise<ModelConfig>} 一個解析為模型配置的Promise。
 */
async function chatConfig() {
  // 檢查API_REVERSE_PROXY環境變量是否設置，否則使用'-'
  const reverseProxy = process.env.API_REVERSE_PROXY ?? "-";

  // 檢查HTTPS_PROXY或ALL_PROXY環境變量是否設置，否則使用'-'
  const httpsProxy = (process.env.HTTPS_PROXY || process.env.ALL_PROXY) ?? "-";

  // 檢查SOCKS_PROXY_HOST和SOCKS_PROXY_PORT環境變量是否設置，否則使用'-'
  const socksProxy =
    process.env.SOCKS_PROXY_HOST && process.env.SOCKS_PROXY_PORT
      ? `${process.env.SOCKS_PROXY_HOST}:${process.env.SOCKS_PROXY_PORT}`
      : "-";

  // 獲取OPENAI_API_MODEL環境變量
  const model = process.env.OPENAI_API_MODEL;

  // 發送帶有模型配置的響應
  return sendResponse<ModelConfig>({
    type: "Success",
    data: {
      reverseProxy,
      socksProxy,
      httpsProxy,
      model,
    },
  });
}

export { chatConfig };
