import { StyleSheet } from "react-native"
import { CoinTheme } from "../../theme"

const BLUR_SIZE = 60
const PADDING = 16
const CARD_HEIGHT = 160
const ICON_SIZE = 36
export const BORDER_RADIUS = 18
export const BG_COLOR = "rgba(255,255,255,1)"

export const styles = StyleSheet.create({
  blurContent: {
    alignSelf: "center",
    borderRadius: BLUR_SIZE * 0.5,
    height: BLUR_SIZE,
    position: "absolute",
    top: CARD_HEIGHT * 0.5 - BLUR_SIZE * 0.5,
    width: BLUR_SIZE,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
  cardPressed: {
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  container: {
    borderRadius: BORDER_RADIUS,
    height: CARD_HEIGHT,
    padding: PADDING,
    width: 200,
  },
  footer: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: { flexDirection: "row" },
  icon: {
    alignItems: "center",
    borderRadius: ICON_SIZE * 0.5,
    height: ICON_SIZE,
    justifyContent: "center",
    marginRight: 8,
    overflow: "hidden",
    width: ICON_SIZE,
  },
  increase: {
    color: "rgba(4, 220, 0, 1)",
  },
  decrease: {
    color: "rgba(232, 80, 58, 1)",
  },
  subtitle: { color: "rgba(255,255,255,0.6)", marginTop: 2 },
})

export const getThemeStyles = (color: CoinTheme) => {
  switch (color) {
    case "purple":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(190, 26, 247, 0.8)" },
        icon: { backgroundColor: "rgba(190, 26, 247, 1)" },
      })
    case "blue":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(75, 112, 255,  0.8)" },
        icon: { backgroundColor: "rgba(75, 112, 255, 1)" },
      })
    case "grey":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(69, 69, 99,  0.8)" },
        icon: { backgroundColor: "rgba(69, 69, 99, 1)" },
      })
    case "torque":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(18, 118, 167,  0.8)" },
        icon: { backgroundColor: "rgba(18, 118, 167, 1)" },
      })
    case "green":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(1, 127, 4,  0.8)" },
        icon: { backgroundColor: "rgba(1, 127, 4, 1)" },
      })
    case "red":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(249, 107, 75,  0.8)" },
        icon: { backgroundColor: "rgba(249, 107, 75, 1)" },
      })

    default:
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(190, 26, 247,  0.8)" },
        icon: { backgroundColor: "rgba(190, 26, 247, 1)" },
      })
  }
}
