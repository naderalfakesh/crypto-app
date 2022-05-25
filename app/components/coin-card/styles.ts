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
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
  },
  textContainer: {
    marginLeft: 10,
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
      })
    case "blue":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(75, 112, 255,  0.8)" },
      })
    case "grey":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(69, 69, 99,  0.8)" },
      })
    case "torque":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(18, 118, 167,  0.8)" },
      })
    case "green":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(1, 127, 4,  0.8)" },
      })
    case "red":
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(249, 107, 75,  0.8)" },
      })

    default:
      return StyleSheet.create({
        blur: { backgroundColor: "rgba(190, 26, 247,  0.8)" },
      })
  }
}
