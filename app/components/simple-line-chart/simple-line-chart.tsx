import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { LineChart, Path } from "react-native-svg-charts"
import { styles, getThemeStyles, Theme } from "./styles"

interface ShadowProps {
  line?: any

  color: string
}
const Shadow = ({ line, color }: ShadowProps) => (
  <Path key={"shadow"} y={2} d={line} fill={"none"} strokeWidth={4} stroke={color} />
)

export interface SimpleLineChartProps {
  style?: StyleProp<ViewStyle>
  theme: Theme
  data: Array<number>
  lineWidth?: number
  contentInset?: { top?: number; right?: number; bottom?: number; left?: number }
}

export const SimpleLineChart = function SimpleLineChart({
  style,
  theme,
  data,
  lineWidth = 1,
  contentInset,
}: SimpleLineChartProps) {
  const themeStyles = getThemeStyles(theme)
  return (
    <LineChart
      style={[styles.container, style]}
      data={data}
      svg={{
        stroke: themeStyles.line.backgroundColor,
        strokeWidth: lineWidth,
      }}
      contentInset={contentInset}
    >
      <Shadow color={themeStyles.lineShadow.backgroundColor} />
    </LineChart>
  )
}
