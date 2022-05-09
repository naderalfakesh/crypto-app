import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Avatar } from "./avatar"

const rick = require("../auto-image/rick.png")

storiesOf("Avatar", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary usage" noBackground>
        <Avatar source={rick} />
      </UseCase>
    </Story>
  ))
