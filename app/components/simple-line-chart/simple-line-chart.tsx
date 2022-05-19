import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { LineChart, Path } from "react-native-svg-charts"
import { CoinTheme } from "../../theme"
import { styles, getThemeStyles } from "./styles"

interface ShadowProps {
  line?: any
}
const Shadow = ({ line }: ShadowProps) => (
  <Path key={"shadow"} y={2} d={line} fill={"none"} strokeWidth={4} stroke="rgba(0, 0, 0, 0.1)" />
)

export interface SimpleLineChartProps {
  style?: StyleProp<ViewStyle>
  theme: CoinTheme
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
      <Shadow />
    </LineChart>
  )
}
