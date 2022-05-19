import * as React from "react"
import { Pressable, StyleProp, View, ViewStyle } from "react-native"
import { CoinTheme } from "../../theme"
import { SimpleLineChart } from "../simple-line-chart/simple-line-chart"
import { Text } from "../text/text"
import { getThemeStyles, styles } from "./styles"

export interface ListItemProps {
  style?: StyleProp<ViewStyle>
  theme: CoinTheme
  data: number[]
  title: string
  subtitle: string
  price: string
  change: string
}

export const ListItem = function ListItem({
  style,
  theme,
  data,
  title,
  subtitle,
  price,
  change,
}: ListItemProps) {
  const themeStyles = getThemeStyles(theme)

  return (
    <Pressable style={({ pressed }) => [styles.container, style, pressed && styles.pressed]}>
      <View style={styles.coin}>
        <View style={[styles.icon, themeStyles.icon]}>
          <Text>B</Text>
        </View>
        <View>
          <Text preset="header-16-20">{title}</Text>
          <Text preset="body-12-14" style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.chart}>
        <SimpleLineChart theme={theme} data={data} lineWidth={2} />
      </View>
      <View>
        <Text preset="body-14-16">{price}</Text>
        <Text style={styles.priceChange} preset="body-12-14">
          {change}
        </Text>
      </View>
    </Pressable>
  )
}
