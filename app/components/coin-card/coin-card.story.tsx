import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { CoinCard } from "./coin-card"

storiesOf("CoinCard", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Purple theme" style={{ backgroundColor: "#8d99ae" }} noBackground>
        <CoinCard theme="purple" />
      </UseCase>
      <UseCase text="Blue theme" style={{ backgroundColor: "#8d99ae" }} noBackground>
        <CoinCard theme="blue" />
      </UseCase>
      <UseCase text="Red theme" style={{ backgroundColor: "#8d99ae" }} noBackground>
        <CoinCard theme="red" />
      </UseCase>
    </Story>
  ))
