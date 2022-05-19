import { StyleSheet } from "react-native"
import { CoinTheme } from "../../theme"

const BLUR_SIZE = 60
const PADDING = 16
const CARD_HEIGHT = 160
const ICON_SIZE = 36
export const BORDER_RADIUS = 18
export const BG_COLOR = "rgba(255,255,255,1)"

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
    padding: PADDING,
  },
  cardPressed: {
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  header: { flexDirection: "row" },
  subtitle: { color: "rgba(255,255,255,0.6)", marginTop: 2 },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE * 0.5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  blurContent: {
    position: "absolute",
    width: BLUR_SIZE,
    height: BLUR_SIZE,
    borderRadius: BLUR_SIZE * 0.5,
    alignSelf: "center",
    top: CARD_HEIGHT * 0.5 - BLUR_SIZE * 0.5,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  increase: {
    color: "rgba(4, 220, 0, 1)",
  },
  decrease: {
    color: "rgba(232, 80, 58, 1)",
  },
})

export const getThemeStyles = (color: CoinTheme) => {
  switch (color) {
    case "purple":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(190, 26, 247, 1)" },
        blur: { backgroundColor: "rgba(190, 26, 247, 0.8)" },
      })
    case "blue":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(75, 112, 255, 1)" },
        blur: { backgroundColor: "rgba(75, 112, 255,  0.8)" },
      })
    case "grey":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(69, 69, 99, 1)" },
        blur: { backgroundColor: "rgba(69, 69, 99,  0.8)" },
      })
    case "torque":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(18, 118, 167, 1)" },
        blur: { backgroundColor: "rgba(18, 118, 167,  0.8)" },
      })
    case "green":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(1, 127, 4, 1)" },
        blur: { backgroundColor: "rgba(1, 127, 4,  0.8)" },
      })
    case "red":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(249, 107, 75, 1)" },
        blur: { backgroundColor: "rgba(249, 107, 75,  0.8)" },
      })

    default:
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(190, 26, 247, 1)" },
        blur: { backgroundColor: "rgba(190, 26, 247,  0.8)" },
      })
  }
}
