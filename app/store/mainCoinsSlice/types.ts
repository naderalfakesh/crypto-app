export type getParams = {
  gecko_says: string
}

export type CoinApi = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  price_change_percentage_24h_in_currency: number
  last_updated: string
  sparkline_in_7d: {
    price: number[]
  }
}

export type getResponse = CoinApi[]

export type MainCoins = "bitcoin" | "ethereum" | "cardano" | "shiba-inu" | "solana"
