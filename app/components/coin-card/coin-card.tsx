import { BlurView } from "@react-native-community/blur"
import * as React from "react"
import { StyleProp, View, ViewStyle, TouchableOpacity } from "react-native"
import { Shadow } from "react-native-shadow-2"
import { Text } from "../text/text"
import { BG_COLOR, BORDER_RADIUS, THEME, getThemeStyles, styles } from "./styles"

export interface CoinCardProps {
  theme: THEME
  style?: StyleProp<ViewStyle>
}

/**
 * A card for main coins on the top of home screen
 */
export const CoinCard = function CoinCard({ style, theme }: CoinCardProps) {
  const themeStyles = getThemeStyles(theme)
  return (
    <Shadow
      startColor="#0001"
      sides={["right", "bottom"]}
      corners={["bottomRight"]}
      radius={BORDER_RADIUS}
      distance={5}
    >
      <TouchableOpacity
        style={[styles.container, style]}
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
        </>
      </TouchableOpacity>
    </Shadow>
  )
}
