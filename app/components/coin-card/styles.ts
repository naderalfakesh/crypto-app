import { StyleSheet } from "react-native"

const BLUR_SIZE = 60
const PADDING = 16
const CARD_HEIGHT = 160
const ICON_SIZE = 36
export const BORDER_RADIUS = 18
export const BG_COLOR = "rgba(255,255,255,0.12)"

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
    padding: PADDING,
    backgroundColor: BG_COLOR,
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE * 0.5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  blurContent: {
    position: "absolute",
    width: BLUR_SIZE,
    height: BLUR_SIZE,
    alignSelf: "center",
    top: CARD_HEIGHT * 0.5 - BLUR_SIZE * 0.5,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
})

export type THEME = "purple" | "blue" | "grey" | "torque" | "green" | "red"

export const getThemeStyles = (color: THEME) => {
  switch (color) {
    case "purple":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(190, 26, 247, 1)" },
        blur: { backgroundColor: "rgba(190, 26, 247, 1)" },
      })
    case "blue":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(75, 112, 255, 1)" },
        blur: { backgroundColor: "rgba(75, 112, 255, 1)" },
      })
    case "grey":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(69, 69, 99, 1)" },
        blur: { backgroundColor: "rgba(69, 69, 99, 1)" },
      })
    case "torque":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(18, 118, 167, 1)" },
        blur: { backgroundColor: "rgba(18, 118, 167, 1)" },
      })
    case "green":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(1, 127, 4, 1)" },
        blur: { backgroundColor: "rgba(1, 127, 4, 1)" },
      })
    case "red":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(249, 107, 75, 1)" },
        blur: { backgroundColor: "rgba(249, 107, 75, 1)" },
      })

    default:
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(190, 26, 247, 1)" },
        blur: { backgroundColor: "rgba(190, 26, 247, 1)" },
      })
  }
}
