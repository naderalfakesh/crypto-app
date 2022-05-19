import { CoinTheme } from "../theme"

export interface Coin {
  id: string
  title: string
  subtitle: string
  price: string
  change: string
  data: number[]
  theme: CoinTheme
}
