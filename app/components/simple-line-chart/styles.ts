import { StyleSheet } from "react-native"
import { CoinTheme } from "../../theme"

export const getThemeStyles = (color: CoinTheme) => {
  switch (color) {
    case "purple":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(190, 26, 247, 1)" },
      })
    case "blue":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(75, 112, 255, 1)" },
      })
    case "grey":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(69, 69, 99, 1)" },
      })
    case "torque":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(18, 118, 167, 1)" },
      })
    case "green":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(1, 127, 4, 1)" },
      })
    case "red":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(249, 107, 75, 1)" },
      })

    default:
      return StyleSheet.create({
        line: { backgroundColor: "rgba(190, 26, 247, 1)" },
      })
  }
}

export const styles = StyleSheet.create({ container: { flex: 1 } })
