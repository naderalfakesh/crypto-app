import { StyleSheet } from "react-native"
import { CoinTheme } from "../../theme"

const ICON_SIZE = 36

export const styles = StyleSheet.create({
  chart: { flex: 1, paddingHorizontal: 8 },
  coin: {
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  icon: {
    alignItems: "center",
    borderRadius: ICON_SIZE * 0.5,
    height: ICON_SIZE,
    justifyContent: "center",
    marginRight: 8,
    overflow: "hidden",
    width: ICON_SIZE,
  },
  pressed: { backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: 5 },
  priceChange: { color: "rgba(0, 182, 112, 1)", textAlign: "right" },
  subtitle: { color: "rgba(255,255,255,0.6)", marginTop: 2 },
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
