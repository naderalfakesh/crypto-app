import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { ListItem } from "./list-item"
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

storiesOf("ListItem", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase
        text="Primary"
        usage="The primary."
        style={{ backgroundColor: "rgba(29, 28, 67, 1)" }}
      >
        <ListItem
          theme="blue"
          data={data}
          title="Bitcoin"
          subtitle="Btc"
          price={99284.01}
          change={+68.3}
        />
      </UseCase>
    </Story>
  ))
