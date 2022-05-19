import { BlurView } from "@react-native-community/blur"
import * as React from "react"
import { StyleProp, View, ViewStyle, Pressable } from "react-native"
import { Shadow } from "react-native-shadow-2"
import { Text } from "../text/text"
import { BG_COLOR, BORDER_RADIUS, getThemeStyles, styles } from "./styles"
import { SimpleLineChart } from "../simple-line-chart/simple-line-chart"
import { CoinTheme } from "../../theme"
export interface CoinCardProps {
  style?: StyleProp<ViewStyle>
  theme: CoinTheme
  data: Array<number>
  onPress?: () => void
  title: string
  subtitle: string
  price: string
  change: string
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
  change,
}: CoinCardProps) {
  const themeStyles = getThemeStyles(theme)
  return (
    <View style={style}>
      <Shadow
        startColor="#0005"
        sides={["right", "bottom"]}
        corners={["bottomRight"]}
        radius={BORDER_RADIUS}
        distance={5}
        offset={[2, 2]}
      >
        <Pressable
          style={({ pressed }) => [styles.container, pressed && styles.cardPressed]}
          onPress={onPress}
        >
          <>
            <View style={[styles.blurContent, themeStyles.blur]} />
            <BlurView
              blurType="regular"
              blurAmount={100}
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
                {change}
              </Text>
            </View>
          </>
        </Pressable>
      </Shadow>
    </View>
  )
}
