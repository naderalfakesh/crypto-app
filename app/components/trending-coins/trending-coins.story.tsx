import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { TrendingCoins } from "./trending-coins"
import { Coin } from "../../models/coin"
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

const coinList: Coin[] = [
  {
    id: "bitcoin",
    title: "Bitcoin",
    subtitle: "Btc",
    theme: "purple",
    change: +10.32,
    price: 6780,
    image: "",
    data,
  },
  {
    id: "ethereum",
    title: "Ethereum",
    subtitle: "Eth",
    theme: "blue",
    change: +10.32,
    price: 6780,
    image: "",
    data,
  },
]

storiesOf("TrendingCoins", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <TrendingCoins coinList={coinList} />
      </UseCase>
    </Story>
  ))
