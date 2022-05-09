import * as React from "react"
import { StyleProp, ImageStyle, View, ViewStyle, ImageURISource } from "react-native"
import { color } from "../../theme"
import { AutoImage } from "../auto-image/auto-image"

const CONTAINER_SIZE = 50
const IMAGE_SIZE = 40

const CONTAINER: ViewStyle = {
  width: CONTAINER_SIZE,
  height: CONTAINER_SIZE,
  overflow: "hidden",
  borderRadius: CONTAINER_SIZE / 2,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
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
