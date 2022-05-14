import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { color } from "../../theme"
import { SimpleLineChart } from "./simple-line-chart"
import { View } from "react-native"

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

storiesOf("SimpleLineChart", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Green" usage="width=1">
        <View style={{ height: 150 }}>
          <SimpleLineChart style={{ backgroundColor: color.white }} data={data} theme="green" />
        </View>
      </UseCase>
      <UseCase text="Blue" usage="width=2">
        <View style={{ height: 150 }}>
          <SimpleLineChart
            style={{ backgroundColor: color.white }}
            lineWidth={2}
            data={data}
            theme="blue"
          />
        </View>
      </UseCase>
      <UseCase text="Red" usage="width=3">
        <View style={{ height: 150 }}>
          <SimpleLineChart
            style={{ backgroundColor: color.white }}
            lineWidth={3}
            data={data}
            theme="red"
          />
        </View>
      </UseCase>
    </Story>
  ))
