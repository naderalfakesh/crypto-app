import { Coin } from "../../models/coin"
import { CoinTheme } from "../../theme"
import { CoinApi, MainCoins } from "./types"

const themeMapper = (coinId: string): CoinTheme => {
  switch (coinId as MainCoins) {
    case "bitcoin":
      return "purple"
    case "cardano":
      return "blue"
    case "ethereum":
      return "green"
    case "shiba-inu":
      return "torque"
    case "solana":
      return "red"
    default:
      return "purple"
  }
}

const fromAPI = (coin: CoinApi): Coin => ({
  id: coin.id,
  title: coin.name,
  subtitle: coin.symbol,
  data: coin.sparkline_in_7d.price,
  change: coin.price_change_percentage_24h_in_currency,
  price: coin.current_price,
  theme: themeMapper(coin.id),
  image: coin.image,
})

export { fromAPI }
