import { BlurView } from "@react-native-community/blur"
import * as React from "react"
import { StyleProp, View, ViewStyle, Pressable } from "react-native"
import { Shadow } from "react-native-shadow-2"
import { Text } from "../text/text"
import { BG_COLOR, BORDER_RADIUS, Theme, getThemeStyles, styles } from "./styles"
import { SimpleLineChart } from "../simple-line-chart/simple-line-chart"
export interface CoinCardProps {
  theme: Theme
  data: Array<number>
  style?: StyleProp<ViewStyle>
}

/**
 * A card for main coins on the top of home screen
 */
export const CoinCard = function CoinCard({ style, data, theme }: CoinCardProps) {
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
        onPress={() => console.log("card pressed")}
      >
        <>
          <View style={[styles.blurContent, themeStyles.blur]} />
          <BlurView
            blurType="ultraThinMaterial"
            blurAmount={10}
            reducedTransparencyFallbackColor={BG_COLOR}
            style={styles.blurView}
          />
          <View style={[styles.icon, themeStyles.icon]}>
            <Text>B</Text>
          </View>
          <SimpleLineChart
            data={data}
            theme={theme}
            lineWidth={2}
            contentInset={{ right: 2, left: 2 }}
          />
        </>
      </Pressable>
    </Shadow>
  )
}
