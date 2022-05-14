import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { CoinCard } from "./coin-card"

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

storiesOf("CoinCard", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Purple theme" style={{ backgroundColor: "rgba(29, 28, 67, 1)" }} noBackground>
        <CoinCard theme="purple" data={data} />
      </UseCase>
      <UseCase text="Blue theme" style={{ backgroundColor: "rgba(29, 28, 67, 1)" }} noBackground>
        <CoinCard theme="blue" data={data} />
      </UseCase>
      <UseCase text="Red theme" style={{ backgroundColor: "rgba(29, 28, 67, 1)" }} noBackground>
        <CoinCard theme="red" data={data} />
      </UseCase>
    </Story>
  ))
