import { StyleSheet } from "react-native"
import { CoinTheme } from "../../theme"

const ICON_SIZE = 36

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  pressed: { backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: 5 },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE * 0.5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  subtitle: { color: "rgba(255,255,255,0.6)", marginTop: 2 },
  coin: {
    flexDirection: "row",
  },
  priceChange: { textAlign: "right", color: "rgba(0, 182, 112, 1)" },
  chart: { flex: 1, paddingHorizontal: 8 },
})

export const getThemeStyles = (color: CoinTheme) => {
  switch (color) {
    case "purple":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(190, 26, 247, 1)" },
      })
    case "blue":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(75, 112, 255, 1)" },
      })
    case "grey":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(69, 69, 99, 1)" },
      })
    case "torque":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(18, 118, 167, 1)" },
      })
    case "green":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(1, 127, 4, 1)" },
      })
    case "red":
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(249, 107, 75, 1)" },
      })

    default:
      return StyleSheet.create({
        icon: { backgroundColor: "rgba(190, 26, 247, 1)" },
      })
  }
}
