import * as React from "react"
import { StyleProp, ImageStyle, View, ViewStyle, ImageURISource, StyleSheet } from "react-native"
import { color } from "../../theme"
import { AutoImage } from "../auto-image/auto-image"

const IMAGE_SIZE = 50

const CONTAINER: ViewStyle = {
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  overflow: "hidden",
  borderRadius: IMAGE_SIZE / 2,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: color.white,
}

const IMAGE: ImageStyle = {
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  resizeMode: "contain",
}

export interface AvatarProps {
  /**
   * Image source.
   */
  source: ImageURISource
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Avatar = function Avatar(props: AvatarProps) {
  const { style, source } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View style={styles}>
      <AutoImage source={source} style={IMAGE} />
    </View>
  )
}
