import { BlurView } from "@react-native-community/blur"
import * as React from "react"
import { StyleProp, View, ViewStyle, Pressable, Image } from "react-native"
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
  price: number
  change: number
  image: string
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
  image,
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
              <Shadow startColor={"#fff3"} distance={4}>
                <Image source={{ uri: image }} style={styles.icon} />
              </Shadow>
              <View style={styles.textContainer}>
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
              contentInset={{ top: 15, right: 2, bottom: 15, left: 2 }}
            />
            <View style={styles.footer}>
              <Text preset="header-14-18">${+price.toFixed(2)}</Text>
              <Text preset="body-12-14" style={change < 0 ? styles.decrease : styles.increase}>
                {`${change < 0 ? "-" : "+"} ${Math.abs(change).toFixed(2)}%`}
              </Text>
            </View>
          </>
        </Pressable>
      </Shadow>
    </View>
  )
}
