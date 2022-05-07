const API_URL = "https://api.coingecko.com/api/v3"

export interface ApiConfig {
  url: string
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL,
  timeout: 20000,
}
