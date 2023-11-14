
export interface ModelConfig {
  apiModel?: ApiModel;
  reverseProxy?: string;
  timeoutMs?: number;
  socksProxy?: string;
  httpsProxy?: string;
  usage?: string;
  model?: string;
}

export type ApiModel = "ChatGPTAPI" | "ChatGPTUnofficialProxyAPI" | undefined;
