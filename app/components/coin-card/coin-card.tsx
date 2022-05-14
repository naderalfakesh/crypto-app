import { BlurView } from "@react-native-community/blur"
import * as React from "react"
import { StyleProp, View, ViewStyle, Pressable } from "react-native"
import { Shadow } from "react-native-shadow-2"
import { Text } from "../text/text"
import { BG_COLOR, BORDER_RADIUS, Theme, getThemeStyles, styles } from "./styles"
import { SimpleLineChart } from "../simple-line-chart/simple-line-chart"
export interface CoinCardProps {
  style?: StyleProp<ViewStyle>
  theme: Theme
  data: Array<number>
  onPress?: () => void
  title: string
  subtitle: string
  price: string
  percentage: string
}

/**
 * A card for main coins on the top of home screen
 */
export const CoinCard = function CoinCard({
  style,
  data,
  theme,
  onPress,
  title,
  subtitle,
  price,
  percentage,
}: CoinCardProps) {
  const themeStyles = getThemeStyles(theme)
  return (
    <Shadow
      startColor="#0001"
      sides={["right", "bottom"]}
      corners={["bottomRight"]}
      radius={BORDER_RADIUS}
      distance={5}
    >
      <Pressable
        style={({ pressed }) => [styles.container, pressed && styles.cardPressed, style]}
        onPress={onPress}
      >
        <>
          <View style={[styles.blurContent, themeStyles.blur]} />
          <BlurView
            blurType="light"
            blurAmount={35}
            reducedTransparencyFallbackColor={BG_COLOR}
            style={styles.blurView}
          />
          <View style={styles.header}>
            {/* Replace with icon component */}
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
          <SimpleLineChart
            data={data}
            theme={theme}
            lineWidth={2}
            contentInset={{ top: 5, right: 2, bottom: 5, left: 2 }}
          />
          <View style={styles.footer}>
            <Text preset="header-14-18">{price}</Text>
            {/* todo: replace increase with condition for increase and decrease */}
            <Text preset="body-12-14" style={styles.increase}>
              {percentage}
            </Text>
          </View>
        </>
      </Pressable>
    </Shadow>
  )
}
