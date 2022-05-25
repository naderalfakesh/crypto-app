import { CoinTheme } from "../theme"

export interface Coin {
  id: string
  title: string
  subtitle: string
  price: number
  change: number
  data: number[]
  theme: CoinTheme
  image: string
}
